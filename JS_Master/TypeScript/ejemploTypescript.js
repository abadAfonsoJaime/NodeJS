var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function sayHello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jaime", "A", "Afonso");
document.body.innerHTML = sayHello(user);
