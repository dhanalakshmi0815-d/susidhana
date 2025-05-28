const mobile = JSON.parse(localStorage.getItem("cartdata")) || []; // Ensure it's not null
console.log(mobile);

const con = document.getElementById("container");

for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `
    <center>
      <div id="product-${mobile[i].productId}">
        <center>
          <img src="${mobile[i].image}">
          <h1>${mobile[i].brand}</h1>
        </center>
        <p>${mobile[i].description}</p>
        <center>
          <p><b>${mobile[i].price}</b></p>
          <button onclick="remove(${mobile[i].productId})">Buy Now</button>
        </center>
      </div>
    </center>`;
}

function remove(proi) {
  const productDiv = document.getElementById(`product-${proi}`);
  if (productDiv) {
    productDiv.style.opacity = "0.5"; // Fade effect
    productDiv.style.pointerEvents = "none"; // Disable clicks
  }
}
