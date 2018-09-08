console.log("hola!!!");


/*INSTRUCTIONS:
1. [Watch the demo](psychic-game-demo.mov).
2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, 
and the user has to guess which letter the app chose. Put the following text on your page:
3. Guess what letter I'm thinking of
4. Wins: (# of times the user has guessed the letter correctly)
5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
6. Guesses Left: (# of guesses left. This will update)
7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).*/

//These are the choices for both, user and computer.

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//These are the variables that keep up with score.

  var wins = 0;
  var losses = 0;
  var guessesLeft = 9;
  var userGuessesSoFar = "";

//These are the variables that grab the HTML elements where we will add text on screen.

  var directionsText = document.getElementById("directions-text");
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var guessesLeftText = document.getElementById("guessesleft-text");
  var userGuessesSoFarText = document.getElementById("userguessessofar-text");
  var computerChoiceText = document.getElementById("computerchoice-text"); 
  var userChoiceText = document.getElementById("userchoice-text");

//This is the function to link a kewyboard key to the user guess. 

document.onkeyup = function(event) {

        if (guessesLeft === 0) {
            reset();
        }

        var userGuess = event.key.toLowerCase();

        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess);        
        
            if (userGuess === computerGuess) {
                wins++;
                } 
                else {
                    losses++;
                    guessesLeft--;
                } 

            alert("User guess: " + userGuess);    
            alert("Computer guess: " + computerGuess);
            
        computerChoiceText.textContent = "Computer chose: " + computerGuess;
        userChoiceText.textContent = "User chose: " + userGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
        userGuessesSoFar.textContent = "Your guesses so far: " + userGuess;
};

        var reset = function () {
        wins = 0;
        losses = 0;
        guessesLeft = 9;
        userGuessesSoFar = "";
        }
