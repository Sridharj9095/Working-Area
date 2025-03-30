// First Carousel (Breed Carousel with multiple rows)
var breedOwl = $(".breed-carousel");

function createRows(carousel) {
  var itemsPerRow = 2;
  var allItems = carousel.find(".breedicon-box"); // Select items within the specific carousel
  var groupedItems = [];

  for (var i = 0; i < allItems.length; i += itemsPerRow) {
    var rowItems = allItems.slice(i, i + itemsPerRow);
    var wrapper = $("<div class='item-row'></div>");
    rowItems.appendTo(wrapper);
    groupedItems.push(wrapper);
  }

  // Clear and append grouped items to the carousel
  carousel.empty().append(groupedItems);
}

// Initialize First Carousel with Multiple Rows
createRows(breedOwl);
breedOwl.owlCarousel({
  navText: [
    "<img src='source/svg/left-arrow.png' alt='Previous' class='custom-nav'>",
    "<img src='source/svg/right-arrow.png' alt='Next' class='custom-nav'>",
  ],
  nav: true,
  dots: false,
  slideBy: "page",
  loop: true,
  responsive: {
    0: { items: 1 },
    768: { items: 3 },
    991: { items: 5 },
  },
});

// Second Carousel (Pet Carousel)
var petOwl = $(".pet-carousel");

petOwl.owlCarousel({
  navText: [
    "<img src='source/svg/left-arrow.png' alt='Previous' class='custom1-nav'>",
    "<img src='source/svg/right-arrow.png' alt='Next' class='custom1-nav'>",
  ],
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    991: { items: 4 },
  },
});
