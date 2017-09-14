console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
var imageUrl = (urlParams.get('image'));
document.getElementById("image").setAttribute("src", imageUrl);