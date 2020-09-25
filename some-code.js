
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
        JSON.parse();
    }
}