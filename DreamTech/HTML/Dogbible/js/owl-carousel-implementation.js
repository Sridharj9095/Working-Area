var owl = $(".owl-carousel");
owl.owlCarousel({
  margin: 10,
  navText: ["<--", "-->"],
  nav: true,
  dots: true,
  slideBy: "page",
  responsive: {
    0: {
      items: 1,
      rows: 2, //custom option not used by Owl Carousel, but used by the algorithm below
    },
    768: {
      items: 2,
      rows: 3, //custom option not used by Owl Carousel, but used by the algorithm below
    },
    991: {
      items: 5,
      rows: 2, //custom option not used by Owl Carousel, but used by the algorithm below
    },
  },
});
