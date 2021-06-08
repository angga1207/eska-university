// Loader
$(window).on('load', function() {
    window.setTimeout(fadeout, 1000);

    function fadeout() {
        $('.preloader').addClass('loaded');
    }

});
// Loader

// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 100);
    return false;
});

// Sticky Navbar
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
});
// Back to top button

// ScrollDown Navbar
document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener('scroll', function() {

        if (window.scrollY > 100) {
            document.getElementById('navbar_top').classList.add('scrolled');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            $('.top-header').addClass('hide');
        } else {
            document.getElementById('navbar_top').classList.remove('scrolled');
            document.body.style.paddingTop = '0';
            $('.top-header').removeClass('hide');
        }
    });
});
// ScrollDown Navbar

// DropdownHover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});
// DropdownHover

// Banner Carousel
$(document).ready(function() {
    $(".banner_carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: false,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        nav: true,
        dots: true,
        items: 1,
        autoHeight: true,
        // animateOut: 'slideOutLeft',
        // animateIn: 'slideInRight',
        // addClassActive: true,
        // afterMove: function() {
        //     var caption = $(".owl-item.active .text-banner").detach();
        //     caption.appendTo(".owl-item.active > div");
        // }
    });
});
// Banner Carousel

// Banner Carousel
$(document).ready(function() {
    $(".quotes_carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        nav: false,
        dots: true,
        items: 1,
        autoHeight: false,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
    });
});
// Banner Carousel

// WoW Init
$(document).ready(function() {
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
});
// WoW Init

// Isotope Init
$(document).ready(function() {
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
});
// Isotope Init

// SearchButtonTrigger
$(".header-search-btn").on('click', function(e) {
    e.preventDefault();
    // $(".backdrop-search").toggleClass('show');
    $(".backdrop-search").fadeIn('slow');

    $(".backdrop-close").on('click', function() {
        // $(".backdrop-search").removeClass('show');
        $(".backdrop-search").fadeOut('slow');
    });
});
// SearchButtonTrigger

// Venobox
$('.gallery_venobox').venobox({
    framewidth: 'auto', // default: ''
    frameheight: '80vh', // default: ''
    border: '10px', // default: '0'
    bgcolor: '#5dff5e', // default: '#fff'
    titleattr: 'data-title', // default: 'title'
    numeratio: true, // default: false
    numerationPosition: 'bottom',
    numerationColor: '#ffffff',
    infinigall: true, // default: false
    spinner: "three-bounce",
    share: ['facebook', 'twitter', 'download'], // default: []
    arrowsColor: "#ffffff",
});
// Venobox