"use strict";

function Student(name, gender, age) {
  this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if ("marks" in this) {
    //this.marks = [...this.marks, ...marks];
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  let result = 0;
  if ("marks" in this && this.marks.length > 0) {
    result = this.marks.reduce(
      function (acc, item, index, arr) {
        const amount = acc + item;
        if (index === arr.length - 1) {
          return amount / arr.length;
        }
        result = amount;
        return result;
      }, 0);
  };
  return result;
};

Student.prototype.exclude = function (reason) {
  if (this.hasOwnProperty("subject")) {
    delete this.subject;
  }
  if (this.hasOwnProperty("marks")) {
    delete this.marks;
  }
  this.excluded = reason;


};

// const st1 = new Student("Иван", "мужской", 26);
// st1.addMarks(4, 5, 3);
// st1.addMarks(5, 5, 5, 5);
// st1.addMarks(3, 3, 3, 3);
// // console.log(st1.getAverage());
// const st2 = new Student("Мария", "женский", 36);
// st2.addMarks(2, 5, 5);
// st2.addMarks(3, 4, 3);
// st2.setSubject("Биология");
// // console.dir(st2);
// const st3 = new Student("Светлана", "женский", 20);
// const st4 = new Student("Степан", "мужской", 47);
// st4.setSubject("Химия");
// st4.setSubject("Физика");
// st4.addMarks(2, 2, 2);
// console.dir(st4.subject);
// st4.exclude("Оболтус");
// st4.addMarks(3, 2, 3);
// console.dir(st4.marks);
// console.dir(st4);