function ClozeCard(text, cloze) {
	var trigger = false;
	this.cloze = cloze;
	this.fullText = text;
	this.partial = text.replace(cloze, "_______");
	if (this.partial !== text) {
		trigger = true;
	}
	// var splitText = text.split(" ");
	// var splitCloze = cloze.split(" ");
	// for (var i = 0; i < splitCloze.length; i++) {
	// 	for (var j = 0; j < splitText.length; j++) {
	// 		if (splitCloze[i] == splitText[j]) {
	// 			splitText[j] = "_______";
	// 			trigger = true;
	// 		}
	// 	}
	// }
	// this.partial = splitText.join(" ");
	if (trigger == false) {
		console.log("ERROR! CLOZE TEXT IS NOT PART OF FULL TEXT!!");
		this.cloze = "ERROR!";
		this.fullText = "ERROR!";
		this.partial = "ERROR!";
	}
}

module.exports = ClozeCard;

var wow = new ClozeCard("My name is Samantha Capps", "Bob");

console.log(wow.cloze);
console.log(wow.fullText);
console.log(wow.partial);