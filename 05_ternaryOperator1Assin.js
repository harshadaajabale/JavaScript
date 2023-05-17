



console.log("1.Variable name that can be used to strore funcetion is:")
console.log("Number to be checked greater or smaller :")
var greaterNumber = function(num1, num2){
    var num1 = 10;
    var num2 = -10;
 var result = num1>=num2 ? `10 is greater` : `-10 is Smaller`;
 console.log(`${result}`);
 
 }
 greaterNumber(10, -10);

 console.log("Number to be checked greater or smaller :")
var greaterNumber = function(value1, value2){
    var value1 = 899;
    var value2 = -800;
 var result = value1>=value2 ? `899 is greater` : `800 is Smaller`;
 console.log(`${result}`);
 
 }
 greaterNumber(899, 800);

console.log("-----------------------------------------------------------------------")
 console.log("2.check-- 29, 44, 0, 101--even or odd number")
 
 var isEvenOrOddNum = function(num1){
    var num1 = 29; 
 var result =  num1%2 ? "29 is even" : "29 is odd";
 console.log(`${result}`);
 }
 isEvenOrOddNum(29);

 var isEvenOrOddNum = function(num1){
    var num1 = 44; 
 var result =  num1%2 ? "44 is even" : "44 is odd";
 console.log(`${result}`);
 }
 isEvenOrOddNum(44);

 var isEvenOrOddNum = function(num1){
    var num1 = 0; 
 var result =  num1%2 ? "0 is even" : "0 is odd";
 console.log(`${result}`);
 }
 isEvenOrOddNum(0);

 var isEvenOrOddNum = function(num1){
    var num1 = 101; 
 var result =  num1%2 ? "101 is even" : "101 is odd";
 console.log(`${result}`);
 }
 isEvenOrOddNum(101);

 console.log("---------------------------------------------------");
 console.log("3. which word has even or odd length JavaScript, devel0per, google ");

function wordLength(str){
    var text = str;
    var textLength = text.length;
    console.log(`the length is:`, textLength);
    var result = str%2 ? "JavaScript Has ODD" : "JAvaScript Has EVEN";
    console.log(`${result}`);

}
wordLength("JavaScript");

function wordLength1(str){
    var text = str;
    var textLength = text.length;
    console.log(`the length is:`, textLength);
    var result = str%2 ? "Developer Has EVEN" : "Developer Has ODD";
    console.log(`${result}`);

}
wordLength1("Developer");

function wordLength2(str){
    var text = str;
    var textLength = text.length;
    console.log(`the length is:`, textLength);
    var result = str%2 ? "Google Has ODD" : "Google Has EVEN";
    console.log(`${result}`);

}
wordLength2("Google");


//  var wordLength = function(srt){
//  var word = word.length;
//  console.log("j")
//  var result = len %2  ? "JavaScript is EVEN": "JavaScript is ODD";
//  console.log(`${result}`); 
//  }
//  wordLength (str);

