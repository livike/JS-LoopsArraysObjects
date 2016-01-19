var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctAnswer = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
guess = prompt("I thinked a number, guess what was it ");

  if (parseInt(guess) === randomNumber){
    correctAnswer = true;
  }
  guessCount ++;
}
while(!correctAnswer)
  
  document.write("The number is correct! Number of guesses was " + guessCount);