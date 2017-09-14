console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
var imageUrl = (urlParams.get('image'));
document.getElementById("image").setAttribute("src", imageUrl);

window.onload = function() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("image");
    ctx.drawImage(img,0,0);
    img.addEventListener('click', onClicked, false);
};

var verticalSet = false;
var fixedX = 0;

function onClicked(e) {
  console.log("onClicked", e);
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
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 200);
  ctx.stroke();
}

function mark(x, y) {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillRect(x, y, 2, 2);
  }