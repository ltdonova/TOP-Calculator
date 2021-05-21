var backspaceIcon = document.querySelector('.backspace');

function lightenBackspace(){
    if(true){
        backspaceIcon.classList.add('light-backspace');
    }
}

function dimBackspace(){
    backspaceIcon
}
backspaceIcon.addEventListener('pointerdown',lightenBackspace);
backspaceIcon.addEventListener('pointerdown',dimBackspace);

