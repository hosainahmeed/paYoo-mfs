let btnText = document.getElementById("btn-payMethod");
let add = document.getElementById("add");
let out = document.getElementById("out");
let amount = document.getElementById("amounts");

add.addEventListener("click", function (e) {
  e.preventDefault();
  btnText.innerText = "Add Money";
});

out.addEventListener("click", function (e) {
  e.preventDefault();
  btnText.innerText = "Cash out";
});

btnText.addEventListener("click", function (e) {
  e.preventDefault();
  let currentTextbtn = btnText.innerText;
  let moneyText = document.getElementById("inpurMoney").value;
  let money = parseFloat(moneyText);
  let userPin = document.getElementById("userPin").value;

  if (isNaN(money) || money <= 0) {
    alert("Insufficient balance");
    return;
  }

  if (userPin !== "2233") {
    alert("Authentication failed");
    return;
  }

  if (currentTextbtn === "Add Money") {
    let updateMoney = parseFloat(amount.innerText) + money;
    amount.innerText = updateMoney.toFixed(2);
  } else if (currentTextbtn === "Cash out") {
    if (parseFloat(amount.innerText) >= money) {
      let updatedMoney = parseFloat(amount.innerText) - money;
      amount.innerText = updatedMoney.toFixed(2);
    } else {
      alert("Insufficient balance to cash out");
    }
  }
});
