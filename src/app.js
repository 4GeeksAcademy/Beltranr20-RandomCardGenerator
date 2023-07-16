/* eslint-disable */

import "./style.css";

window.onload = () => {
  var suitRandom = generateRandomSuit();

  let suitTop = document.querySelector(".top-suit");
  suitTop.innerHTML = suitRandom;

  let suitBottom = document.querySelector(".bottom-suit");
  suitBottom.innerHTML = suitRandom;

  let suitMiddle = document.querySelector(".numbers");
  suitMiddle.innerHTML = generateRandomNumber();

  if (suitRandom == "♥" || suitRandom == "♦") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
  }

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
