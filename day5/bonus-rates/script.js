var empStar= document.getElementById("star");
var flag=false;
function fill(self)
{
    self.src="star.jpg";
    for(var i =1;i<document.images.length;i++){
        if(document.images[i]==self)
        {
            fill(document.images[i-1])
        }
    }
   
}
// empty when leave div only if it's not clicked
function empty(){
    if(!flag)
    {
        for(var i = 0;i<document.images.length;i++)
        {
            document.images[i].src="starr.png";
        }
    }
    
}
function emptyOne(self)
{
    if(!flag)
    {
        self.src="starr.png";
    }
}
var count=0;
function fix(){
    
    if(count>0)
    {
        flag=false;
        count=0;
    }
    else
   {
       count++;
       flag=true
   }


}