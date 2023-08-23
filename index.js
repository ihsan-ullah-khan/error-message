let errorParagraph = document.getElementById("error")

function displayError(){
    errorParagraph.textContent = "Something went wrong, please try again"
}

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2 

let resultEl = document.getElementById("sum-el")

function add()
{
    let result = num1 + num2

    let resultStr = "Sum : " + result + " - "
    resultEl.textContent += resultStr
}

function subtract(){
    let result = num1 - num2

    let resultStr = "Subtraction : " + result + " - "
    resultEl.textContent += resultStr
}

function multiply(){
    let result = num1 * num2

    let resultStr = "Multiplication : " + result + " - "
    resultEl.textContent += resultStr
}

function divide(){
    let result = num1 / num2
    let resultStr = "Division : " + result + " - "
    resultEl.textContent += resultStr  
}