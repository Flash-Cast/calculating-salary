print("時給を入力してください。入力は数値のみ")
base_payment1 = int(input())
base_payment2 = int(input())
base_payment3 = int(input())

print("勤務時間(分)を入力してください")
worktime1 = int(input())
worktime2 = int(input())
worktime3 = int(input())

salary1 = (base_payment1 / 60 )*worktime1
salary2 = (base_payment2 / 60 )*worktime2
salary3 = (base_payment3 / 60 )*worktime3

print(salary1)
print(salary2)
print(salary3)

total_salary = salary1 + salary2 + salary3
print(total_salary)