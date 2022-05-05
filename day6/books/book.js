var booksReq= new XMLHttpRequest();
booksReq.open("GET","https://www.googleapis.com/books/v1/volumes?q=${bookName}");
booksReq.onreadystatechange=function(){
    if(booksReq.status==200 && booksReq.readyState==4)
    {
        console.log(booksReq.status)
        var books= JSON.parse(booksReq.responseText);
        
        var list= document.createElement("ol");
        list.setAttribute("class","list")
        for(var i =0;i<books.items.length;i++)
        {
        var item = document.createElement("li");
        item.innerHTML= books.items[i].volumeInfo.title;
        
        list.appendChild(item);

        }
        document.body.appendChild(list);

    }
}
booksReq.send();


