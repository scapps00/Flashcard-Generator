function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

module.exports = BasicCard;

var thing = new BasicCard("What's", "Up?");

console.log(thing.front);
console.log(thing.back);