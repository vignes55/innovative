(function ($) {

    // Shuffle function from: http://james.padolsey.com/javascript/shuffling-the-dom/

    $.fn.shuffle = function () {

        var allElems = this.get(),
            getRandom = function (max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function () {
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });

        this.each(function (i) {
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);
    };
})(jQuery);





    $(function () {

        $(".discounted-item")

        $("#allShow").click(function () {

            var thisFilter = $(this).attr("id");
            $(".discounted-item").fadeIn(750);
            $("." + thisFilter).fadeOut(750);
            $("#ShowHidePicker a").removeClass("current");
            $(this).addClass("current");
            return false;
        });

        $(".ShowEFields").click(function () {

            var thisFilter = $(this).attr("id");
            $(".discounted-item").fadeOut(750);
            $("." + thisFilter).fadeIn(750);
            $("#ShowHidePicker a").removeClass("current");
            $(this).addClass("current");
            return false;
        });

    });


    $(document).ready(function (e) {

        $("#ShowEditF").hide();

        $("#allShow").click(function (e) {
            $("#allShow").hide();
            $("#ShowEditF").show();

        });

        $("#ShowEditF").click(function (e) {
            $("#allShow").show();
            $("#ShowEditF").hide();

        });

    });
