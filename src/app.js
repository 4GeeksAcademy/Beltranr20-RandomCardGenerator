/* eslint-disable */

import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = () => {
  var suitRandom = generateRandomSuit();

  let suitTop = document.querySelector(".top-suit");
  suitTop.innerHTML = suitRandom;

  let suitBottom = document.querySelector(".bottom-suit");
  suitBottom.innerHTML = suitRandom;

  let suitMiddle = document.querySelector(".numbers");
  suitMiddle.innerHTML = generateRandomNumber();

  function generateRandomNumber() {
    let numbers = [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
  }

  function generateRandomSuit() {
    let suit = ["♣", "♦", "♥", "♠"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
  }
};
