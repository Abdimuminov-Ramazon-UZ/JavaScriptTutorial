//3-lesson
//Questions
//1.Simple Metods string from Number
// let a = 1;
// let aString = a + "";
// console.log(typeof aString); // String
//2.Difference let and var
//var  was an old variable type;let was a new variable,but they are similar,let doesn't work until  called
//3 null's mean
//null - data type object no originally means key without primitive value
//4 Difference single and multi threads?
//Single thread - one stack used called on execute programm,it is meaning if one alarm doesn't answered all writing codes doesn't worked in web page.MUlti thread a lot of stack used called on execute programm, In javascript Asynchronus codes  works the same way.
//5 what is % ?
//It is the act of counting of the rest
// 6why null==undefined true but null===undefined false ?
//First answer:There   are taken logically null==false undefined=false so they are equal to each other                   Second answer: There isn't same data type
//true==1 is true

//===========

//In If expression is looking empty string "" ,null undefined and NaN   false values
// if (false) console.log("Havo sovuq");
// if (true) console.log("Havo issiq");
// let age = prompt("Your age ?", "");
// if (age >= 18) console.log("can open gmail");
// else console.log("can't open email");
let temp = ""; //issiq sovuq qor yomg'ir
// if (temp === "issiq") console.log("Ko'zoynak taqing");
// else if (temp === "sovuq") console.log("Qalin kiyining");
// else if (temp === "yomg'ir") console.log("Soyabon oling");
// else if (temp === "qor") console.log("Qailn kiyininb oling");
// else console.log("noma'lum havo");

//in if else expression is qwriting with order

temp = 17; //temp >0 && temp <10 , temp >10 && temp <15 , temp >15 && temp <25
// if (temp >= 0 && temp <= 10) console.log("havo juda sovuq");
// else if (temp >= 10 && temp <= 15) console.log("havo sovuq");
// else if (temp >= 15 && temp <= 25) console.log("havo iliq");
// else if (temp <= 25) console.log("havo issiq");
// else console.log("noma'lum havo");

//write without parentheses
// if (true) return console.log(true);

// Ternary operator ?

// temp > 0 ? console.log("havo juda sovuq") : console.log("havo juda issiq");
//multi ternary operator
temp > 15 ?
    console.log("havo issiq") :
    a > 0 ?
    console.log("havo iliq") :
    console.log("havo sovuq");

//Nullish operators  ||
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false  || ya'ni mantiqiy qo'shish operatori true+true=true false+true=true
console.log(NaN || 1); //1
console.log(NaN || false); //false so NaN false
console.log(null || false); //false so null false
console.log(undefined || false); //false so undefined false
//  &&
console.log(false && false); //false
console.log(undefined && 1); //undefined
console.log(true && false); //false
console.log(false && true); //false
console.log(true && true); //true && ya'ni mantiqiy ko'paytiruv amali false*true=false true*true= true
console.log(NaN && true); //NaN
console.log(NaN && false); //NaN  the first false value is  printing
console.log(false && undefined); //false

//** operator */
console.log(2 * 2);
console.log(2 * 3 ** 7);
console.log(2 ** 5);
console.log(0 ** 7);

//========