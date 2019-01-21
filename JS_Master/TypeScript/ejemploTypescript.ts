class Student {
	fullName: string;
	constructor( public firstName: string, public middleInitial: string, public lastName: string ){
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}


interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
}

function sayHello( person: Person ) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student( "Jaime",  "A", "Afonso" );

document.body.innerHTML = sayHello( user );

