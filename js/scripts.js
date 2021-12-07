$(function () {

    /* 
        services
        ----------------------
    */
    new WOW().init();


    /* 
        works
        ----------------------
    */
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* 
        team
        ----------------------
    */
    $('#team-members').owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true
    });

    /* 
        testimonials
        ----------------------
    */
    $('#customers-testimonials').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true
    });

    /* 
        stats
        ----------------------
    */
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    /* 
        client
        ----------------------
    */
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true
    });
});
