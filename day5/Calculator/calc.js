// var num ;
// function EnterNumber(val)
// {
//     num=val;

// }
// if(val>=0 && val<=9)

var answer = document.getElementById("Answer");
var flag= false;
function EnterNumber(val)
{
    if(flag==true){
        answer.value=""
    }
    answer.value+=val
    flag=false;
}
var express;
function EnterOperator(val)
{
    answer.value+=val
}
function EnterEqual(){
    answer.value = eval(answer.value);
    flag=true;
}
function EnterClear(){
    answer.value=""
}
