let sideMenu = document.querySelector("aside");
let menuButton = document.getElementById("menu-btn");
let closeButton = document.getElementById("close-btn");
let toggleButton = document.querySelector(".toggle-theme");

menuButton.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-var");
  toggleButton.querySelector("span:nth-child(1)").classList.toggle("active");
  toggleButton.querySelector("span:nth-child(2)").classList.toggle("active");
});

orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `

  <td class="primary">${order.productName}</td>
  <td class="text-muted">${order.productNumber}</td>
  <td class="text-muted">${order.paymentStatus}</td>
  <td class='${
    order.shipping === "Declined"
      ? "danger"
      : order.shipping === "Pending"
      ? "warning"
      : "primary"
  }'>${order.shipping}</td>
  <td class="primary">Details</td>`;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").append(tr);
});

