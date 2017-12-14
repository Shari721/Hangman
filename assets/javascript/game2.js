var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words = [
		"Chandler",
		"Rachel",
		"Ross",
		"Monica",
		"Phoebe",
		"Joey"
	];
var win = 0;
var guessesLeft = 10;
var guessedLetters = [];

	document.onkeypress = function (event) {
		var userGuesses = event.key;
		("userGuesses").innerHTML;
	}

	var word = words[Math.floor(Math.random() * words.length)];
			for (var i = 0; i <= word.length; i++){
			document.getElementById("blankWord").innerHTML += "_ ";
			}