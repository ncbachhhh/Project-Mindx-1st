let containerProduct = document.getElementById("wrapperProduct");
const listProduct = [
  {
    img: "./imgs/gallery/arrival1.png",
    name: "Knitted Jumper",
    star: 5,
    price: "$ 30.00",
  },
  {
    img: "./imgs/gallery/arrival2.png",
    name: "Knitted Jumper",
    star: 5,
    price: "$ 30.00",
  },
  {
    img: "./imgs/gallery/arrival3.png",
    name: "Knitted Jumper",
    star: 5,
    price: "$ 30.00",
  },
  {
    img: "./imgs/gallery/arrival4.png",
    name: "Knitted Jumper",
    star: 5,
    price: "$ 30.00",
  },
  {
    img: "./imgs/gallery/arrival5.png",
    name: "Knitted Jumper",
    star: 5,
    price: "$ 30.00",
  },
  {
    img: "./imgs/gallery/arrival6.png",
    name: "Knitted Jumper",
    star: 5,
    price: "$ 30.00",
  },
  {
    img: "./imgs/gallery/arrival7.png",
    name: "Knitted Jumper",
    star: 5,
    price: "$ 30.00",
  },
  {
    img: "./imgs/gallery/arrival8.png",
    name: "Knitted Jumper",
    star: 5,
    price: "$ 30.00",
  },
  {
    img: "./imgs/gallery/arrival1.png",
    name: "Knitted Jumper",
    star: 5,
    price: "$ 30.00",
  },
];
let arrElProduct = "";
for (let i = 0; i < listProduct.length; i++) {
  let star = "";

  for (let j = 0; j < listProduct[i].star; j++) {
    star += ' <i class="checked fas fa-star"></i>';
  }

  const el = `<div class="new-arrivals-product col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="single-new-arrival mb-50 text-center">
              <div class="popular-img">
                <img src="${listProduct[i].img}" alt="" />
                <div class="favorit-items store-btn">
                  <img src="./imgs/gallery/favorit-card.png" alt="" />
                </div>
              </div>
              <div class="popular-caption">
                <h3><a href="shop.html">${listProduct[i].name}</a></h3>
                <div class="rating mb-10">
                  ${star}
                </div>
                <span>${listProduct[i].price}</span>
              </div>
            </div>
          </div>`;
  arrElProduct += el;
}
containerProduct.innerHTML = arrElProduct;

// SIDEBAR FUNCTION
const elSidebarButton = document.getElementById("sidebar-icon");
const elSidebarMenu = document.getElementById("sidebar-menu");

elSidebarButton.addEventListener("click", openMenuSideBar);

function openMenuSideBar() {
    if (elSidebarMenu.style.display == "none") {
        elSidebarMenu.style.display = "block";
    }
    else {
        elSidebarMenu.style.display = 'none';
    }
}
