const picSmall1 = document.querySelector(".pic1Small");
const picSmall2 = document.querySelector(".pic2Small");
const picSmall3 = document.querySelector(".pic3Small");
const picSmall4 = document.querySelector(".pic4Small");
const picSmall5 = document.querySelector(".pic5Small");
const picSmall6 = document.querySelector(".pic6Small");
let picBig1 = document.querySelector(".pic1Big");
let picBig2 = document.querySelector(".pic2Big");
let picBig3 = document.querySelector(".pic3Big");
let picBig4 = document.querySelector(".pic4Big");
let picBig5 = document.querySelector(".pic5Big");
let picBig6 = document.querySelector(".pic6Big");
const addCart = document.querySelector(".addCart");
const buyNow = document.querySelector(".buyNow");
let cartCounter = document.querySelector(".cartCounter");

const shoppingCart = () => {
  addCart.addEventListener("click", function () {
    cartCounter.innerText++;
  });
  buyNow.addEventListener("click", function () {
    if (cartCounter.innerText > 0) {
      cartCounter.innerText--;
    }
  });
};
shoppingCart();
picSmall1.addEventListener("mouseover", function () {
  picBig1.style.display = "block";
  picBig2.style.display = "none";
  picBig3.style.display = "none";
  picBig4.style.display = "none";
  picBig5.style.display = "none";
  picBig6.style.display = "none";
});
picSmall2.addEventListener("mouseover", function () {
  picBig1.style.display = "none";
  picBig2.style.display = "block";
  picBig3.style.display = "none";
  picBig4.style.display = "none";
  picBig5.style.display = "none";
  picBig6.style.display = "none";
});
picSmall3.addEventListener("mouseover", function () {
  picBig1.style.display = "none";
  picBig2.style.display = "none";
  picBig3.style.display = "block";
  picBig4.style.display = "none";
  picBig5.style.display = "none";
  picBig6.style.display = "none";
});
picSmall4.addEventListener("mouseover", function () {
  picBig1.style.display = "none";
  picBig2.style.display = "none";
  picBig3.style.display = "none";
  picBig4.style.display = "block";
  picBig5.style.display = "none";
  picBig6.style.display = "none";
});
picSmall5.addEventListener("mouseover", function () {
  picBig1.style.display = "none";
  picBig2.style.display = "none";
  picBig3.style.display = "none";
  picBig4.style.display = "none";
  picBig5.style.display = "block";
  picBig6.style.display = "none";
});
picSmall6.addEventListener("mouseover", function () {
  picBig1.style.display = "none";
  picBig2.style.display = "none";
  picBig3.style.display = "none";
  picBig4.style.display = "none";
  picBig5.style.display = "none";
  picBig6.style.display = "block";
});
