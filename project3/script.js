let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let userscore = document.querySelector(".userscore");
let compscore = document.querySelector(".compscore");
let list = ["rock", "paper", "scissor"];

let countscore = (user, comp) => {
  userscore.innerText = Number(userscore.innerText) + user;
  compscore.innerText = Number(compscore.innerText) + comp;
};

let checkWinner = (userchoice) => {
  let compchoice = Math.floor(Math.random() * 3);
  console.log(compchoice);
  if (list[compchoice] === userchoice) {
    msg.innerText = "It's a Tie";
  } else {
    let userwin = true;
    userwin =
      (list[compchoice] === "rock") & (userchoice === "paper") ? true : false;
    userwin =
      (list[compchoice] === "paper") & (userchoice === "scissor")
        ? true
        : false;
    userwin =
      (list[compchoice] === "scissor") & (userchoice === "rock") ? true : false;
    if (userwin) {
      msg.innerText = "you win! You got a 1 point";
      countscore(1, 0);
    } else {
      msg.innerText = "ohh noo! Opponent got a point";
      countscore(0, 1);
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    checkWinner(userChoice);
  });
});
