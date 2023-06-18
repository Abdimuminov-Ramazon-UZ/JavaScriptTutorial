//Lesson 17
//Old var
//Recursion nima?
//Recursion bu takrorlanish degani function oz' vazifasini bajarish uchun o'zini qayta chaqirish deganidir
//Lexical environment  nima?
//Lexical environment - leksik muhit bo'lib scopelar yordamida tushuntiriladi u 2 qismdan iborat
//lexical record - ichki scopeda e'lon qilingan o'zgaruvchilar
//Outer - global yoki bitta scope oldin e'lon qilingan o'zgaruvchilardir
//Closure nima?
//function o'z lexical recordidan emas outer datadan foydalansa unda function closure deyiladi
//Lexical environment o'z vazifasini bajargan yoki call tugagan holatda   Garbage collectionga datalarni auto o'tkazib yuboradi

//The Old Var

//let  is different from  Var

{
  let a = "x";
}
console.log(a); //a is not defined

{
  var a = "x";
}
console.log(a); //It is worked

//IIFE - Immediately Invoked Function Expression

var a = 20;
console.log(a);
//yuqoridagi  scopelardan birida berilgan var tipli a o'zgaruvchisi scope tashqarisida var orqali a o'zgaruvchisi e'lon qilinganda kodning qolgan qismida ham o'z qiymatini  2 marta e'lon qilinganday qolmoqda bu kodda xatoliklar olib keladi chunki scopeda talab qilingan o'zgaruvchi qiymati o'rnatilganday emas 2 marta o'zgartirilganday bo'lib qolmoqda bu xatolikni IIFE orqali hal qilishgan

var a = 10;
// function get() {
//   a = 30;
// }
// get();
// a = 40;
// console.log(a);

// (function () {
//   var a = 50;
//   console.log(a);
// })();
// // a = 60;
// console.log(a); //maqsad alohida scope orqali a qiymatini o'zgarishdan saqlashdir

//Global Object

//globalThis - bu window obektiga alternativ  chaqirish uchun va istalgan o'zgaruvchini istalgan joyda chaqirish uchun term

// globalThis.a = 40;
// (() => {
//   var a = 30;
//   console.log(a, globalThis.a);
// })();
//this ham globalThisga alternativ lekin this object yoki function ichiga kirsa unda u shu parentni nazarga tutadi

//globalThis ga biriktirilgan o'zgaruvchi  istalgan scopeda chaqirila oladi unga array object istalgan o'zgaruvchi biriktirilishi mumkin

//function is object

// function test() {
//   console.log("Hello");
// }

// console.log(test.name); //function nameni olish uchun ishlatiladi bunda array elementi functiuon bo'lsa uning nomini olish uchun ishlatiladi
// console.log(test.length);
// //function parametrlar sonini aniqlab beradi rest parametrni ignore qiladi

// let x = [
//   "a",
//   function test1() {
//     console.log("c");
//   },
// ];

// console.log(x[1].name);

// let y = (a, b, ...rest) => {
//   console.log("d");
// };
// console.log(y.length); //rest parametrlarni hisoblamaydi

//Custom properties
//odatiy property ya'ni functionni xuddi objectday qarab unga mustaqil property sifatida qarashimiz mumkin ammo u o'zgaruvchi emas uni let,const yoki var e;lon qilgan o'zgaruvchilarday foydalana olmaymiz
// function sayHi() {
//   console.log("Hi");

//   // let's count how many times we run
//   sayHi.counter++;
// }
// sayHi.counter = 0; // initial value

// sayHi(); // Hi
// sayHi(); // Hi
// console.log(typeof sayHi.counter);
// console.log(`Called ${sayHi.counter} times`); // Called 2 times

//NFE - Named Function Expression

// let getName = function callback(name) {
//   console.log(`Hi +${name}`);
//   //   return callback();
// }; //bundan maqsad function ichida funksiyani qayta chaqirishidir
// console.log(getName());

//new Function - function constructor
let genNumber = new Function(`console.log("hey")`);
genNumber();
//new constructor closureda error beradi
