var mx = 500;

function setup() {
  createCanvas(800, 800);
  background("lightgray");
  fill("gray");
  noStroke()
  ellipse(width/2, height/2, width, height);
  
  run();
}

function draw() {
  
}

function run() {
  var x;
  var y;
  var a = 100;
  var b = 200;
  var c = -1;
  var arr = [];
  strokeWeight(3)
  for(var i = 0;i < mx;i++) {
    x = Math.floor( Math.random() * width);
    y = Math.floor( Math.random() * height);
    c = get(x,y)[0];
    arr.push([x,y,c]);
    //console.log(x,y);
    stroke(Math.floor(Math.random()*(a+1-b))+b,Math.floor(Math.random()*(a+1-b))+b,Math.floor(Math.random()*(a+1-b))+b);
    point(x,y);
  }
  selectGroup(arr);
}

function selectGroup(arr) {
  var i = 0;
  for(var a of arr) {
    if(a[2] == 128) {
      i++
    }
  }
  var pi = 4*i/mx;
  document.getElementById("title").textContent = "円周率："+pi;
}
