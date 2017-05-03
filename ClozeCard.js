function ClozeCard(text, cloze) {
	var trigger = false;
	this.cloze = cloze;
	this.fullText = text;
	this.partial = text.replace(cloze, "_______");
	if (this.partial !== text) {
		trigger = true;
	}
	if (trigger == false) {
		console.log("ERROR! CLOZE TEXT IS NOT PART OF FULL TEXT!!");
		this.cloze = "ERROR!";
		this.fullText = "ERROR!";
		this.partial = "ERROR!";
	}
}

module.exports = ClozeCard;