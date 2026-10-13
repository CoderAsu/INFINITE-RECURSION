// An Object is an unordered collection of properties.
// Properties can be changed, added, deleted, and some are read only.

// object literals

const JsUser = {
    nick_name: "Asu",
    "FullName": "Subham Padhy",
    age: "21",
    city: "Berhampur",
    nationality: "Indian",
    email: "asupadhy2003@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);

// to access full name we use string type
console.log(JsUser["FullName"]);

// If we want to use symbol in object there is another method

const mySym = Symbol("abc")

const User2 = {
    fName: "John",
    lName: "Doe",
    age: 45,
    nationality: "American",
    [mySym]: "mykey1" 
}

console.log(User2[mySym]);
console.log(User2);

JsUser.isLoggedIn = false;
console.log(JsUser["isLoggedIn"]);
console.log(JsUser.isLoggedIn);


// adding new properties
User2.fName = "Jack";
User2["lName"] = "Sparrow";

console.log(User2);


// deleting properties
// The delete keyword deletes a property from an object. The delete keyword deletes both the value of the property and the property itself. After deletion, the property cannot be used before it is added back again.

delete User2.nationality;

console.log(User2);



// Nested Objects

const regularUser = {
    email:"some@gmail.com",
    fullName: {
        firstName: "Subham",
        lastName: "Padhy"
    }
}

console.log(regularUser.fullName.firstName);
console.log(regularUser["fullName"]["lastName"]);
console.log(regularUser.fullName["firstName"]);
console.log(regularUser["fullName"].lastName);


