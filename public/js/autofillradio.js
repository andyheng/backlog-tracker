let user = <%- JSON.stringify(game) %>,
    gameStatus = user.completed;
    gameStatusString = gameStatus.toString();
    console.log(typeof gameStatusString);

let radioInputs = document.querySelectorAll(".backlog-radio");

for (let i = 0, len = radioInputs.length; i < len; i++) {
  console.log(radioInputs[i].value);
  if (radioInputs[i].value == gameStatusString) {
    radioInputs[i].setAttribute("checked", "checked");
  }
}
