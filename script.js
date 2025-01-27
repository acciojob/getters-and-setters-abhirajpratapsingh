class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

const person = new Person("John", 25);
console.log(person.name);

person.age = 30;
console.log(person.age);

const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();
