var data = location.search.substring(1);
var values = data.split("&");
var header = document.createElement("h1");
header.innerHTML="Welcome, "+values[0].substring(6);
var email= document.createElement("h2");
email.innerHTML="Email: " + values[1].substring(6);
document.body.appendChild(header);
document.body.appendChild(email)