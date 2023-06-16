//16-lesson Scopes,Closure

//Scopes
// console.log(a);// Cannot access 'a' before initialization - Error ya'ni single thread bo'lgani uchun a o'zgauvchi bor ammo u keyinroq e'lon qilingan
// console.log(b); //undefined ya'ni bor lekin hali qiymat biriktirlmadi
// let a = 1;
// a = 7;
// var b = 2;
// console.log(a);
// console.log(b);

// {
//   let c = 9;
// }
// console.log(c); //c is not defined ya'ni ummuman bu scopeda e'lon qilinmagani uchun c topilmaydi
//odatda bu xususiyatni let va constda ko'rish mumkin ammo var scopeda bo'lsa ham ishlaydi
// {
//   var d = 7;
// }
// console.log(d);

//for looplar uchun scope

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// console.log(i); //i is not defined i for loop scopeda bo'lgani uchun garchi o'zgaruvchi qilib e'lon qilingan bo'lsa ham faqat shu scope ichida ishlaydi

// for (i = 1; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// for (i; i < 20; i++) {
//   console.log(i);
// } //bu vaziyata ham i var bo'lib qolyabdi shuning uchun for scopeda bo'lsa ham ya'ni unga qiymat biriktirb ketyapmiz shuning uchun u auto var bo'lib qolyabdi va tashqi scopeda ham i exist bo'lib qolyabdi

//Lexical enviromnent

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // what will it show: "John" or "Pete"?
//yuqoridagi vaziyatda name funksiya chaqirilguncha o'zgarib bo'ldi  ya'ni yangi qiymat qabul qilib bo'ldi
// function makeWorker() {
//   let name1 = "Pete";

//   return function () {
//     console.log(name1);
//   };
// }

// let name1 = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // what will it show? "Pete" (name where created) or "John" (name where called)?

//bu yerda esa name1 o'z qiymati bo'lsa ham function scopiga kirganda name1 ning yangi qiymatini qabul qiladi lekin function scopidan chiqqandan so'ng avvalgi qiymatiga ega bo'ladi

//Lexical environment 2 ga bo'linadi ya'ni environment record va outer code datasiga kirish uchun havola

let name = "webbrain";
function getName() {
  let b = 9;
  console.log(name);
  return function () {
    return console.log(name, b);
  };
}
console.log(getName());

//ichki function avval o'zi ichida turgan functiondan qiymatini oladi keyin nameni izlaydi avval Lexical recorddan izlaydi agar undan topa olmasa keyin outer data dan izlaydi

//Closure - yopilish. agar ma'lum function outer variable ishlatsa va Environment Recordda o'ziga tegishli variable yo'q ammo outerda bor agar outerdan ishlatsa u closure deyiladi agar innerda ishlatsa unda closure deyilmaydi
let time = "time";
function sayTime() {
  console.log(time);
}
sayTime();

///Garbage collection - ishlatilgan boshqa zarur bo'lmagan ammallar tushadigan joy
//Har bir function call qilingandan keyin o'zi uchun Lexical environment ochadi bu havola yoki ichki Lexical record bo'lishi mumkin funksiya chaqirilishi tugagandan so'ng bu ma'lumotlar automatik o'chirib tashlanadi
