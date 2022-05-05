var data = location.search.slice(1);
var values = data.split("&");
var header = document.createElement("h1");
header.innerHTML="Welcome, "+values[0].slice(6);
var email= document.createElement("h2");
email.innerHTML="Email: " + values[1].slice(6,values[1].indexOf('%'))+"@"+values[1].slice(values[1].indexOf('%')+3);
document.body.appendChild(header);
document.body.appendChild(email)
