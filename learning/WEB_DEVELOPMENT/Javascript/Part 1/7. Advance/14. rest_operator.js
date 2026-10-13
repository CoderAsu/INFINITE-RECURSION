

// arguments keyword

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  console.log(sumAll(1, 2, 3, 4));



//  using rest operator

function sumAll(...args) {
    return args.reduce((sum, num) => sum + num, 0);
  }
  
  console.log(sumAll(1, 2, 3, 4)); 







  
// ...rest operator is always used in last argument

let advSum = (name, course, ...marks) => {
    let sum = 0;

    
    for(let i in marks){
        sum += marks[i];
    }

    console.log(`Hello ${name} of ${course} : ${sum}`)
}

advSum("Asu", "MCA", 20, 30, 40);