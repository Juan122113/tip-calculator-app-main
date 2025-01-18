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
let i = 0;

const btnsPercentages = [percent5, percent10, percent15, percent25, percent50];

let tipPercentage = 0;
let tipAmountPerson = 0;

percent5.value = 5;
percent10.value = 10;
percent15.value = 15;
percent25.value = 25;
percent50.value = 50;


function dividingTipPercentage(tipPercentage, numberOfPeople) {
  tipAmountPerson = tipPercentage / numberOfPeople.value;
  console.log(tipAmountPerson);
}

function inputCalculatingTipPercentage(customInput, bill, tipPercentage) {
  tipPercentage = (customInput.value * bill.value) / 100;
  console.log(tipPercentage);
  dividingTipPercentage(tipPercentage, numberOfPeople);
}

// console.log(percent5.value);
function btnCalculatingTipPercentage(activeBtn, bill, tipPercentage){
  console.log(activeBtn.value);
  tipPercentage = (activeBtn.value * bill.value) / 100;
  console.log(tipPercentage);
  dividingTipPercentage(tipPercentage, numberOfPeople);
}

function handleButtonClick(activeBtn, customInput, bill, tipPercentage){
  return function(e) {
  
  // console.log(i);
  console.log(activeBtn.value);
  // console.log(activeBtn[i]);
    if (customInput.value == "") {
    // console.log("empty");
    // console.log(button.value);
    // console.log(customInput.value);

    btnCalculatingTipPercentage(activeBtn, bill, tipPercentage);
      
    }
    else {
      inputCalculatingTipPercentage(customInput, bill, tipPercentage)
      
    }
  }
}

// function a2(btnsPercentages,customInput, bill){
//     btnsPercentages.addEventListener('click', a1(btns, customInput, bill));
// }

// function a2(btnsPercentages,customInput, bill){
//   btnsPercentages.forEach(btn => {
//     btn.addEventListener('click', a1(btn, customInput, bill));
//   });
// }

for (i; i < btnsPercentages.length; i++) {
  // if (customInput.value == "") {
    if (customInput.value === "") {
    btnsPercentages[i].addEventListener('click', handleButtonClick(btnsPercentages[i], customInput, bill, tipPercentage));
    console.log(btnsPercentages[i]);
    }
  // }
}

console.log(btnsPercentages[i]);

function handleSubmit(e) {
    e.preventDefault() // prevent the default behaviour
    // a2(btnsPercentages,customInput, bill)
    if (customInput.value === "") {
      handleButtonClick(btnsPercentages, customInput, bill);
    }
  }

form.addEventListener('submit', handleSubmit);

console.log(bill.value);
console.log(customInput.value);
console.log("");