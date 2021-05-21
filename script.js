var backspaceIcon = document.querySelector('.backspace');
var displayString = "";
var input = document.querySelector('.input-text');
var buttons = document.querySelectorAll('.keypadButton');


function add(op1,op2){
    return op1+op2;
}

function subtract(op1,op2){
    return op1-op2;
}

function multiply(op1,op2){
    return op1*op2;
}

function divide(op1,op2){
    return op1/op2;
}

function operate(operator,op1,op2){
    switch(operator){
        case "add":
            return add(op1,op2);
            break;
        case "subtract":
            return subtract(op1,op2);
            break;
        case "multiply":
            return multiply(op1,op2);
            break;
        case "divide":
            return divide(op1,op2);
            break;
        default:
            console.log("operate function switch case error");
    }
}

function equals(){
    let equation = input.value;
}

function operatorCalled(operator){
    let inputText = input.value;

    if(!inputText)  // nothing entered so do nothing
        return;

    
    
    // error from another operator

    // call operate

}

buttons[3].addEventListener('click',operatorCalled('divide'));
buttons[7].addEventListener('click',operatorCalled('multiply'));
buttons[11].addEventListener('click',operatorCalled('subtract'));
buttons[15].addEventListener('click',operatorCalled('add'));

buttons[19].addEventListener('click',equals);
















// function lightenBackspace(){
//     if(true){
//         backspaceIcon.classList.add('light-backspace');
//     }
// }

// function dimBackspace(){
//     backspaceIcon
// }
// backspaceIcon.addEventListener('pointerdown',lightenBackspace);
// backspaceIcon.addEventListener('pointerdown',dimBackspace);





