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
const tipAmount = document.getElementById("tip_amount");
const total = document.getElementById("total");
const resetBtn = document.getElementById("reset");

const btnsPercentages = [percent5, percent10, percent15, percent25, percent50];

percent5.value = 5;
percent10.value = 10;
percent15.value = 15;
percent25.value = 25;
percent50.value = 50;

// console.log(percent5.value);

function a1(btn, customInput, bill){
  if (customInput.value == "") {
    // console.log("empty");
    // console.log(button.value);
    // console.log(customInput.value);
    let total = (btn.value * bill.value) / 100;
    console.log(total);
  }
}

// function a2(btnsPercentages,customInput, bill){
//     btnsPercentages.addEventListener('click', a1(btns, customInput, bill));
// }

function a2(btnsPercentages,customInput, bill){
  btnsPercentages.forEach(btn => {
    btn.addEventListener('click', a1(btn, customInput, bill));
  });
}

function handleSubmit(e) {
    e.preventDefault() // prevent the default behaviour
    a2(btnsPercentages,customInput, bill)
  }

form.addEventListener('submit', handleSubmit);

console.log(bill.value);
console.log(customInput.value);
console.log("");