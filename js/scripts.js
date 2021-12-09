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
  $("#work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* 
        team
        ----------------------
    */
  $("#team-members").owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });

  /* 
        testimonials
        ----------------------
    */
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
  });

  /* 
        stats
        ----------------------
    */
  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });

  /* 
        client
        ----------------------
    */
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    loop: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 3,
      },
      768: {
        items: 5,
      },
      992: {
        items: 6,
      },
    },
  });

  /* 
        navigation
        ----------------------
    */
  // show/hide transparent navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      // hide
      $("nav").removeClass("starshow-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      // show
      $("nav").addClass("starshow-top-nav");
      $("#back-to-top").fadeIn();
    }
  });

  // smooth scroll
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    var section = $(this).attr("href");
    $("html, boy").animate(
      {
        scrollTop: $(section).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });

  // close mobile menu on click
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggle").click();
  });
});
