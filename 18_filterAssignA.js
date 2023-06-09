console.log("=========Give Array========");

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers );

console.log("======step 1. find out the number which are greater then 50==============");
const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);

console.log("======step 2. find out all the even numbers======================== ");
const arrayEven = arrayNumbers.filter( (element)=> {
    return element%2==0;
} );
console.log(arrayEven);

console.log("======step 3. find out all the odd numbers========================");
const arrayOdd = arrayNumbers.filter( (element)=> {
    return element%2!=0;
} );
console.log(arrayOdd);

console.log("=========step 4. find out all numbers which are multiple 5===========");

// const arrayTransformed = [4, 9, 25, 36, 49, 81 ];
// const arrayTransformed= [];
// array.forEach( (element)=> {
//    return  arrayTransformed.push(element*5==0);
// });
// console.log(arrayTransformed);


const arrayMulFive = arrayNumbers.filter( (element)=> {
    return element%5==0;
} );
console.log(arrayMulFive);

console.log("=========step 5. find out all numbers which between 20 and 50===========");

const arrayBet = arrayNumbers.filter( (element)=> {
    if (element >=20 && element <=50){
        return element ;
       }
    
} );
console.log(arrayBet);









   











