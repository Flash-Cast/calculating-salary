function clickBtn3() {
    var pay1 = parseFloat(document.getElementById("pay1").value) || 0;
    var pay2 = parseFloat(document.getElementById("pay2").value) || 0;
    var pay3 = parseFloat(document.getElementById("pay3").value) || 0;
    var time1 = parseFloat(document.getElementById("time1").value) || 0;
    var time2 = parseFloat(document.getElementById("time2").value) || 0;
    var time3 = parseFloat(document.getElementById("time3").value) || 0;

    var hourlyPay1 = pay1 / 60;
    var hourlyPay2 = pay2 / 60;
    var hourlyPay3 = pay3 / 60;

    var salary1 = hourlyPay1 * time1;
    var salary2 = hourlyPay2 * time2;
    var salary3 = hourlyPay3 * time3;

    var total_salary = salary1 + salary2 + salary3;

document.getElementById("span1").textContent = total_salary.toFixed(0);
document.getElementById("span2").textContent = salary1.toFixed(0);
document.getElementById("span3").textContent = salary2.toFixed(0);
document.getElementById("span4").textContent = salary3.toFixed(0);
}


function inputNumber(number) {
    var display = document.getElementById('display');
    display.value += number;
}

function inputOperator(operator) {
    var display = document.getElementById('display');
    display.value += operator;
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value); 
    } catch (e) {
        display.value = 'エラー'; 
    }
}

function outputResult() {
    var display = document.getElementById('display').value;
    var resultElement = document.getElementById('calculation-result');
    try {
        var result = eval(display);
        resultElement.innerText = result; 
    } catch (e) {
        resultElement.innerText = 'エラー'; 
    }
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
    document.getElementById('calculation-result').innerText = ''; 
}

 // ドラッグ可能にするJavaScriptコード
 const calculator = document.getElementById('calculator');
 const header = document.getElementById('calculator-header');

 let offsetX = 0;
 let offsetY = 0;
 let isDragging = false;

 header.addEventListener('mousedown', (e) => {
     isDragging = true;
     offsetX = e.clientX - calculator.offsetLeft;
     offsetY = e.clientY - calculator.offsetTop;
 });

 document.addEventListener('mousemove', (e) => {
     if (isDragging) {
         calculator.style.left = `${e.clientX - offsetX}px`;
         calculator.style.top = `${e.clientY - offsetY}px`;
     }
 });

 document.addEventListener('mouseup', () => {
     isDragging = false;
 });
 