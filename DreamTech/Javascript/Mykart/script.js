const shopCart = document.querySelectorAll(".shopcart");
const itemBrand = document.getElementById("itembrand");
const itemTitle = document.getElementById("itemtitle");
const itemDesc = document.getElementById("itemdesc");
const itemPrice = document.getElementById("itemprice");
const itemOffer = document.getElementById("itemoffer");
const applyCoupon = document.getElementById("applycoupon");
const couponApplied = document.getElementById("couponapplied");
const addToCart = document.getElementById("addtocart");
const itemPicture = document.querySelector("#itempicture img");

function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

addToCart.addEventListener("click", function (event) {
  event.preventDefault();

  const productDetails = {
    brand: itemBrand.textContent.trim(),
    title: itemTitle.textContent.trim(),
    desc: itemDesc.textContent.trim(),
    price: parseFloat(itemPrice.textContent),
    offer: parseFloat(itemOffer.textContent),
    image: itemPicture.src,
  };

  localStorage.setItem("cartItem", JSON.stringify(productDetails));
  window.location.href = "cart.html";
});

applyCoupon.addEventListener("click", setCouponApply);

function setCouponApply() {
  const isCouponApplied = applyCoupon.textContent.trim() === "Apply";
  applyCoupon.textContent = isCouponApplied ? "Coupon applied" : "Apply";

  const newPrice = isCouponApplied ? 279 : 379;
  const newOffer = isCouponApplied ? 72 : 62;

  itemPrice.textContent = newPrice;
  itemOffer.textContent = newOffer;
}

function updateCounter(change) {
  let counterInput = document.getElementById("cart-quantity");
  let itemcount = document.getElementById("itemcount");
  let totalValue = document.getElementById("totalvalue");
  let currentValue = parseInt(counterInput.value);

  let newValue = currentValue + change;
  if (newValue >= 1 && newValue <= 5) {
    counterInput.value = newValue;
  }

  if (counterInput) {
    itemcount.textContent = counterInput.value;
    let cartItem = JSON.parse(localStorage.getItem("cartItem"));

    if (cartItem) {
      let totalPrice = cartItem.price * parseInt(counterInput.value);
      totalValue.textContent = totalPrice.toFixed(2);
    }
  }
}
