var fname=document.getElementById("fname");
function border()
{
    fname.style.border="1px solid blue"
    
    
}
var warning= document.getElementById("warning");
function outFocusName(){
    fname.style.border=" none ";
    if(fname.value.length<3)
    {
        
        warning.innerHTML="Invalid Text";
    }
    else 
    {
        warning.innerHTML=""
    }

}
var password=document.getElementById("pass");
var repPassword=document.getElementById("repPass");
var passText=document.getElementById("checkPass");

function outFocusPass(){
    if(password.value!=repPassword.value)
    passText.innerHTML="Password and repeat password should be the same";
    else
    passText.innerHTML=""


}