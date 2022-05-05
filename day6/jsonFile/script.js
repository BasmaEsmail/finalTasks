var studentData= [
    {
        "ID":"1",
        "name":"Ahmed",
        "age":"18",
        "address":"aswan",
        "skills":["skill1"]
    },
    {
        "ID":"2",
        "name":"Mohamed",
        "age":"19",
        "address":"aswan",
        "skills":["skill1","skill2"]
    },
    {
        "ID":"3",
        "name":"Noor",
        "age":"18",
        "address":"cairo",
        "skills":["skill1","skill2"]
    }
]
var list= document.createElement("ol");
list.setAttribute("class","list")
for(var i =0;i<studentData.length;i++)
{
   var item = document.createElement("li");
   item.innerHTML= studentData[i].name;
   
   list.appendChild(item);

}
document.body.appendChild(list);