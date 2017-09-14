console.log(window.location.search);
var imageUrl = window.location.search.substring("image=".length + 1);
console.log(imageUrl);
var image = new Image();
image.src = imageUrl;
//document.getElementById("image").setAttribute("src", imageUrl);

image.onload = function() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("image");
    c.width = image.naturalWidth;
    c.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0);//, image.width, image.height);//,
                         //0, 0, c.width, c.height);
    c.addEventListener('click', onClicked, false);
};

var verticalSet = false;
var fixedX = 0;

function onClicked(e) {
  console.log("onClicked", e);
  document.getElementById("debug").innerHTML = e.offsetY;
  if (!verticalSet) {
      verticalSet = true;
      fixedX = e.offsetX;
      markLine(e.offsetX);
      mark(fixedX, e.offsetY);
  }
  else {
    mark(fixedX, e.offsetY);
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