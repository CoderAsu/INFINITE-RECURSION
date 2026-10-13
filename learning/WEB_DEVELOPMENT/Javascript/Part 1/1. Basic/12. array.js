let cars = ["Saab", "Volvo", "BMW"];
console.log(typeof cars, cars);

let colors = Array("Red", "Blue", "Green", "Yellow");

console.log(colors);








let iplTeam = [
    "RCB",
    "MI",
    "CSK"
]

console.log(iplTeam);






const marvelHeroes = [];
marvelHeroes[0] = "SpiderMan";
marvelHeroes[1] = "IronMan";
marvelHeroes[2] = "Captain America";

console.log(marvelHeroes);




const comParts = new Array("Monitor", "CPU", "Keyboard", "Mouse", "UPS");

console.log(typeof comParts, comParts);

// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.




// Nested Array

const nesArr = [cars, iplTeam, marvelHeroes, comParts];

console.log(nesArr);

console.log(nesArr[1][0]);
