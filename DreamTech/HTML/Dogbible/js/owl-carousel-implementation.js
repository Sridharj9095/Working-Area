var owl = $(".owl-carousel");

function createRows() {
  var itemsPerRow = 2;
  var allItems = $(".breedicon-box");
  var groupedItems = [];
  for (var i = 0; i < allItems.length; i += itemsPerRow) {
    var rowItems = allItems.slice(i, i + itemsPerRow);
    var wrapper = $("<div class='item-row'></div>");
    rowItems.appendTo(wrapper);
    groupedItems.push(wrapper);
  }
  $(".owl-carousel").empty().append(groupedItems);
}
createRows();
owl.owlCarousel({
  navText: [
    "<img src='source/svg/left-arrow.png' alt='Previous' class='custom-nav'>",
    "<img src='source/svg/right-arrow.png' alt='Next' class='custom-nav'>",
  ],
  nav: true,
  dots: false,
  slideBy: "page",
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    991: {
      items: 5,
    },
  },
});
