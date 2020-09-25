
class School {
    static students = [];
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
        School.students.push(this);
    }
}

let student1 = new Student("Bob", 15);
let student2 = new Student("Joey", 14);

for (const student of School.students) {
    console.log(student.name);
}