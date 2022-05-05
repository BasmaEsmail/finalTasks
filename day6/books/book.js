var booksReq= new XMLHttpRequest();
booksReq.open("GET","https://www.googleapis.com/books/v1/volumes?q=${bookName}");
booksReq.onreadystatechange=function(){
    if(booksReq.status==200 && booksReq.readyState==4)
    {
        console.log(booksReq.status)
        var books= JSON.parse(booksReq.responseText);
        console.log(books)
        // var row= document.createElement("div");
        // row.setAttribute("id","row");
        // row.setAttribute("border","black 2px solid");
        // row.setAttribute("style","display:flex; flex-wrap:wrap;")
        for(var i=0;i<books.length;i++)
        {
           console.log(books)
            
        }
        //document.body.appendChild(row);
    }
}
booksReq.send();


