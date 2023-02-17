"use strict";

// Задача 1
function parseCount(number) {
  let result = parseFloat(number);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}

// Задача 2
class Triangle {
  constructor(a, b, c) {
    if (a > b + c || b > a + c || c > a + b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = this.perimeter / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(
      3
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let errMessage = "Ошибка! Треугольник не существует";
    return {
      get perimeter() {
        return errMessage;
      },
      get area() {
        return errMessage;
      },
    };
  }
}
