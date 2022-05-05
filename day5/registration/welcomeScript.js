var data = location.search.substring(1);
var values = data.split("&");
var header = document.createElement("h1");
header.innerHTML="Welcome, "+values[0].substring(6);
document.body.appendChild(header);