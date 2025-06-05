function Calculator(){
    var x = parseInt(document.getElementById("num1").value);
var y = parseInt(document.getElementById("num2").value);
var operator=document.getElementById("op").value;
var result=0;

if(operator=="+"){
    result = x + y;
}
else if(operator=="-"){
    result = x - y;
}
else if(operator=="*"){
    result = x * y;
}
else if (operator=="/"){
    result = x / y;
}
document.getElementById("textresult").innerText=result.toFixed(2);//roundoff
event.preventDefault();
}