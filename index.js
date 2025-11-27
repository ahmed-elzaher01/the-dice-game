let x = 0;
let y = 0;
x = Math.floor(Math.random() * 6) + 1;

y = Math.floor(Math.random() * 6) + 1;

switch (x) {
  case 1:
    document
      .querySelector(".firstDice")
      .setAttribute("src", "./images/dice1.png");
    break;
  case 2:
    document
      .querySelector(".firstDice")
      .setAttribute("src", "./images/dice2.png");
    break;
  case 3:
    document
      .querySelector(".firstDice")
      .setAttribute("src", "./images/dice3.png");
    break;
  case 4:
    document
      .querySelector(".firstDice")
      .setAttribute("src", "./images/dice4.png");
    break;
  case 5:
    document
      .querySelector(".firstDice")
      .setAttribute("src", "./images/dice5.png");
    break;
  case 6:
    document
      .querySelector(".firstDice")
      .setAttribute("src", "./images/dice6.png");
    break;
}

switch (y) {
  case 1:
    document
      .querySelector(".secondDice")
      .setAttribute("src", "./images/dice1.png");
    break;
  case 2:
    document
      .querySelector(".secondDice")
      .setAttribute("src", "./images/dice2.png");
    break;
  case 3:
    document
      .querySelector(".secondDice")
      .setAttribute("src", "./images/dice3.png");
    break;
  case 4:
    document
      .querySelector(".secondDice")
      .setAttribute("src", "./images/dice4.png");
    break;
  case 5:
    document
      .querySelector(".secondDice")
      .setAttribute("src", "./images/dice5.png");
    break;
  case 6:
    document
      .querySelector(".secondDice")
      .setAttribute("src", "./images/dice6.png");
    break;
}

if (x > y) {
  document.querySelector("h1").innerHTML = " 🏆 Player 1 wins ";
  document.querySelector(".p1").innerHTML = " Player 1 😎🔥";
} else if (y > x) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🏆 ";
  document.querySelector(".p2").innerHTML = " Player 1 😁🎉";
} else {
  document.querySelector("h1").innerHTML = "Draw ";
}
