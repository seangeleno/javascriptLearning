/**
 * Created by seanestevaKiosked on 3/14/16.
 */
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
function printPerson (person) {
    console.log(person.firstName + " " + person.lastName)
};

printPerson(contacts[0]);
printPerson(contacts[1]);