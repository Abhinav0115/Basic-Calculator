
//square of a number
function square() {
    var exp = document.Calculator.display.value;
    if (exp) {
        document.Calculator.display.value = exp * exp
    }
}

//square root of a number
function squrt() {
    var exp = document.Calculator.display.value;
    if (exp) {
        document.Calculator.display.value = Math.sqrt(exp)
    }
}

//total/ final result
function equal() {
    var exp = document.Calculator.display.value;
    if (exp) {
        document.Calculator.display.value = eval(exp)
    }
}

//remove/delete last element from total length
function backspace() {
    var exp = document.Calculator.display.value;
    document.Calculator.display.value = exp.substring(0, exp.length - 1); /* remove the last element from total length*/

    if (exp.length >= 5) {
        document.Calculator.display.value = ' '
    }
}