function findLargest(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    num3 = document.getElementById("thirdNumber").value;
    var x = Math.max(num1,num2,num3);
    document.getElementById("result").innerHTML = x;
    
}
