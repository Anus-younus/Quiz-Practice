const inputEle = document.querySelector('#display')
const buttonEle = document.querySelectorAll('button')

const buttonsArray = Array.from(buttonEle)
let str = ''
const currentValue = inputEle.value;
const lastChar = currentValue.slice(-1);
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length - 1)
            inputEle.value = str
        } else if (e.target.innerHTML == 'AC') {
            str = ""
            inputEle.value = str
        } else if (e.target.innerHTML == '=') {
            str = eval(str)
            inputEle.value = str
        } else if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(inputEle.value)) {
            return;
        }
        else {
            str += e.target.innerHTML
            inputEle.value = str
        }
    })
})
