var backspaceIcon = document.querySelector('.backspace');
var displayString = "";
var displayedInput = document.querySelector('.input-text');
var buttons = document.querySelectorAll('.keypadButton');

var backspaceButton = document.querySelectorAll('.grey-circle')[1];

var op1;
var op2;
var operator;


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
    let inputText = displayedInput.value;

    if(!inputText)  // nothing entered so do nothing
        return;

    
    
    // error from another operator

    // call operate

}

function displayInput(){
    var input = this.textContent;

    displayedInput.value = displayedInput.value + input;

}

function backspace(){
    var input = displayedInput.value;
    var length = input.length;
    var newInput = input.substring(0,length-1);
    displayedInput.value = newInput;
}

function clear() {
    displayedInput.value = "";
}



backspaceButton.addEventListener('click',backspace);
buttons[0].addEventListener('click',clear);
buttons[3].addEventListener('click',operatorCalled('divide'));
buttons[7].addEventListener('click',operatorCalled('multiply'));
buttons[11].addEventListener('click',operatorCalled('subtract'));
buttons[15].addEventListener('click',operatorCalled('add'));

buttons[17].addEventListener('click',equals);

[...buttons].forEach(button => button.addEventListener('click',displayInput));













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





