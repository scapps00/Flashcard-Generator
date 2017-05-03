var ClozeCard = require("./ClozeCard");
var fs = require("fs");
var cardArray = require("./cards.js");
var inquirer = require("inquirer");

for (var i = 0; i < cardArray.length; i++) {
	cardArray[i] = JSON.stringify(cardArray[i]);
}

if (process.argv[2] == "new-card") {
	var newCard = new ClozeCard(process.argv[3], process.argv[4]);
	if (newCard.cloze !== "ERROR!") {
		cardArray.push(JSON.stringify(newCard));
		fs.writeFile("cards.js", "var cardArray = [" + cardArray + "]; \nmodule.exports = cardArray;", (err) => {
  			if (err) console.log("ERROR!");
  			else console.log("Card added!");
  		});
	}
}

if (process.argv[2] == "show-cards") {
	console.log(cardArray);
}

if (process.argv[2] == "clear-cards") {
	fs.writeFile("cards.js", "var cardArray = []; \nmodule.exports = cardArray;", (err) => {
  		if (err) console.log("ERROR!");
  		else console.log("Cards cleared!");
  	});
}

if (process.argv[2] == "random-card") {
	var pick = Math.floor(Math.random() * cardArray.length);
	var currentCard = JSON.parse(cardArray[pick]);
	inquirer.prompt([
		{
			type: "input",
			name: "question",
			message: currentCard.partial
		}
	]).then(function(user) {
		if (user.question == currentCard.cloze) {
			console.log("CORRECT!");
			console.log(currentCard.fullText);
		} else {
			console.log("WRONG!");
			console.log(currentCard.fullText);
		}
	});
}

