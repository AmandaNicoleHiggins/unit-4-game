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
var crystalOne = $("randomNumber").val();
var crystalTwo = $("randomNumber").val();
var crystalThree = $("randomNumber").val();
var crystalFour = $("randomNumber").val();
var userScore = [];
var totalScore = [];
var wins = 0;
var losses = 0;



// generate the random goal number between 19-120

function randomNumberGoal() {
    randomNumber = Math.floor(Math.random() * 50 + 1)
    console.log(randomNumberGoal);
    $("#yourGoal").empty();
    $("#yourGoal").append("<h2>Your goal: " + randomNumber + "</h2>");
}

// run randomNumber Goal function
randomNumberGoal ();


// crystal values
function crystalValues() {
    crystalOne = Math.floor(Math.random() * 5 + 1);

    crystalTwo = Math.floor(Math.random() * 10 + 1);

    crystalThree = Math.floor(Math.random() * 15 + 1);

    crystalFour = Math.floor(Math.random() 20 + 1);
}

// run crystal values function
crystalValues();

// reset - empty out functions
function reset() {
    $("#yourgoal").empty();
    randomNumberGoal();
    crystalValues ();
    totalScore ();
}

// adding crystals
function addScore() {

    $("#yourScore").append("<h2>Your Score: " + randomNumber + "</h2>");

}

// linking crystal ids to functions and adding together

// crystal 1
$("#crystal1").click(function() {
    
}

//crystal 2
$("#crystal2").click(function() {
    
}

//crystal 3
$("#crystal3").click(function() {
    
}

//crystal 4
$("#crystal4").click(function() {
    
}

//run add score
addScore();

//win or loss