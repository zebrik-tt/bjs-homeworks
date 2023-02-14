"use strict";

// Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  fix() {
    this.state = this.state * 1.5;
  }
  set state(condition) {
    this._state = condition < 0 ? 0 : Math.min(condition, 100);
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const result = this.books.find((element) => {
      return element[type] === value;
    });
    return result ? result : null;
  }

  giveBookByName(bookName) {
    const result = this.books.find((element, index, arr) => {
      if (element.name === bookName) {
        arr.splice(index, 1);
        return true;
      } else {
        return false;
      }
    });
    return result ? result : null;
  }
}

// ------------
// Задача 3*

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark >= 2 && mark <= 5 && subjectName) {
      if (!(subjectName in this.marks)) {
        this.marks[subjectName] = [];
      }
      this.marks[subjectName].push(mark);
    }
  }

  getAverageBySubject(subjectName) {
    let result = 0;
    if (subjectName in this.marks && this.marks[subjectName].length > 0) {
      result = this.marks[subjectName].reduce(function (acc, item, index, arr) {
        const amount = acc + item;
        if (index === arr.length - 1) {
          return amount / arr.length;
        }
        return amount;
      }, 0);
    }
    return result;
  }

  getAverage() {
    const arrSubject = Object.keys(this.marks);
    let result = 0;
    if (arrSubject.length > 0) {
      const obj = this;
      result = arrSubject.reduce(function (acc, item, index, arr) {
        const amount = acc + obj.getAverageBySubject(item);
        if (index === arr.length - 1) {
          return amount / arr.length;
        }
        return amount;
      }, 0);
      return result;
    }
    return result;
  }
}
