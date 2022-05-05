var i = 0;
var len = document.images.length;
var flag= true;
var int = setInterval(function () 
{
  if (flag) 
  {
    if (i !== 0) 
    {
      document.images[i].src = "./img/marble3.jpg";
      document.images[i - 1].src = "./img/marble1.jpg";
    } 
    else 
    {
      document.images[i].src = "./img/marble3.jpg";
      document.images[len - 1].src = "./img/marble1.jpg";
    }

    if (i < len - 1) i++;
    else 
    {
      i = 0;
    }
  }
}, 600);

function stop() {
  flag=false;
}
function cont() {
    flag=true;
}
