$(document).ready(function () {
    $("#foot_sec").css({ opacity: 0.2 });
    $("#foot_sec").mouseover(function (e) {
        $("#foot_sec").css({ opacity: 1 });
    });
    $("#foot_sec").mouseout(function (e) {
        $("#foot_sec").css({ opacity: 0.2 });
    });

    var PageContentHeight = $("#PageHeightContent").height();
    var PageLocalStorageHeight = localStorage.pageHeightMain;

    if (PageContentHeight < PageLocalStorageHeight) {
        $("#foot_sec_top").css({ "height": "3px" });
        $("#foot_sec").css({ "position": "absolute", "z-index": "999" }); 
    }
    else {
        $("#foot_sec_top").css({ "height": "75px" });
        $("#foot_sec").css({ "position": "fixed", "bottom": "10px", "z-index": "999" });
    }

});

