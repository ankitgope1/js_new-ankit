let score = "abc"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/* 
true => 1,
false => 0
"" => 0
"Word" => 1
*/

let someNumber = 33
let someString = String(someNumber)
// console.table([someNumber,someString])
// console.log(typeof someString)



// ********************************************* Operations *************************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = 'Hello ';
let str2 = 'World';
let str3 = str1+str2;
// console.log(str3);

// console.log((3+4)*5%3);
// console.log("1"+2);
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log(+true);

let num1, num2, num3

num1 = num2 = num3 = 2; 
// console.log(num1)

let gameCounter = 100
gameCounter++;
--gameCounter;
console.log(gameCounter);