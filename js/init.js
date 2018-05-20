$( function() {
    // init tabs
    $( ".services-tab" ).tabs();
    // init portfolio tabs

    //init reviews carousel
    $('.reviews-carousel').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
} );