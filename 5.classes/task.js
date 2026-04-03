class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
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

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    if (this.books.length === 0) {
      return console.log('В библиотеке нет книг!');
    } // возможно, если в библиотеке нет книг в принципе, то логичнее было бы вернуть сообщение об этом, нежели получать при каждом запросе null

    return this.books.find((item) => item[type] === value) || null;
  }

  giveBookByName(bookName) {
    return this.books.splice((this.books.findIndex((name) => name === bookName)), 1)[0] || null;
  }
}

/*доп задание*/
class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(mark, subjectTaught) {
    if (mark < 2 || mark > 5) {
      return console.log('Переданная оценка не входит в диапазон от 2 до 5.');
    }

    if (!this.marks.hasOwnProperty(subjectTaught)) {
      this.marks[subjectTaught] = [];
    }

    this.marks[subjectTaught].push(mark);
  }

  getAverageBySubject(subjectTaught) {
    if (!this.marks.hasOwnProperty(subjectTaught)) {
      return 0;
    } else {
      return this.marks[subjectTaught].reduce((acc, item) => acc + item, 0) / this.marks[subjectTaught].length;
    }
  }

  getAverage() {
    const arrSubject = Object.keys(this.marks);

    if (Object.keys(arrSubject).length == 0) {
      return 0;
    } else {
      return arrSubject.reduce((acc, subjectTaught) => acc + (this.marks[subjectTaught].reduce((acc, item) => acc + item, 0) / this.marks[subjectTaught].length), 0) / arrSubject.length;
    }
  }
}