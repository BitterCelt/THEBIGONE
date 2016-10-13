var littleOne = [];
var i = 0;

function setup() {
	createCanvas(windowWidth,windowHeight);
	for(var i = 0; i < 50; i++) {
    littleOne[i] = new theBigOne();
  }
}

function draw() {
	background(100);
	for(var i = 0; i < littleOne.length; i++) {
    littleOne[i].write();
  }
}

function mousePressed(){
	if (i > 49) {
		i = 0;
	}
	littleOne[i].posX = mouseX;
	littleOne[i].posY = mouseY;
	i++;
}

function theBigOne() {
	this.c = color(random(255), random(255), random(255));
	this.posX;
	this.posY;


	this.write = function() {
		fill(this.c);
		textSize(random(100));
		text("The BIG one",this.posX, this.posY)
	}
}
