//Nested Objectni while orqali chiqarish
// let obj = {
//   name: "webbrain",
//   age: 23,
//   child: { name: "Academy", age: 31, child: { name: "azar", age: 50 } },
// };
// let sum = 0;
// while (true) {
//   if (obj.child) {
//     console.log(obj);
//     sum += obj.age;
//     console.log(sum);
//   } else {
//     break;
//   }
//   obj = obj.child;
// }
//While bilan ochilganda childlarga navbat navbat kiradi va childlardagi same propertylar ustida ishlash imkonini beradi
//do while bilan yozib ko'ramiz
// do {
//   if (obj.child) {
//     console.log(obj);
//   }
//   obj = obj.child;
// } while (obj.child);
//Single thread qoidalariga ko'ra yuqoridagi ifodani commentga olsak up code va down code same value beradi

//7-dars
//garbage colections
// let obj1 = { Adres: "Toshkent" };
// obj1.found = 1890;
// let obj3 = obj1;
// obj1 = null; //shu tenglashtirishdan boshlab obj1 garbage collectionga tushdi.Memory heapdan remove qilindi
// console.log(obj1);
// console.log(obj3); //Garbage collectionga tushishdan oldin obj1 ni copy qilib olamiz shunda unga yana accesible qilib olsak  bo'ladi.

//This - equal to  his own object
//objectlar ichida e'lon qilingan key:value chainlari local bo'lib ulardan property sifatida foydalangannimizda  nested objects yoki functions holatlarida object propertylarini global yoki nested back step qila oladi bunda this best method hisoblanadi
//Global holatda Javascriptda  umumiy window objecti ichida ishlayotgan bo'lamiz ya'ni window objecti methodalridan foydalanamiz uning xususiyat va propertylaridan foydlanayotgan bo'lamiz;
//this ni yozsak window objecti kelib chiqadi
// console.log(this); //{}
//this==window true
//Objectga funksiya biriktirish
//1-usul
//Function Declaration
// let user = {
//   name: "pero",
//   sayHi: function () {
//     console.log("sayHi");
//   },
// };
// user.sayHi();
// //2-usul
// //Variable create
// let surname = "Academy";
// function sayHi() {
//   console.log("SayHi");
// }
// let obj4 = {
//   surname,
//   sayHi,
// };
// obj4.sayHi();
//3-usul
//Internal function
// let obj5 = {
//   name: "webbrain",
//   age: 48,
//   sayHi() {
//     console.log(`Never can't talk bye `);
//   },
// };
// obj5.sayHi();
//This - in objects;
// let obj5 = {
//   name: "webbrain",
//   age: 48,
//   sayHi() {
//     console.log(`Never can't talk bye to ${this.name}`);
//   },
// };
// obj5.sayHi(); //there this=obj5 va obj5dan chiqib ketmaydi
//agar this o'rniga object's namedan foydalansak
// let user = {
//   name: "webbrain",
//   age: 48,
//   sayHi() {
//     console.log(`Never can't talk bye to ${user.name}`);
//   },
// };
// user.sayHi();
// let usr = user; //user's link same to usr's link
// user = null;
// usr.sayHi(); //ya'ni endi user garbage collectionda uning memoryda heapda linki yo'q  string literal ham userni ma'lumotlar ichidan qidirib topa olmaydi

//Arrow functionda this bo'lmaydi
//Objectda arrow function yasab ko'ramiz
// let obj5 = {
//   name: "webbrain",
//   age: 48,
//   sayHi() {
//     console.log(`Never can't talk bye to ${this.name}`);
//   },
//   getname: () => {
//     console.log(this.name);
//   },
// };
// obj5.sayHi();
// obj5.getname(); //undefined

//Function constructor without this
// function getName() {
//   this.count = 45;
//   console.log(this);
// }
// console.log(new getName()); //bu orqali function ichida e'lon qilingan  variablelarni ham globalda ishlatish mumkin eknligini umumiy holatda function ham aslida objectnig bir turi ekanligini ko'rish mumkin
//function ichida function yasab ko'ramiz;
// function getAge() {
//   console.log(new.target);
//   this.key = 78;
//   this.sayAge = function age() {
//     console.log(`Say it is ${this.key}`);
//     return "hey"; //Funksiya qiymati hey ga teng
//   };
// }

// console.log(new getAge().sayAge()); //sayAge() ishlaydi
//new.target metodi - function constructor bilan chqirilgan yoki chairilmaghanligini tekshirib beradi
// function getAge() {
//   console.log(new.target);
// this.key = 78;
// this.sayAge = function age() {
//   console.log(`Say it is ${this.key}`);
//   return "hey"; //Funksiya qiymati hey ga teng
// };
// }

// console.log(new getAge());

//Symbols - create unique ID and hidden properties

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// let obj = { [id1]: "webbrain", [id1]: "Academy" }; //create symbol key
// console.log(obj[id1]); //Academy
// let obj2 = { [id1]: "webbrain", id1: "academy" };
// console.log(obj2[id1]);
//objectda key lar odatda 2 xil usulda Symbol yoki string usullarida yoziladi Symbol(id1) deb e'lon qilish vaqtni olishi mumkinligi hisobga olinib [id1] ko'rinishida e'lon qilinadi invokeda ham obj[id1]--> Symbol type key:valuelarni chaqiradi  obj["id1"] ko'rinishida chaqirtirlganda esa objning string keylari chaqiriladi.E'tiborli jihati [Symbol("id")] deb yozilish kerak  keyni declare qilayotganda aniqlangan bo'lishi kerak
//Destructure -  can't right to left, can left to right variable<--object property
// let id1 = Symbol("id");
// let object = {
//   [id1]: 48,
//   name: "webbrain",
//   title: "Administrator",
//   Surname: "Academy",
//   [Symbol("id3")]: 58,
//   child: { Childname: "Sublime", extraName: "vscode" },
// };
// console.log(object);
// const { name, title, Surname } = object;
// console.log(name);
// console.log(typeof name);

//Symbol ko'rinishidagi keylarni esa bu usul bilan variablega keltirib bo'lmaydi
//declared variables need to write same key's name
//nested objectga destructureni qo'llab ko'ramiz
// let {
//   name,
//   child,
//   child: { Childname },
// } = object;
// console.log(child);
// console.log(Childname);

// //Object keyini yangi nom bilan e'lon qilish uchun
// let { title: newTitle } = object;
// console.log(newTitle);
// //for in --- string type keys enumerable symbols ignored
// for (let key in object) {
//   console.log(typeof key); //string
//   console.log(typeof object[key]);
// }   //string
// } //yuqoridgi misolda avvaldan key string eknligi belgilangan va object[key] deb yozganimizda key Symbol type emas balki object["key"]
//deb tushinilmoqda

//Spread operator --> not scope this data
// let object = {
//   name: "webbrain",
//   age: 48,
//   child: { childname: "testing name" },
// };
// obj = { ...object.child };
// console.log(obj); //nested objectni  ichki har qanday object: value chainini chiqarish
// console.log({ ...obj, age: 78 }); //changing variable

//Extra
//Optional chaining - agar object ichidagi child property not readable bo'lsa unga optional chaining ya'ni tekshirishdan avval error bermaslik uchun type tekshiriladi va keyin child propertysi izlanadi

// let obj = { name: "name", child: null };
// console.log(obj.child.age);
