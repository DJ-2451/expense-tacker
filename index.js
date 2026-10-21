let balance = document.getElementById("balance");
let income = document.getElementById("income");
let expense = document.getElementById("expense");

let text = document.getElementById("text");
let amount = document.getElementById("amount");
let history = document.getElementById("history");

function addHistory(a, b) {
  let newChild = "<div>";
  newChild +=
    '<div class ="history-entry" id="entry"> ' +
    "<div>" +
    a +
    "</div>" +
    "<div>" +
    b +
    "</div> </div>";
  newChild += "</div>";
  history.innerHTML += newChild;
}

function newTrasaction() {
  let a = text.value;
  let b = amount.value;

  if (text.value == "" || amount.value == "") {
    alert("Enter Apropriate values");
  } else if (parseInt(amount.value) > 0) {
    income.innerHTML = parseInt(amount.value) + parseInt(income.innerHTML);

    balance.innerHTML = parseInt(balance.innerHTML) + parseInt(b);
    addHistory(a, b);
  } else {
    expense.innerHTML = parseInt(amount.value) + parseInt(expense.innerHTML);
    balance.innerHTML = parseInt(balance.innerHTML) + parseInt(b);
  }

  text.value = "";
  amount.value = "";
}

const submit = document.getElementById("submit");

submit.addEventListener("click", newTrasaction);

function clearAll() {
  balance.innerText = "0000";
  income.innerText = "0000";
  expense.innerText = "0000";
  history.querySelectorAll(".history-entry").forEach((entry) => entry.remove());
  text.value = "";
  amount.value = "";

  alert("History Cleared");
}

document.getElementById("clear").addEventListener("click", clearAll);
