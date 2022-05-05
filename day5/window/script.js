var newWin = window.open("https://www.google.com/","flying","height=400,width=400"); 
setInterval(function(){

    newWin.moveBy(200,200)
},200)