// Object methods are actions that can be performed on objects.
// A method is a function definition stored as a property value.

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return (this.firstName + " " + this.lastName).toUpperCase();
    }
};


// accessing object methods
// If you invoke the fullName property with (), it will execute as a function.

name1 = person.fullName();
console.log(name1);


// If you access the fullName property without (), it will return the function definition.

name2 = person.fullName;
console.log(name2);












// see the difference

// we can insert a function without function keyword in object

let greet1 = {
    hello: function greet(){
      console.log("Hello World");
    }
}

greet1.hello();






let greet2 = {
  greet(){
    console.log("Welcome to JavaScript");
  }
}

greet2.greet();