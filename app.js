let total = 0;

function addToCart(name, price) {
  const cartItems = document.getElementById("cartItems");

  const item = document.createElement("div");
  item.innerHTML = "🛒 " + name + " - ₹" + price;

  item.style.padding = "5px";

  cartItems.appendChild(item);

  total += price;

  document.getElementById("total").innerText = total;
}

function checkout() {
  if (total === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("🎉 Order Placed Successfully! Total: ₹" + total);

  document.getElementById("cartItems").innerHTML = "";
  total = 0;
  document.getElementById("total").innerText = total;
}