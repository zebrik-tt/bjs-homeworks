"use strict";

// Задача 1
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let discriminant;
  discriminant = b ** 2 - 4 * a * c;
  arr = [];
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr; // array
}

// Задача 2
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // код для задачи №2 писать здесь

  // percent - процентная ставка
  // contribution - вклад (сумма первоначального взноса)
  // amount - сумма (сумма кредита)
  // date - дата (дата окончания кредита)
  // totalAmount - сумма, которую в итоге заплатит клиент (первоначальный
  // взнос, погашение основного долга, проценты за пользование кредитом).
  // loanBody - тело кредита
  // termInMonths - срок кредита в месяцах
  // monthlyPayment - ежемесячный платеж
  // monthlyPercent - ежемесячный процент (1/12 часть)

  if (isNaN(parseFloat(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(parseFloat(contribution))) {
    // для прохождения теста надо писать с точностью "до запятой"
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`; 
  }
  if (isNaN(parseFloat(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let loanBody;
  let termInMonths;
  let monthlyPayment;
  let monthlyPercent = percent / 100 / 12;
  let currentDate = new Date();

  loanBody = amount - contribution;
  termInMonths = (date.getMonth() - currentDate.getMonth()) +
    (12 * (date.getFullYear() - currentDate.getFullYear()));

  monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent /
    (((1 + monthlyPercent) ** termInMonths) - 1)));

  totalAmount = +(monthlyPayment * termInMonths).toFixed(2);

  console.log(totalAmount);
  return totalAmount;
}