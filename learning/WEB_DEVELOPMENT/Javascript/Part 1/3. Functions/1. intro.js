// JavaScript functions are defined with the function keyword.

// function functionName(parameters) {
//     // code to be executed
// }


// Semicolons are used to separate executable JavaScript statements.
// Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

function sum(num1, num2 /* parameters */){
    console.log(num1 + num2);
}

sum(2, 3); // arguments


function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

console.log(addTwoNumbers(3, 5));




function loginUserMessage(username = "sam"){
    if (username === undefined){
        return console.log("please enter a username");
    } 
    return `${username} just logged in`
};
// loginUserMessage("Asu"); // does not print
console.log(loginUserMessage());




function calculateCartPrice(...num1){
    return num1;
};

console.log(calculateCartPrice(200, 400, 500));




const user = {
    username: "Asu",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
    
};

handleObject(user);



const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
};

console.log(returnSecondValue(myNewArray));

























// Function Expressions
// A JavaScript function can also be defined using an expression.


const x = function(a, b) {return a * b};
let z = x(5, 4);
console.log(z);


// The function above is actually an anonymous function (a function without a name).

// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.


// Function expression are mainly used for callbacks and event handlers.

// Function expression uses semi-colon.

















// The function() Constructor

// Functions can also be defined with a built-in JavaScript function constructor called Function().

const myFunction = new Function("a", "b", "return a * b");

let y = myFunction(4, 3);
console.log(y);


// Most of the time, you can avoid using the new keyword in JavaScript.




















// Function Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

// Hoisting applies to variable declarations and to function declarations.


console.log(myFun(7));

function myFun(y){
    return y * y;
}

// Functions defined using an expression are not hoisted.

















// Self-Invoking Functions
// Function expressions can be made "self-invoking".

// Function expressions will execute automatically if the expression is followed by ().

// You cannot self-invoke a function declaration.

(function () {
    console.log("Hello World!");  // I will invoke myself
})();



















// Functions are Objects
// The typeof operator in JavaScript returns "function" for functions.

// JavaScript functions have both properties and methods.

// The arguments.length property returns the number of arguments received when the function was invoked.


function myFunction2(a, b) {
    return arguments.length;
};

console.log(myFunction2(3, 8));
console.log(typeof myFunction2);


// The toString() method returns the function as a string.

let text = myFunction2.toString();
console.log(text);

// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.























// Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.

// You don't need the function keyword, the return keyword, and the curly brackets.


// ES5
let multiply = function(numb1, numb2) {
    return numb1 * numb2;
}

// or

// ES6
let multiply2 = (numb1, numb2) => numb1 * numb2;

console.log(multiply(12, 6));
console.log(multiply2(14, 4));

// Arrow functions do not have their own this. They are not well suited for defining object methods.

// Arrow functions are not hoisted. They must be defined before they are used.

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them

const multiply3 = (x, y) => { return x * y };

console.log(multiply3(16, 5));






// See the arrow functions

const normal_sum = (a, b) => console.log(a + b);
normal_sum(1, 2);

const sayHi = () => console.log("Hi");
sayHi();

const square = a => console.log(a * a);
square(4);


const add = (a, b) => {
    console.log(`Adding ${a} and ${b}`);
    let sum = a + b;
    return sum;
}


console.log(add(9, 2));




const person = {
    name: "john",
    greet: function(){
        console.log("Hello,", this.name);
    }
}

person.greet();