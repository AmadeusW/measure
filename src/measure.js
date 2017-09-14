var imageUrl = window.location.search.substring("image=".length + 1);
console.log("Measuring " + imageUrl);
var image = new Image();
image.src = imageUrl;
var c=document.getElementById("myCanvas");

image.onload = function() {
  resetCanvas(image);
  c.addEventListener('click', onClicked, false);
};

var fixedX = 0;
var y1, y2, y3, y4 = -1;
var pointsSet = 0;

function onClicked(e) {
  console.log("onClicked", e);
  document.getElementById("debug").innerHTML = e.offsetY;
  switch (pointsSet) {
    case 0:
      pointsSet++;
      fixedX = e.offsetX;
      y1 = e.offsetY;
      markLine(fixedX);
      mark(fixedX, y1);
      break;
    case 1:
      pointsSet++;
      y2 = e.offsetY;
      mark(fixedX, y2);
      break;
    case 2:
      pointsSet++;
      y3 = e.offsetY;
      mark(fixedX, y3);
      break;
    case 3:
      pointsSet++;
      y4 = e.offsetY;
      mark(fixedX, y4);
      calculate();
      break;
    case 4:
      pointsSet = 0;
      resetCanvas(image);
      break;
  }
}

function markLine(x) {
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(0,0,0,0.2)';
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, image.naturalHeight);
  ctx.stroke();
}

function mark(x, y) {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillRect(x-1, y, 2, 1);
}

function resetCanvas(image) {
  var ctx=c.getContext("2d");
  c.width = image.naturalWidth;
  c.height = image.naturalHeight;
  ctx.drawImage(image, 0, 0);//, image.width, image.height);//,
                       //0, 0, c.width, c.height);
}

function calculate() {
  var featurePixels = Math.abs(y2-y1);
  var roomPixels = Math.abs(y4-y3);
  var featureHeight = Number(document.getElementById("input").value);
  var roomHeight = roomPixels / featurePixels * featureHeight;
  document.getElementById("debug").innerText = "Feature: " + featurePixels + " px, " + featureHeight + " in. Room: " + roomPixels + " px, " + roomHeight + " in.";
  document.getElementById("result").innerText = roomHeight;
}