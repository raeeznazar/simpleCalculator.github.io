function displayNumber(num) {
  //   let textBox = document.querySelector("#Result");

  Result.value += num;
}

function clearBox() {
  Result.value = "";
}

function evaluateExpression() {
  Result.value = eval(Result.value);
}

function backSpace() {
  Result.value = Result.value.slice(0, -1);
}
