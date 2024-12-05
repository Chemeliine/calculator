// Нажатие цифр
function addNum(num){
    document.getElementById("result").value += num; 
}

// нажатие на операторы
function addOperator(operator){
    const currentInput = document.getElementById("result").value;

    const lastNum = currentInput[ currentInput.length - 1  ]; 
    
    if(lastNum !=="+" &&  lastNum !=="-" && lastNum !=="*" && lastNum !=="/"  ){
        document.getElementById("result").value += operator;
    }
}


function clearInput(){
    document.getElementById("result").value  = "";
}

function Equals(){
    var result = document.getElementById("result").value;

    try{
        var answer = eval(result);
        document.getElementById("result").value = answer;

    }catch(error){
        document.getElementById("result").value = "ERROR"
    }
    

}
