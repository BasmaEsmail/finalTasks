var srcImg=document.getElementById("source");
var copyImg=document.createElement("img");
var header= document.getElementById("header")
function display()
{
    copyImg.src=srcImg.src;
    header.setAttribute("style","display:flex; justify-content:flex-end")

}
document.body.appendChild(copyImg);
