//給料計算部分
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

//電卓部分
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

// ドラッグ開始
header.addEventListener('mousedown', (e) => {
    isDragging = true;

    const rect = calculator.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    header.style.cursor = "grabbing"; // 視覚的フィードバック
});

// ドラッグ中
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // ウィンドウの範囲内に制限
        const newLeft = Math.max(0, Math.min(window.innerWidth - calculator.offsetWidth, e.clientX - offsetX));
        const newTop = Math.max(0, Math.min(window.innerHeight - calculator.offsetHeight, e.clientY - offsetY));

        calculator.style.left = `${newLeft}px`;
        calculator.style.top = `${newTop}px`;
    }
});

// ドラッグ終了
document.addEventListener('mouseup', () => {
    isDragging = false;
    header.style.cursor = "grab"; // 視覚的フィードバックを戻す
});

 
 