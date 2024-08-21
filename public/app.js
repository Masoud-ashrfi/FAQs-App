"use strict";
//SELECTIONS
const plusImages = document.querySelectorAll(".plusImages");
const plusImage1 = document.querySelector(".plusImage1");
const plusImage2 = document.querySelector(".plusImage2");
const plusImage3 = document.querySelector(".plusImage3");
const plusImage4 = document.querySelector(".plusImage4");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

//FUNCTIONS
plusImage1.addEventListener("click", function () {
  answer1.classList.toggle("hidden");

  if (plusImage1.src == "http://127.0.0.1:5500/public/images/icon-plus.svg") {
    plusImage1.src = "images/icon-minus.svg";
  } else {
    plusImage1.src = "images/icon-plus.svg";
  }
});

plusImage2.addEventListener("click", function () {
  answer2.classList.toggle("hidden");

  if (plusImage2.src == "http://127.0.0.1:5500/public/images/icon-plus.svg") {
    plusImage2.src = "images/icon-minus.svg";
  } else {
    plusImage2.src = "images/icon-plus.svg";
  }
});

plusImage3.addEventListener("click", function () {
  answer3.classList.toggle("hidden");

  if (plusImage3.src == "http://127.0.0.1:5500/public/images/icon-plus.svg") {
    plusImage3.src = "images/icon-minus.svg";
  } else {
    plusImage3.src = "images/icon-plus.svg";
  }
});

plusImage4.addEventListener("click", function () {
  answer4.classList.toggle("hidden");

  if (plusImage4.src == "http://127.0.0.1:5500/public/images/icon-plus.svg") {
    plusImage4.src = "images/icon-minus.svg";
  } else {
    plusImage4.src = "images/icon-plus.svg";
  }
});
