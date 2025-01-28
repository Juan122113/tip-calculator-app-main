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
const numberOfPeople = document.getElementById("number_of_people");
const tipAmount = document.getElementById("tip_amount");
const total = document.getElementById("total");
const resetBtn = document.getElementById("reset");
const cantBeZero = document.getElementById("zero");

const btnsPercentages = [percent5, percent10, percent15, percent25, percent50];

let i = 0;
let tipPercentage = 0;
let tipAmountPerson = 0;
let totalPerPerson = 0;
const billValueFloat = parseFloat(bill.value);

console.log(typeof billValueFloat);
console.log(typeof bill.value);
console.log(resetBtn);
console.log(billValueFloat);

percent5.value = 5;
percent10.value = 10;
percent15.value = 15;
percent25.value = 25;
percent50.value = 50;


function handleResetBtnClick(bill, customInput, numberOfPeople, totalPerPerson) {
  return function(e) {
  bill.value = "";
  customInput.value = "";
  numberOfPeople.value = "";
  // totalPerPerson = 0;
}
}

function resetBtnFunctionality(resetBtn, bill, customInput, numberOfPeople, totalPerPerson) {
  resetBtn.addEventListener("click", handleResetBtnClick(bill, customInput, numberOfPeople, totalPerPerson));
}



function puttingTotalPersonOnScreen(totalPerPerson, total) {
  total.innerHTML = `<p>$${totalPerPerson}</p>`;
  console.log(totalPerPerson);
  resetBtnFunctionality(resetBtn, bill, customInput, numberOfPeople, totalPerPerson);
}

function calculatingTotalPerson(tipAmountFloat, numberOfPeople, bill, totalPerPerson, billValueFloat) {
  totalPerPerson = (billValueFloat + tipPercentage) / numberOfPeople.value;
  console.log(totalPerPerson);
  console.log(typeof bill);
  console.log(typeof tipPercentage);
  console.log(tipPercentage);
  console.log(typeof billValueFloat);
  console.log(typeof tipAmountFloat);
  console.log(billValueFloat);
  console.log(tipAmountFloat);
  puttingTotalPersonOnScreen(totalPerPerson,total);
  
}

function changingTypeOfTipAmountFloat(tipAmountFloat, numberOfPeople, bill, totalPerPerson, billValueFloat) {
  let tipAmountFloatNum = parseFloat(tipAmountFloat);
  console.log(tipAmountFloatNum)
  calculatingTotalPerson(tipAmountFloatNum, numberOfPeople, bill, totalPerPerson, billValueFloat)
}

// function changingTypeOfBillValue(tipPercentage, numberOfPeople, bill, totalPerPerson) {
//   let billValueNum = parseFloat(bill.value);
//   calculatingTotalPerson(tipPercentage, numberOfPeople, bill, totalPerPerson, billValueFloat)
// }

function catnBeZeroOnScreen() {
  if (numberOfPeople.value == 0 || numberOfPeople.value == "") {
    cantBeZero.style.display = "block";
  } else {
    cantBeZero.style.display = "none";
  }
}


function puttingTipAmountOnScreen(tipAmountPerson, tipAmount) {
  tipAmount.innerHTML = `<p>$${tipAmountPerson}</p>`;
}

function tipAmountToFixed(tipAmountPerson, tipAmount, billValueFloat) {
  let tipAmountFloat = tipAmountPerson.toFixed(2);
  puttingTipAmountOnScreen(tipAmountFloat, tipAmount);
  // changingTypeOfBillValue(tipPercentage, numberOfPeople, bill, totalPerPerson);
  changingTypeOfTipAmountFloat(tipAmountFloat, numberOfPeople, bill, totalPerPerson, billValueFloat);
}

function dividingTipPercentage(tipPercentage, numberOfPeople) {
  tipAmountPerson = tipPercentage / numberOfPeople.value;
  console.log(tipAmountPerson);
  // console.log(numberOfPeople.value);
  catnBeZeroOnScreen(numberOfPeople, cantBeZero);
  tipAmountToFixed(tipAmountPerson, tipAmount,billValueFloat);
  
}

function inputCalculatingTipPercentage(customInput, bill, tipPercentage, numberOfPeople) {
  tipPercentage = (customInput.value * bill.value) / 100;
  console.log(tipPercentage);
  dividingTipPercentage(tipPercentage, numberOfPeople);
}

// console.log(percent5.value);
function btnCalculatingTipPercentage(activeBtn, bill, tipPercentage, numberOfPeople){
  console.log(activeBtn.value);
  tipPercentage = (activeBtn.value * bill.value) / 100;
  console.log(tipPercentage);
  console.log(numberOfPeople);
  dividingTipPercentage(tipPercentage, numberOfPeople);
}

function handleButtonClick(activeBtn, customInput, bill, tipPercentage, numberOfPeople){
  return function(e) {
  
  // console.log(i);
  console.log(activeBtn.value);
  // console.log(activeBtn[i]);
    if (customInput.value == "") {
    // console.log("empty");
    // console.log(button.value);
    // console.log(customInput.value);

    btnCalculatingTipPercentage(activeBtn, bill, tipPercentage, numberOfPeople);
      
    }
    else {
      inputCalculatingTipPercentage(customInput, bill, tipPercentage, numberOfPeople)
      
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
    btnsPercentages[i].addEventListener('click', handleButtonClick(btnsPercentages[i], customInput, bill, tipPercentage, numberOfPeople));
    console.log(btnsPercentages[i]);
    }
    

    // console.log(btnsPercentages[i]);
  // }
}



function handleSubmit(e) {
    e.preventDefault() // prevent the default behaviour
    // a2(btnsPercentages,customInput, bill)
    if (customInput.value === "") {
      handleButtonClick(btnsPercentages, customInput, bill, numberOfPeople);
    }
  }

form.addEventListener('submit', handleSubmit);


console.log(bill.value);
console.log(customInput.value);
console.log("");