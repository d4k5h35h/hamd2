var font;
var rdrop = [];
const SCL = 25;
var dropSpeed = 5;
const heart = [];
let a = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 100; i++) rdrop[i] = new Raindrop();
  font = loadFont('cursive.ttf');
}

function draw() {
  translate(width / 2, height / 2);
  background(255, 100, 100);
  noFill();
  stroke(255, 50, 50);
  strokeWeight(4);

  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();
  const r = height / 40;
  const x = r * 16 * pow(sin(a), 3);
  const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
  heart.push(createVector(x, y));

  stroke(255, 50, 50, a * 25);
  strokeWeight(2);
  textAlign(CENTER);
  textSize(25);
  textFont(font);
  text("Happy Anniversary !!!", 0, 0);
  text("Mom & Dad", 0, 50);

  if (a > TWO_PI) {
  translate(-width / 2, -height / 2);
    for (var i = 0; i < 100; i++) {
      rdrop[i].drop();
    }
  }
  a += 0.01;
}

function Raindrop() {
  this.len = round(random(50));
  this.x = round(random(width));
  this.y = -round(random(height));
  this.drop = function() {
    fill(255, 0, 0);
    textSize(30);
    textFont('ariel.otf');
    text("❤", this.x, this.y + this.len);
    if (this.y < height) this.y += dropSpeed;
    else {
      this.x = round(random(width));
      this.y = -round(random(height));
    }
  }
}