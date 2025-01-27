describe('example to-do app', () => {
  it('should get the name', () => {
    cy.visit(baseUrl + "/main.html");
    cy.window().then(win => {
      const Person = win.Person;
      const person = new Person("John", 25);
      expect(person.name).to.equal("John");
    });
  });

  it('should change age', () => {
    cy.visit(baseUrl + "/main.html");
    cy.window().then(win => {
      const Person = win.Person;
      const person = new Person("John", 25);
      expect(person._name).to.equal("John");
      person.age = 30;
      expect(person._age).to.equal(30);
    });
  });

  it('John should study', () => {
    cy.visit(baseUrl + "/main.html");
    cy.window().then(win => {
      cy.stub(win.console, "log").as("consoleLog");
      const Student = win.Student;
      const student = new Student("John", 30);
      expect(student.name).to.equal("John");
      student.study();
      cy.get("@consoleLog").should("be.calledWith", `${student.name} is studying`);
    });
  });

  it('Alice should study', () => {
    cy.visit(baseUrl + "/main.html");
    cy.window().then(win => {
      cy.stub(win.console, "log").as("consoleLog");
      const Student = win.Student;
      const student = new Student("Alice", 30);
      expect(student.name).to.equal("Alice");
      student.study();
      cy.get("@consoleLog").should("be.calledWith", `${student.name} is studying`);
    });
  });

  it('John should teach', () => {
    cy.visit(baseUrl + "/main.html");
    cy.window().then(win => {
      cy.stub(win.console, "log").as("consoleLog");
      const Teacher = win.Teacher;
      const teacher = new Teacher("John", 30);
      expect(teacher.name).to.equal("John");
      teacher.teach();
      cy.get("@consoleLog").should("be.calledWith", `${teacher.name} is teaching`);
    });
  });

  it('Alice should teach', () => {
    cy.visit(baseUrl + "/main.html");
    cy.window().then(win => {
      cy.stub(win.console, "log").as("consoleLog");
      const Teacher = win.Teacher;
      const teacher = new Teacher("Alice", 30);
      expect(teacher.name).to.equal("Alice");
      teacher.teach();
      cy.get("@consoleLog").should("be.calledWith", `${teacher.name} is teaching`);
    });
  });
});
