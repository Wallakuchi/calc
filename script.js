const  result = document.getElementById('result');
let num1 = '';
let sign = '';
let num2 = '';

//Print Result Function
function printResult(){
    let gresult = `${num1}${sign}${num2}`;
    if(gresult == ''){
        gresult = '0';
    }
    result.textContent = gresult;
}

//Onlick Function
function clk(x){
    if(sign == ''){
        num1 = `${num1}${x}`;
    }else{
        num2 = `${num2}${x}`;
    }
    printResult()
}

//Variable clear Function
function clr(){
    num1 = '';
    sign = '';
    num2 = '';
    printResult()
}

// backspace function
function backspace(){
    if(num2 != ''){
        num2 = num2.substring(0, num2.length-1);
    }
    else if(sign != ''){
        sign = '';
    }
    else if(sign == ''){
        num1 = num1.substring(0, num1.length-1);
    }
    printResult()
}

//operator function
function addSign(operator){
    sign = operator;
    printResult();
}

// Show Result function
function showResult(){
    // let finalresult = "0";
    switch(sign){
        case '+': 
            finalresult = Number(num1) + Number(num2);
            break
        case '-': 
            finalresult = Number(num1) - Number(num2);
            break
        case 'X': 
            finalresult = Number(num1) * Number(num2);
            break
        case '/': 
            finalresult = Number(num1) / Number(num2);
            break
        default:
            finalresult;
    }
    clr();    
    num1 = finalresult;
    printResult()
}

function per(){ 
    num2 = num1*num2/100;

    switch(sign){
        case '+': 
            perresult = Number(num1) + Number(num2);
            break
        case '-': 
            perresult = Number(num1) - Number(num2);
            break
        case 'X': 
            perresult = Number(num1) * Number(num2);
            break
        case '/': 
            perresult = Number(num1) / Number(num2);
            break
        default:
            perresult;       
    }
    clr();
    num1 = perresult;
    printResult();
}


