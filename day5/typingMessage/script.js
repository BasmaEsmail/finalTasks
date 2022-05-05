var win = window.open("","","height=300,width=300");
var msg="hello from the other side";
var i=0;
var int= setInterval(function(){
    
        win.document.write(msg[i]);
        if(i<msg.length-1)
        i++;
        else 
        clearInterval(int)

},300

)

