let score=null
console.log(typeof score); //string
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33

//"33" => 33
//"33abc" => NaN
//true => 1, false=> 0

let isboolean=1
let booleanValue=Boolean(isboolean)

console.log(booleanValue); //true
//""=> false and "..." => true

let someNumber=33
let stringValue=String(someNumber)
console.log(stringValue); // "33"
console.log(typeof stringValue); //string 


//#########################################//

let value =3
let negValue= -value
console.log(negValue); // -3
console.log(2+2); // 4

let str1="Hello"
let str2="Jit"
let str3=str1+str2
console.log(str3); // "HelloJit"

console.log("1"+1+2); // "112" if string is present at the start then it will convert the rest of the numbers into string and print it as a string
console.log(1+1+"2"); // "22" if string is present at the end then it will normally printed with the summation of the previous  numbers 


console.log(+true); // 1
console.log(+false); // 0
console.log(+"")

let gameCounter =100
++gameCounter;
console.log(gameCounter); // 101