///
const logo = document.querySelector(".logo");
const countIncrease = document.querySelector(".increase-item");
const countDecrease = document.querySelector(".decrease-item");
const countValue = document.querySelector(".count--value");
const iconBtn = document.querySelector(".icon");
const cartBtn = document.querySelector(".cart-btn");
const addToCartBtn = document.querySelector(".add-to-cart");
const totalValue = document.querySelector("#total");
const productImg = document.querySelectorAll(".product-items img");
const mainImg = document.querySelector(".product-img--container img");
let countValueNumber = Number(countValue.textContent);

/******************************************************************/
logo.addEventListener("click", function (e) {
  e.preventDefault();
});

countIncrease.addEventListener("click", function () {
  countValueNumber = countValueNumber + 1;
  countValue.textContent = countValueNumber;
});

countDecrease.addEventListener("click", function () {
  if (countValueNumber > 0) {
    countValueNumber = countValueNumber - 1;
    countValue.textContent = countValueNumber;
  }
});

addToCartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let value = String(countValueNumber);
  totalValue.textContent = value;
});

productImg.forEach(function (e, i) {
  productImg[i].addEventListener("click", function () {
    mainImg.src = productImg[i].src;
  });
});

const q = document.querySelector(".q");

const p = function (word) {
  let split = word;
  let reverse = word.split("").reverse().join("");

  if (split === reverse) {
    q.textContent = `${word} is a palendrom`;
  } else {
    q.textContent = `${word} is not a palendrom`;
  }
};

const inputWord = document.querySelector("input");
const click = document.querySelector("button");

click.addEventListener("click", function () {
  let w = inputWord.value;
  p(w);
});

for (let count = 1; count <= 100; count++) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log("FizzBuzz");
  } else if (count % 5 === 0) {
    console.log("Buzz");
  } else if (count % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(count);
  }
}

/*******************************************/

const carouselImg = document.querySelector(".carousel-img img");
const carouselLeft = document.querySelector(".left");
const carouselRight = document.querySelector(".right");

const imgSrc = [
  "./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg",
];

let count = 0;
carouselRight.addEventListener("click", function () {
  if (count == imgSrc.length - 1) {
    count = 0;
    // imgSrc[count];
  } else {
    count++;
  }

  carouselImg.src = imgSrc[count];
});

carouselLeft.addEventListener("click", function () {
  count--;
  if (count >= 0) {
    imgSrc[count];
    carouselImg.src = imgSrc[count];
  }
});
