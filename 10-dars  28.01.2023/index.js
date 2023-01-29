//10-lesson
//Arrays Beginner
//Arrays- object typega xos lekin key value chainiga bog'lanmagan ichidagi ma'lumotlar indekslangan data typedir
//Array va Objectning farqini 2 xil yuk mashinasiga qiyos qilish mumkin 1 ta yuk mashinasi ichida nomlangan elementlar asoslangan ma'lumotlar turibdi ularni nomma nom chaqirmasa bo'lmaydi , 2 yuk mashinasida esa har xil ammo nomlanmagan ma'lumotlar bor ularni sanamasak chaqirib bo'lmaydi
//Array ichiga har qanday ma'lumotni joylasak bo'ladi
let arr1 = [
  1,
  2,
  3,
  true,
  false,
  function SearchA(str) {
    return str;
  },
  { name1: "node Map" },
  null,
  undefined,
  -1,
]; //square brackets

// console.log(arr1[2]);

// //Array length
// console.log(arr1.length);

// console.log(arr1[arr1.length - 1]);
//Array.at()  metodi - metod generic bo'lib arrayga o'xshash string  ham chaqirsa bo'ladi u arrayning boshi va oxiridan ham numerable imkoniyatini beradi

// console.log(arr1.at(1));
// console.log(arr1.at(-7));
// //Array decloration
// let arr2 = new Array(5);
// old metod bo'lgan new array() ichiga 1 ta parametr qabul qilsa shu uzunlikdagi arrayni yasaydi 2 ta undan ko'p bo'lsa shu elementlardan Array yasab beradi
// console.log(arr2);
// console.log(arr2.length);
let arr3 = new Array(5, 6, 7);
// console.log(arr3);
// console.log(arr3.length);

// arr2[1] = 5; //agar 1 indeksga qiymat biriktirsak  unda 0 indeksa empty
// arr2[100] = 7; //agar 100 indeksga ma'lumot biriktirsak 99 ta empty element qo'shilib 100 indeksli array hosil bo'ladi
// console.log(arr2);
//Arraylarni qo'shish

//toString() array elementlarni string holatida print qiladi
// console.log(arr3.toString());
//join() elementlar orasidagi vergulni olib tashlaydi yoki o'rniga parametrdagi ma'lumotni chiqarib beradi
// console.log(arr1.join(""));
// console.log(arr1.join(" + "));
// //Arraylarni qo'shish
// console.log(arr1 + arr3); //+ metodida elementlar comma bilan yozilishidan tashqari first array's last elemnt added second array's first element
//concat() - metodi 2 ta arrayni qo'shadi va array qaytaradi,parametrlaru chegaralanmagan
// console.log(arr1.concat(arr3, [], {}));
// //typeof - array type ni tekshiramiz
// console.log(typeof arr1);
// //Array.isArray() - metodi  1 ta parametr qabul qiladi va typeni qaytaradi
// console.log(Array.isArray(arr1));
// let arr5 = [];
// console.log(arr5 == 0); //array bo'sh bo'lsa  0 teng type bilan tekshirilsa false beradi

//Loops
//Old way
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// } //indexlar orqali chaqirib ustida ishlash mumkin

// //new way for ... of and for ... in

// for (value of arr1) {
//   console.log(value);
// } //arrayning valuelarini chiqarib beradi
// for (index in arr1) {
//   console.log(index); //arrayning indexlarni chiqarib beradi
// }

//Methods
//push() -  arrayning oxiridan  ma'lumot qo'shadi
// arr3.push(2, "d", [arr1]); //parametr chegaralanmagan
// console.log(arr3);

// //pop() - array oxiridan  1 ta  element o'chiradi
// console.log(arr3.pop()); //parametr olmaydi
// console.log(arr3);

//unshift() - array boshidan ma'lumot qo'shadi
// console.log(arr3.unshift(7, 8, 9, "webrain", null));
// console.log(arr3);

// //shift() - array boshidan 1 ta  ma'lumot o'chiradi
// console.log(arr3.shift());
// console.log(arr3);

// //remove qilinayotgan elementlarni o'zgaruvchi sifatida saqlab qolsak bo'ladi

// let remArrEle = arr3.shift();
// console.log(remArrEle);
// console.log(arr3);

//splice() - powerful metods adding elements,replace element,remove element metod arrayga ta'sir qiladi uni modify qila oladi
// console.log(arr1.splice(0)); //1 parametr qaysi indexdan boshlab remove qilishimizni so'raydi
// console.log(arr1);
console.log(arr1.splice(2, 4)); //2 parametr qaysi indexgacha  remove qilishimizni so'raydi
console.log(arr1);
console.log(arr1.splice(2, 4, "definition")); //3 parametr qaysi indexgacha  replace qilishimizni so'raydi qilishimizni so'raydi
console.log(arr1); //3 parametrdan keyin parametrlar soni chegaralanmagan ular replace bo'lib ketaveradi
arr1.splice(1, 0, "D", 5); //2 parametr 0 bo'lsa unda faqat 1 parametrdagi indexli data ni 3 parametrga yoki 3.4.5...n gacha paremtrlarga replace qiladi qo'shilayotgan parametrlarni variablega saqlab bo'lmaydi
console.log(arr1);

//slice() - array ni modify qilmaydi lekin indekslar orqali array elementlari ustida amallar bajariladi
console.log(arr1.slice(1, 2)); // faqat 1 ta parametr kiritganimizdda  shu parametrdan oxirigacha kesib oladi
//2 ta parametrda 1 parametrdan 2 parametrgacha kesib oladi

//indexOf() - Array elemntini indexini chiqarib beradi left-->right
console.log(arr1.indexOf(1, 4)); // 1 chi parametrda Arrayning oxirigacha izlaydi
//2 parametrda 2 parametrdagi indexgacha qidiradi

//lastIndexOf() - Array elemntini indexini chiqarib beradi right-->left
console.log(arr1.lastIndexOf(1, 4)); // 1 chi parametrda Arrayning boshigacha izlaydi
//2 parametrda 2 parametrdagi indexgacha qidiradi

//reverse() - array elementlarini teskari yozib beradi
console.log(arr1.reverse());

//includes() - parametridagi value array ichida  bormi yo'qmi tekshirib beradi qiymati boolean bo'ladi
console.log(arr1.includes(1)); //true
