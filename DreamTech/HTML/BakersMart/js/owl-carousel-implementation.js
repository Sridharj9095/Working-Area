var owl = $(".owl-carousel");
owl.owlCarousel({
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  loop: true,
  margin: 10,
  navText: ["<", ">"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});
