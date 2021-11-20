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
});

