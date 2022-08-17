//enter number or operations
function insert(num) {
    document.Calculator.textView.value = document.Calculator.textView.value + num;
}

//square of a number
function square() {
    var exp = document.Calculator.textView.value;
    if (exp) {
        document.Calculator.textView.value = exp * exp
    }
}

//square root of a number
function squrt() {
    var exp = document.Calculator.textView.value;
    if (exp) {
        document.Calculator.textView.value = Math.sqrt(exp)
    }
}

//total/ final result
function equal() {
    var exp = document.Calculator.textView.value;
    if (exp) {
        document.Calculator.textView.value = eval(exp)
    }
}

//remove/delete last element from total length
function backspace() {
    var exp = document.Calculator.textView.value;
    document.Calculator.textView.value = exp.substring(0, exp.length - 1); /* remove the last element from total length*/

    if (exp.length >= 5) {
        document.Calculator.textView.value = ' '
    }
}

//remove/delete all element
function allClear() {
    var exp = document.Calculator.textView.value
    document.Calculator.textView.value = ' '
}