$(document).ready(function () {
    $(".PageContent_Container").css("height", localStorage.pageHeightMain);
    $(".PageContent_Container").niceScroll();
    $(document).keydown(function (e) {
        if (e.keyCode == 40) {
            $(".PageContent_Container").css("height", localStorage.pageHeightMain);
            $(".PageContent_Container").niceScroll();
            return false;
        }
    });
    $(".Edit_Measure_Slide_div_outer").niceScroll();
    
    

    $('#menu-toggle').click(function () {
        $('#menu').toggleClass('open');
        e.preventDefault();
    });


    $('.submited_project li a').bind('mouseenter', function () {
        var $this = $(this);

        if (this.offsetWidth < this.scrollWidth && !$this.attr('title')) {
            $this.attr('title', $this.text());
        }
    });
    $('.sub_title_rows li').bind('mouseenter', function () {
        var $this = $(this);
        if (this.offsetWidth < this.scrollWidth && !$this.attr('title')) {
            var str = $this.text();
            var res = str.split(":");
            $this.attr('title', res[1]);
        }
    });

});