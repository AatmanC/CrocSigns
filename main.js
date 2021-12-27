function check(){
    var number1 = document.getElementById("input1").value;
    var number2 = document.getElementById("input2").value;
    if(number1 > number2){
        document.getElementById("value").innerHTML = ">";
    }
    else if(number1 < number2){
        document.getElementById("value").innerHTML = "<";
    }
    else{
        document.getElementById("value").innerHTML = "=";
    }
}