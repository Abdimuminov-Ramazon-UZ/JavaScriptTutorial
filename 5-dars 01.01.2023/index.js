//while do while

//while
// while (true) {
//     console.log("Hello");
// } //In the Scope if condition===true  while is executed

// let i = 5;
// while (i) {
//     console.log(i);
//     i--;
// } //Expression executed from 5 to 1 because in Js 0===false and stopped

// do while

//do{states and step} while(condition)
// let i = 0;
// do {
//     console.log(i);
//     i--;
// } while (i == 0);
// //
// let result = "";

// do {
//     i = i + 1;
//     result = result + i;
// } while (i < 5);

// console.log(result);
//  Answer 12345
//Turn expression into a for

// for (; i < 5; i++) {
//     let result = "";
//     result += i;
//     console.log(result);
// } //Answer 0 01 012 01213 01234 ya'ni har gal result string yangilanayapti shuning uchun ham 4 ta shunday qiymat mavjud agar resultni ichkarida e'lon qilsak  Answer 0 1 2 3 4 bo'ladi ya'ni result har bir loop  bajarilgan empty  bo'lib qolaveradi

//whileda avval shart tekshirilib keyin kod bajariladi do whileda avval kod bir marta yurib keyin shart tekshiriladi

// let i = 0;
// while (i) {
//     console.log(i);
// } //not output
// let j = 0;
// do {
//     console.log(j);
// } while (j);
// //Answer 0

//Function
// Function declaration and invoke
// function getAvr() {
//     console.log("webrrain");
//     console.log("webrrain");
//     console.log("webrrain");
//     console.log("webrrain");
//     console.log("webrrain");
//     console.log("webrrain");
//     console.log("============");
// } //declaration
// getAvr(); //Invoke
// getAvr();

//Function expression
//Hosting - agar kodning yuqorisida id ni so'rasak error beradi agar pastda bo'lsa muammosiz ishlaydi
// console.log(id);
// let id = 1; //Cannot not be defined

// let login = 2;
// console.log(login); // 2

//function declaration pastda yoki yuqorida e'lon qilinishidan qa'ttiy nazar qayerda chaqirilsa ham error bermaydi
// getAvr();
// const getAvr = function() {
//     console.log("Hello Webbrain Academy ");
// }; //Is not defined

//Function expressionda function variablega biriktirilgani uchun qayerda e'lon qilinishi muhim. JS Single thread bo'lgani uchun function expression kelgan qatordagina shu functionni yasab bera oladi. Yuqoridagi qatorlarda functionni chqairish xatolikka olib keladi

//Arrow function

// const getAvr=()=>{}
// const getAvr = function() {
//     console.log("Welcome to Webbrain Academy");
// };

//Parametr
// const getAvr = function(name) {
//     console.log(name);
//     console.log("Welcome to Webbrain Academy");
// };
// getAvr();
// getAvr("Najmiddin");

//Parametres

// const getAvr = function(name, surname, age) {
//     console.log(`Name: ${name}`);
//     console.log(`Surname: ${age}`);
//     console.log(`Age: ${surname}`);
//     console.log("Welcome to Webbrain Academy");
// };
// // getAvr();
// // getAvr("Najmiddin", "Nazarov", 20);
// // getAvr("Muhammad", "Muhammad f", 20);
// // getAvr("Asilbek", "Asilbek F", 20);
// // getAvr("Iqboljon", "Iqboljon f", 20); //there are  name=Iqboljon age=Iqboljon  f 20 is discarded
// getAvr(20, "F");

//shadow variable
// let name = "Webbrain";
// const test = () => {
//     name = "Academy";
//     console.log(name);
// };
// console.log(name); //name = webbrain
// test(); // endi name = academyga ya'ni funkisya tashqarisidagi o'xshash nomli variable o'zgardi
// console.log(name); //name = academy
// //Shadow variables - o'xshash nomli variablening o'zgarishi

//default parametr
// const telegram = (name, surname) => {
//     if (surname)
//         console.log(
//             name,
//             surname
//         ); //if dagi condition true bo'lsa if ishlaydi surname yo'q ya'ni empty string == false bo'lsa ishlamaydi
//     else console.log(name);
// };
// telegram("webbrain");//old metod

// const telegram = (name, surname) => {
//     surname ? console.log(name, surname) : console.log(name);
// };
// telegram("webbrain"); //agar surname true bo'lsa chiqadi falseda chiqmaydi
// //old metod
// const telegram = (name, surname) => {
//     console.log(name, surname || "");
// };
// telegram("webbrain"); //log ichidagi 2 ifoda trueni chiqarib beradi
//old method
// const telegram = (name, surname = "") => {
//     console.log(name, surname);
// };
// telegram("webbrain");//default parametr berilgani uchun surname chiqmadi

//return keyword
//Gpa -- grade point average
// const gpa = (a = 0, b = 0, c = 0, d = 0) => {
//     let res = (a + b + c + d) / 4;
//     console.log(res);
//     return "okay ?";
// };
// console.log(gpa(4.5, 3, 4, 3.5)); //3.75
// console.log(gpa(5, 3, 4, 3.5)); //3.87
// console.log(gpa(4.5, 3, 4, 3)); //3.62
// console.log(gpa());

//without return
// const getNum = (a) => {
//     let total = 193;
//     console.log((a * 100) / total);
//     // console.log(a);
// };
// // getNum(7);
// // console.log(typeof getNum(8)); // undefined ya'ni getnum(8) desak ham funksiya qiymatga ega emas u undefined
// console.log(parseInt(getNum(8))); //chunki getnum(8 ) number emas umuman u ma'lum qiymatga ega emas

//with  return
const getNum = (a) => {
    let total = 193;
    console.log((a * 100) / total);
    return (a * 100) / total;
};
console.log(parseInt(getNum(8))); //endi return  kalit so'zi orqali getNum(8 ) ma'lum value bo'ldi
console.log(typeof getNum(8));

//Clean code

//Js da  namelarni e'lonq qilishda  iloji boricha bajaradigan vazifani biriktirish tushunioladi
// biron bir qiymatni olish uchun get, hisoblash uchun calc
// biron bir o'zgaruvchi yasash uchun create
//biron narsani tekshirish uchun check so'zlaridan foydalanish tushuniladi CamelCase formatidan foydalanish maslahat beriladi