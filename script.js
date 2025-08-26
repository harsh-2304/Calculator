function appendValue(value) {
document.getElementById('display').value += value;
}
function clearDisplay() {
document.getElementById('display').value = '';
}
function backspace() {
const display = document.getElementById('display');
display.value = display.value.slice(0, -1);
}
function appendSqrt() {
const display = document.getElementById('display');
display.value += 'Math.sqrt(';
}
function calculate() {
const display = document.getElementById('display');
try {
let result = eval(display.value);
display.value = result;
} 
catch {
alert("Invalid Expression");
}
}
document.addEventListener("keydown", function(event) {
const key = event.key;
if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '(', ')', '%'].includes(key)) {
appendValue(key);
} 
else if (key === 'Enter') {
calculate();
} 
else if (key === 'Backspace') {
backspace();
}
else if (key === 'c' || key === 'C') {
clearDisplay();
}
});
