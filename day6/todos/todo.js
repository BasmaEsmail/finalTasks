var req= new XMLHttpRequest();
req.open("GET","https://jsonplaceholder.typicode.com/todos");
req.onreadystatechange=function()
{
    if(req.readyState==4 && req.status==200)
    {
        var todos=JSON.parse(req.responseText)
        {
            for(var i=0;i<todos.length;i++)
            {
                var userId=document.createElement("p");
                var title=document.createElement("h3");
                var container = document.createElement("div")
                container.setAttribute("style","border:1px solid blue;")
                if(todos[i].completed)
                {
                    console.log(todos[i].title)
                    
                    
                    userId.innerHTML="User ID:" + todos[i].userId;
                   
                    title.innerHTML="Title: " + todos[i].title;

                    container.appendChild(title);
                    container.appendChild(userId);
                }
                
                document.body.appendChild(container)
                //document.body.appendChild(title)

            }
            

        }
    }

}
req.send();