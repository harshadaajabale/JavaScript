var x : number = 10 ;

//alert(x);

console.log('x value is ', x);


var s1: string = "You are the creater of your destiny";
var s2: string = `Powerful people come from powerful places ${x}`;

console.log(s1);
console.log(s1);


// Boolean 

var b1: boolean = true;
var b2: boolean = false;

var b3: boolean;

console.log(b1);
console.log(b2);

function test(): boolean {
    return b3 = false;
    console.log(b3);
    b3 =true;
}

console.log(test());


//Any : Data Type

var product : any ={
    productId : 1,
    productNAme: `IPhone`,
    productPrice: 120000,
    isAvailable: true
}
console.log(product);

let temp : any;

temp = "test";
temp = 10;

temp = false;
console.log(temp);


import {isPalindrome} from './utils';

console.log(isPalindrome('madam'))
console.log(isPalindrome('madan'))

//readonly