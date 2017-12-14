// this is the function that defines the length of the random word
function blankLen(wordLength){
	blankArray = [];  
	for (var i = 0; i < wordLength; i++){
		blankArray.push("_ ");
	}
	return blankArray.join("");
}
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var words = [
		"Chandler",
		"Rachel",
		"Ross",
		"Monica",
		"Phoebe",
		"Joey"
	];
	var wrongLetter = [];
	var underScores = ["_"]
	var wins = 0;
	var guessesLeft = 10;
	var guessedLetters = [];

	function gameOn(){

		var word = words[Math.floor(Math.random() * words.length)];
		var wordLength = word.length;

		var div = document.getElementById("blankWord");
		div.innerHTML = blankLen(wordLength);
	}

	// document.onkeypress = function(event) {
	//  	var userGuesses = event.key;
	//  	document.getElementById("blankWord").innerHTML = userGuesses;
	// }

	// 
	

// function display(){
// 	var wins = document.getElementById("wins");
// 	var guessLeft = document.getElementById("guessLeft");
// 	var guessedLetters = document.getElementById("guessedLetters");
// 	wins.innerHTML = wins;
// 	guessLeft.innerHTML = guessLeft;
// 	guessedLetters.innerHTML = guessedLetters.join(',');
// }
// for (var i = 0; i <= word.length; i++){
// 		document.getElementById("blankWord").innerHTML += "_ ";

		//start game on key press
	document.onkeyup = function() {
		gameOn();

	};