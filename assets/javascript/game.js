// The player will be shown a random number at the start of the game.

//  When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// Crystals are between 1-12
// Random number is between 19-120

//   Your game will hide this amount until the player clicks a crystal.
//   When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.



// variables
var randomNumber = $("randomNumber").val();


// generate the random goal number between 19-120
function randomNumberGoal() {
    randomNumber = Math.floor(Math.random() * 50 + 1)
    console.log(randomNumberGoal);
    $("#yourGoal").append("<h2>Your goal: " + randomNumber + "</h2>");
}

// runs randomNumber Goal function
randomNumberGoal ();

