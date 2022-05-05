var productReq= new XMLHttpRequest();
productReq.open("GET","https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
productReq.onreadystatechange=function(){
    if(productReq.status==200 && productReq.readyState==4)
    {
        var products= JSON.parse(productReq.responseText);
        var row= document.createElement("div");
        row.setAttribute("id","row");
        row.setAttribute("border","black 2px sloid");
        row.setAttribute("style","display:flex; flex-wrap:wrap;")
        for(var i=0;i<products.length;i++)
        {
             
            var imgDiv=document.createElement("div");
            imgDiv.setAttribute("class","imgDiv")
            var img = document.createElement("img");
            img.src=products[i].image;
            img.setAttribute("width","40%");

            var price=document.createElement("h4");
            price.innerHTML=products[i].price;

            var name=document.createElement("h4");
            name.innerHTML=products[i].name;
            imgDiv.appendChild(name);
            imgDiv.appendChild(price);
            imgDiv.appendChild(img);
            row.appendChild(imgDiv); 
            
        }
        document.body.appendChild(row);
    }
}
productReq.send();


