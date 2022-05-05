function sub(){
var userName = document.getElementById("userName").value;
var password= document.getElementById("pass").value;
localStorage.setItem("User Name",JSON.stringify(userName));
localStorage.setItem("Password",JSON.stringify(password));

var date = new Date();
date.setDate(date.getDate()+17)
document.cookie="userName="+userName+";expires="+date.toDateString()+";"
}