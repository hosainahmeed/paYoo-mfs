let btnText = document.getElementById("btn-payMethod");
let add = document.getElementById("add");
let out = document.getElementById("out");
let amount = document.getElementById("amounts");
let money = document.getElementById("inpurMoney");
let userPin = document.getElementById("userPin");
let payBtn = btnText.innerText;

add.addEventListener("click", function (e) {
  e.preventDefault();
  let btnText = document.getElementById("btn-payMethod");
  btnText.innerText = "Add Money";
});
out.addEventListener("click", function (e) {
  e.preventDefault();
  let btnText = document.getElementById("btn-payMethod");
  btnText.innerText = "Cash out";
});
btnText.addEventListener("click", function (e) {
  e.preventDefault();
  let currentTextbtn = btnText.innerText;

  if (currentTextbtn === "Add Money") {
    if (userPin.value == "2233") {
      if (money.value > 0) {
        let updateMoney = Number(amount.innerText) + Number(money.value);
        amount.innerText = updateMoney;
      } else {
        alert("what are you doing man! put some money");
      }
    } else {
      alert("Auth dont reconize");
    }
  } else if (currentTextbtn === "Cash out") {
    if (userPin.value == "2233") {
      if (amount.innerText >= money.value) {
        let updateMoney = amount.innerText - money.value;
        amount.innerText = updateMoney;
      } else {
        alert("insufficient balance");
      }
    } else {
      alert("Auth dont reconize");
    }
  }
});
