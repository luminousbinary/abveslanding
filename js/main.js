(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    // whatsapp link redirect 
    // $('#whatsappForm').on('click', function (event) {

    //     event.preventDefault(); // Prevent the form from submitting the traditional way
    //     // const phoneNumber = '2347061362019';
    //     // const message = $('whtsapp-message').value;

    //     // // Construct the WhatsApp API link
    //     // const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    //     console.log(phoneNumber, message, " just now click");
    //     // Redirect the user to the WhatsApp API link
    //     // window.location.href = whatsappLink;

    // })

    // getElementById('whatsappForm').addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent the form from submitting the traditional way

    //     // Get the phone number and message
    //     const phoneNumber = '93848470929';
    //     const message = document.getElementById('message').value;

    //     // Construct the WhatsApp API link
    //     const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    //     // Redirect the user to the WhatsApp API link
    //     window.location.href = whatsappLink;


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

