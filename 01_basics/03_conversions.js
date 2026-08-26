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