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
var crystalOne = 0;
var crystalTwo = $("randomNumber").val();
var crystalThree = $("randomNumber").val();
var crystalFour = $("randomNumber").val();
var userScore = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;

// generate the random goal number between 19-120

function randomNumberGoal() {
    totalScore = Math.floor(Math.random() * (120-19+1)) + 19;
    console.log(totalScore);
    $("#yourGoal").empty();
    $("#yourGoal").append("<h2>Your goal: " + totalScore + "</h2>");
}

// run randomNumber Goal function
randomNumberGoal ();


// crystal values
function crystalValues() {
    crystalOne = Math.floor(Math.random() * (12-1+1)) + 1;
    crystalTwo = Math.floor(Math.random() * (12-1+1)) + 1;
    crystalThree = Math.floor(Math.random() * (12-1+1)) + 1;
    crystalFour = Math.floor(Math.random() * (12-1+1)) + 1;
}

// run crystal values function
crystalValues();

// reset - empty out functions
function reset() {
    totalScore = 0;
    userScore = 0;
    crystalOne = 0;
    crystalTwo = 0;
    crystalThree = 0;
    crystalFour = 0;
    crystalValues();
    randomNumberGoal();
}

// linking crystal ids to functions and adding together

// crystal 1
$("#crystal1").click(function() {
    // totalScore.push(crystalOne);
    // addScore();
    // ifWinner();
    // ifLose();

    userScore = crystalOne + userScore
    $("#userScore").html(userScore)
    checkScore()
   console.log(userScore)
});

//crystal 2
$("#crystal2").click(function() {
    // totalScore.push(crystalTwo);
    // addScore();
    // ifWinner();
    // ifLose();
    userScore = crystalTwo + userScore
    $("#userScore").html(userScore)
    checkScore()
   console.log(userScore)
    
});

//crystal 3
$("#crystal3").click(function() {
    // totalScore.push(crystalThree);
    // addScore();
    // ifWinner();
    // ifLose();
    userScore = crystalThree + userScore
    $("#userScore").html(userScore)
    checkScore()
   console.log(userScore)
});

//crystal 4
$("#crystal4").click(function() {
    // totalScore.push(crystalFour);
    // addScore();
    // ifWinner();
    // ifLose();
    userScore = crystalFour + userScore
    $("#userScore").html(userScore)
    checkScore()
   console.log(userScore)
});

//run add score
addScore();

//win or loss

function checkScore(){
    if (userScore === totalScore){
        console.log("you win")
        wins++;
        $("#winScore").html(wins)
        reset();
    }

    if (userScore > totalScore){
        console.log("you lost")
        losses++;
        $("#lossScore").html(losses)
        reset();
    }
}

