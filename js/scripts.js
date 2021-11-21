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
});
