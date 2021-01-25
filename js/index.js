
//  Preloader
$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(700).fadeOut(600, function () {
            $(this).remove();
        });
    }

});
//  General
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// // We listen to the resize event
// window.addEventListener('resize', () => {
//     // We execute the same script as before
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//   });


$(document).ready(function () {
    $(this).on("scroll", function () {
        if ($(this).scrollTop() > 78) {
            $("nav").addClass("shrink");
            $(".navbar-brand img").css({ "max-height": "55px" });
        } else {
            $("nav").removeClass("shrink");
            $(".navbar-brand img").css({ "max-height": "70px" });
        };
    });
    $('a#back-to-top').click(function () {
        $("html,body").animate({ scrollTop: 0 }, 2000);
        return false;
    });
});

/* Important for z-index issues on opening modal at body tag */

$(document).on('show.bs.modal', '.modal', function () {
    $(this).appendTo('body');

});

/* Google Translate Widget Activation */

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}


function openNav() {
    document.getElementById("mySidepanel").style.width = "150px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}


/* Need to delete */

// WORK IN PROGRESS BELOW

//$('document').ready(function () {


//     // RESTYLE THE DROPDOWN MENU
// $('#google_translate_element').on("click", function () {

//     // Change font family and color
//     $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
//         .css({
//             'color': '#544F4B',
//             'font-family': 'Roboto',
//                             'width':'100%'
//         });
//     // Change menu's padding
//     $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');

//             // Change menu's padding
//     $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');

//     // Change the padding of the languages
//     $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');

//     // Change the width of the languages
//     $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
//     $("iframe").contents().find('td').css('width', '100%');

//     // Change hover effects
//     $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
//         $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
//     }, function () {
//         $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
//     });

//     // Change Google's default blue border
//     $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

//     // Change the iframe's box shadow
//     $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');



//     // Change the iframe's size and position?
//     $(".goog-te-menu-frame").css({
//         'height': '100%',
//         'width': '100%',
//         'top': '0px'
//     });
//     // Change iframes's size
//     $("iframe").contents().find('.goog-te-menu2').css({
//         'height': '100%',
//         'width': '100%'
//     });
// });
// });