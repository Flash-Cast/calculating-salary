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

document.getElementById("span2").textContent = total_salary.toFixed(2);
}