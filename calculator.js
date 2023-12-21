
function add() {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    let total = number1 + number2;
    document.getElementById("ans").innerHTML = 'Answer : ' + total;


}
function sub() {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    let total = number1 - number2;
    document.getElementById("ans").innerHTML = 'Answer : ' + total;


}
function mul() {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    let total = number1 * number2;
    document.getElementById("ans").innerHTML = 'Answer : ' + total;

}
function div() {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    let total = number1 / number2;
    document.getElementById("ans").innerHTML = 'Answer : ' + total;
}
