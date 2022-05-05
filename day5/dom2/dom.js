var img = document.createElement("img");
img.setAttribute("src","im.jpg");
var div=document.createElement("div");
div.appendChild(img);
alert(div.childElementCount);
// console.log(div.children.length)
document.body.appendChild(div);
div.removeChild(img);
console.log(div.childNodes.length)