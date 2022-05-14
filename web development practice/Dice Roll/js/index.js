// Dice 1
function diceOne(randomNumber1) { 
    var randomNumber1 = Math.floor(Math.random()* 6 + 1);
    if (randomNumber1 === 1) {
        document.querySelector("#player1").setAttribute("src","images/dice1.png");
    }else if (randomNumber1 == 2) {
        document.querySelector("#player1").setAttribute("src","images/dice2.png");
    }else if (randomNumber1 == 3) {
        document.querySelector("#player1").setAttribute("src","images/dice3.png");
    }else if (randomNumber1 == 4) {
        document.querySelector("#player1").setAttribute("src","images/dice4.png");
    }else if (randomNumber1 == 5) {
        document.querySelector("#player1").setAttribute("src","images/dice5.png");
    }else {
        document.querySelector("#player1").setAttribute("src","images/dice6.png");
    }
}

// Dice 2 
function diceTwo(randomNumber1) { 
    var randomNumber1 = Math.floor(Math.random()* 6 + 1);
    if (randomNumber1 === 1) {
        document.querySelector("#player2").setAttribute("src","images/dice1.png");
    }else if (randomNumber1 == 2) {
        document.querySelector("#player2").setAttribute("src","images/dice2.png");
    }else if (randomNumber1 == 3) {
        document.querySelector("#player2").setAttribute("src","images/dice3.png");
    }else if (randomNumber1 == 4) {
        document.querySelector("#player2").setAttribute("src","images/dice4.png");
    }else if (randomNumber1 == 5) {
        document.querySelector("#player2").setAttribute("src","images/dice5.png");
    }else {
        document.querySelector("#player2").setAttribute("src","images/dice6.png");
    }
}