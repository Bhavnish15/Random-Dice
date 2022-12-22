var random = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
// For Player One
var player1 = function Player_1() {
  if (random === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
  } else if (random === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
  } else if (random === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
  } else if (random === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
  } else if (random === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
  } else if (random === 6) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  }
};

// For Player Two
var player2 = function Player_2() {
  if (random2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
  } else if (random2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
  } else if (random2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
  } else if (random2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
  } else if (random2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
  } else if (random2 === 6) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  }
};
player1();
player2();

var header = document.querySelector(".container h1");

if (player1 > player2) {
  header.innerHTML = "Congrats Player One You Won";
} else if (player1 < player2) {
  header.innerHTML = "Congrats Player Two You Won";
}else{
    header.innerHTML = "Draw!"
}


