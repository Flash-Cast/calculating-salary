function clickBtn3(){
    var pay1 = document.getElementById("pay1")
    var pay2 = document.getElementById("pay2")
    var pay3 = document.getElementById("pay3")
    var time1 = document.getElementById("time1")
    var time2 = document.getElementById("time2")
    var time3 = document.getElementById("time3")

    var pay1 = pay1 / 60
    var pay2 = pay2 / 60
    var pay3 = pay3 / 60

    var salary1 = pay1 * time1
    var salary2 = pay2 * time2
    var salary3 = pay3 * time3

    var total_salary = salary1 + salary2 + salary3

    document.getElementById("span2").textContent = total_salary;
}