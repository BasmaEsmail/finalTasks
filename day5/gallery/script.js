var img=document.getElementById("img");
var back=document.getElementById("Back");
var sources= ["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg","./img/6.jpg"];
var flag=false;
var c=0;
///////////////////////////////////////////////////
var i=0;
function goback()
{
    
    if(i>0)
    {
        i--;
        img.src=sources[i];

    }
   
   
}
function next()
{

    if(i<sources.length-1 )
    {
    i++;
    img.src=sources[i]
    }
    

}


///////////////////////////////////////////////////////////////////
var int;

function show(){
    flag=true;
       
    int = setInterval(function()
    {
    if(c<sources.length)
        {
            img.src=sources[c];
            c++ 
        }
    else 
        {c=0}
    
    },700)
}
function stop(){
    clearInterval(int);

}