$(document).ready(function() {
    /* Check width on page load*/
    if ($(window).width() < 993) {
        $('.menu-button').addClass('hide');
    } else {}
});

$(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() < 993) {
        $('.menu-button').removeClass('hide');
    } else {
        $('.menu-button').addClass('hide');
    }
});

$(function() {
    var hasBeenTrigged = false;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100 && !hasBeenTrigged) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
            $('nav').addClass('small-nav');
            hasBeenTrigged = true;
        } else if ($(this).scrollTop() <= 100 && hasBeenTrigged) {
            $('nav').removeClass('small-nav');
            hasBeenTrigged = false;
        }
    });
});


//Toogle Mobile Menu
$(".menu-button").click(function() {
    $('.menu').toggleClass('slide');
});
// Scroll To Section of Page
$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('.menu').removeClass('slide');
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 800, 'linear');
});


//on scroll
$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('.hero-main-text');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $('#top-nav').css('background-color', '#02edb5');
        } else {
            $('#top-nav').css('background-color', 'transparent');
        }
    });
});


//gallery
$('.appartment-containe').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


//gallery
$('.appartment-container').slick({
    infinite: true,
    slideToShow: 3,
    slideToScroll: 3
});

//testimonial-slider 
$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
});


//map
function initMap() {
    var lagos = {
        lat: 6.538611,
        lng: 3.382306
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: Lagos
        });
    var marker = new google.maps.Marker({
        position: Lagos,
        map: map
    });
}