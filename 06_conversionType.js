console.log("Type Conversion");
console.log("1. Implicit Conversion : Automatic Type Conversion");
console.log("//numeric string used with +gives string type");

result = `3` + 2;
console.log(`${result}`);

result = `3` + true;
console.log(`${result}`);

result = `3` + undefined;
console.log(`${result}`);

result = `3` + null;
console.log(`${result}`);

console.log("2. Explicit Conversion : Automatic Type Conversion");
console.log("//If boolend is used, true is 1, false is 0 ");

result = `4` - true;
console.log(result);

result = `4` + true;
console.log(result);

result = `5` + false;
console.log(result);


console.log("3. Implicit string conversion to number");
console.log("//Number string  used with , -, /, * result number type");

result = `4` - `2`;
console.log(result);

result = `4` - 2;
console.log(result);

result = `4` * 2;
console.log(result);

result = `4` / 2;
console.log(result);

console.log("4. Undefine used with number, Boolean or null given NaN ");
console.log("//Arithmatic opearation of undefined with number, Boolean or numm given NaN ");

result = 4 + undefined;
console.log(result);

result = 4 - undefined;
console.log(result);

result = true + undefined;
console.log(result);

result = null + undefined;
console.log(result);

console.log("5. Explicit Conversion:-conversion  number string, values to numbers is that case we can use Number()");
console.log("//String to Number");

result = Number(`324`);
console.log(result);

result = Number(`324e-1`);
console.log(result);

result = Number(true);
console.log(result);

result = Number(false);
console.log(result);

console.log("6. Explicit Conversion:-Invalid string to number return NaN");
console.log("//If a strng is an invalid number, the result will be NaN for example");

result = Number(`hello`);
console.log(result);

result = Number(undefined);
console.log(result);

result = Number(NaN);
console.log(result);

console.log("6. Explicit Conversion:-string to number using + operator");

var numberInString = `100`;
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof myNumber);

console.log("7. Explicit Conversion:-number to string datatype conversion using toString() method");

var myNumber = 100;
console.log(typeof myNumber);

var afterConversion = myNumber.toString();
console.log(typeof afterConversion);







