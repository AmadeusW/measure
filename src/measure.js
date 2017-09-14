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

function onClicked(e) {
  console.log("onClicked", e);
  mark(e.offsetX, e.offsetY);
}

function mark(x, y) {
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 200);
  ctx.stroke();
}