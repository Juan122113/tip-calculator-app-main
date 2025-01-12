// const body = document.getElementById("body");

// console.log(body);

const form = document.getElementById("form");
const bill = document.getElementById("bill");
const percent5 = document.getElementById("5-percent");
const percent10 = document.getElementById("10-percent");
const percent15 = document.getElementById("15-percent");
const percent25 = document.getElementById("25-percent");
const percent50 = document.getElementById("50-percent");
const customInput = document.getElementById("custom-input");
const numberOfPeople = document.getElementById("number_of_People");

function handleSubmit(e) {
    e.preventDefault() // prevent the default behaviour
  }

form.addEventListener('submit', handleSubmit);