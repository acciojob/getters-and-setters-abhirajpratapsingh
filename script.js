import { Person, Student, Teacher } from './person';

describe('example to-do app', () => {
  it('should get the name', () => {
    const person = new Person("John", 25);
    expect(person.name).to.equal('John');
  });

  it('should change age', () => {
    const person = new Person("John", 25);
    person.age = 30;
    expect(person._age).to.equal(30);
  });

  it('John should study', () => {
    const student = new Student("John", 25);
    cy.stub(student, 'study').callsFake(() => console.log('John is studying'));
    student.study();
  });

  it('Alice should study', () => {
    const student = new Student("Alice", 22);
    cy.stub(student, 'study').callsFake(() => console.log('Alice is studying'));
    student.study();
  });

  it('John should teach', () => {
    const teacher = new Teacher("John", 25);
    cy.stub(teacher, 'teach').callsFake(() => console.log('John is teaching'));
    teacher.teach();
  });

  it('Alice should teach', () => {
    const teacher = new Teacher("Alice", 22);
    cy.stub(teacher, 'teach').callsFake(() => console.log('Alice is teaching'));
    teacher.teach();
  });
});
