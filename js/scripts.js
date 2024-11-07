const arrayOfButtons = Array.from(document.querySelectorAll('button'))
let sfx = new Audio('/sounds/dial.wav');
//console.log(arrayOfButtons)

for (let i = 0; i < arrayOfButtons.length; i++) {
    let btn = arrayOfButtons[i]
    btn.addEventListener('click', function() {
        inputNum(i)
    });
}

function inputNum(num) {
    // console.log(num);
    playDialSound();
    const codeInput = document.getElementById('codeInput');
    codeInput.value += num
    checkAnswer()
}

function playDialSound() {
    sfx.load()
    sfx.play()
}

function checkAnswer() {
    const codeInput = document.getElementById('codeInput');
    let codeInputVal = codeInput.value;
    if (codeInputVal.length == 4) {
        switch (codeInputVal) {
            case '7319':
                codeInput.classList.toggle('correct');
                window.location.replace("/img/outcome1.png");
                break;
            case '5824':
                codeInput.classList.toggle('correct');
                window.location.replace("/img/outcome2.gif");
                break;
            case '9461':
                codeInput.classList.toggle('correct');
                break;
            default:
                console.log("entered");
                codeInput.value = '';
                alert("Nah not that one");
                break;
        }
    } 
}