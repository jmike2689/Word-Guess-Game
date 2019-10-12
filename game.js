var wordOptions = ["adventure", "animals", "backpack", "boots", "cabin", "camp", "camper", "campfire", "campground", "canoe", "canteen", "cap", "caravan", "climb", "compass", "equipment", "evergreen", "fishing", "flashlight", "forest", "gear", "hammock", "hat", "hike", "hunting", "insects", "kayak", "lake", "lantern", "map", "moon", "mountain", "natural", "nature", "oar", "outdoors", "outside", "paddle", "park", "path", "rope", "scenery", "stars", "sun", "sunscreen", "tarp", "tent", "trail", "trees", "trip", "vest", "walking", "water", "wildlife", "woods"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("blankWord").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // console.log(selectedWord);
    // console.log(lettersInWord);
    // console.log(numBlanks);
    // console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

}

function roundComplete() {
    // console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("blankWord").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++
        alert("You Guessed the Word!");

        document.getElementById("winCounter").innerHTML = winCount;

        startGame();

    }

    else if (guessesLeft == 0) {
        lossCount++;
        alert("You LOSE!");

        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();

    }
}

startGame();

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    // console.log(letterGuessed);
}
