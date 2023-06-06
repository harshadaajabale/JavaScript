console.log(`step 1. with no. args , no return value log message on console inside arrow function `);

let arrowFun = () => {
    console.log("Good Morning, today is monday.........");
}
arrowFun ();

console.log("step 2. Perform the multiplication with 3 args and no return value");
let multiply = (n1, n2, n3) =>{
   let result = n1 * n2* n3;
   console.log(`a. multiplicaton :${result} `);

   

}
multiply(5, 5, 2);


const multi = (n1, n2, n3) =>{
    const result = 10 * 4 * 1;
    console.log(`b. multiplication : ${result}`);
    
}
multi(10, 4, 1);

console.log("step 3. The addition with 5 args and return value");
let add = (num1, num2, num3, num4, num5) =>{
    let result = num1+num2+num3+num4+num5;
    return result;
}
let result = add(100, 100, 200, 349, 756);
console.log(`a. Addition  is : ${result}`);



let arrow_Fun = () => {
    console.log("b. I am", "learning", "ES6", `features`, "in depth............");
}
arrow_Fun ();








