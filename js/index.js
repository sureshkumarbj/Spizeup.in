
//  Preloader
$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(700).fadeOut(600, function () {
            $(this).remove();
        });
    }

});
//  General
$(document).ready(function () {
    $(this).on("scroll", function () {
        if ($(this).scrollTop() > 80) {
            $("nav").addClass("shrink");
            $("header").find("img").css("max-height", "35px");
            $("nav").css({ "border-bottom": "solid 1px #149c1f", "background": "#0d3611d5", "transition": "all 0.5s" });
        } else {
            $("nav").removeClass("shrink");
            $("header").find("img").css("max-height", "70px");
            $("nav").css({ "border-bottom": "#149c1f", "background": "#0d361146" });
        };
    });
    $('a#back-to-top').click(function () {
        $("html,body").animate({ scrollTop: 0 }, 2000);
        return false;
    });
});

// Important for z-index issues on opening modal at body tag

$(document).on('show.bs.modal', '.modal', function () {
    $(this).appendTo('body');

});


