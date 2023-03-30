//13-lesson
//Savollar

//user ma'lumotiga yangi ma'lumot qo'shish uchun createdan foydalanamiz
// let cars = [
//   { id: 1, year: 1900, name: "volvoov" },
//   { id: 2, year: 1980, name: "bmwov" },
//   { id: 3, year: 1850, name: "citrocvov" },
//   { id: 4, year: 1752, name: "chevro" },
//   { id: 5, year: 1400, name: "ladaov" },
//   { id: 6, year: 2000, name: "rolls roys" },
//   { id: 7, year: 1980, name: "tesla" },
// ];
// let data = { id: 40, year: 2012, name: "honda" };
// let createUser = (type) => {
//   cars = [...cars, type];
//   return cars;
// };

// console.log(createUser(data));

// //5 id dagi ma'lumotni o'chirib yuborish uchun
// let deleteId = (id) => {
//   let res = cars.filter((v) => v.id != id);
//   cars = res;
//   return cars;
// };
// console.log(deleteId(5));

// //tesla ismini o'zgartirish kerak
// let updateUser = (id, type, value) => {
//   let res = cars.map((v, i) => (v.id === id ? { ...v, [type]: value } : v));
//   cars = res;
//   return cars;
// };

// console.log(updateUser(7, "name", "priora"));

// //ov qo'shimchali ma'lumotlar qaytsin
// let readExp = (exp) => {
//   let res = cars.filter((v) => v.name.includes(exp));
//   cars = res;
//   return cars;
// };
// console.log(readExp("ov"));

//arrayga 3 ni qo'shish kerak
// let ar = [1, 2, 4, 5];
// ar.splice(2, 1, 3);
// console.log(ar);

//Distructure - strukturani buzish object yoki array ichidagi property va valuelarni olish va yangi value joriy etish uchun qo'llaniladi

// let obj = { name: "webbrain", title: "It Center" };

// let name = "webbrain1";
// let { name: newName, title } = obj;
// console.log(newName);
//shu tariqa left -> right emas right->left ko'rinishida ma'lumotlar olindi ,avval declare qilingan valuelar orasida  objectning ichidagi biron bir nomi o'xshahsi to'g'ri kelsa 2 nuqta orqali yangi nom berib ketamiz

//Object ichidagi objectlarni distructure qilamiz-Nested Distucture
// let obj1 = {
//   fullname: "webbrain",
//   title: "IT center",
//   data: { found: 2010, old: 13 },
// };
// let {
//   fullname: obj1Fullname,
//   data: { found, old },
// } = obj1;
// console.log(old); //nested Distructureda ichki obeyktlardan biridagi propertylar ham globalga o'tadi

//Array Distructure
// let arr = ["apple", "orange", "Kiwi"],
//   [bir, ikki, ...res] = arr;
// console.log(bir);
// console.log(res);//res orqali qolgan o'zgaruvchilarni bitta o'zgaruvchiga saqlasa bo'ladi

//Function parametrlarida distructure
// let getData = ({ name, id }) => {
//   console.log(name, id);
// };
// getData({ name: "k", id: 4 });//parametrni distructure qilish orqali kamroq kod yozish mumkin lekin ba'zi xaatoliklar chiqadi agar data object type bo'lmasa unda error chiqarishi mumkin
//unda default value sifatida data={} ko'rinishida parametr bersak error emas undefined qaytadi

//Object.entries() metodi
// Object.entries(obj1).map(
//   ([key, value], index) => console.log(value) || console.log(key)
// ); //entries metodi objectni array ko'rinishiga keltiradi agar uning valuelarini distructure qilsak unda key, value ko'rinishidagi osonroq zanjirga ega bo'lamiz

//Date() - library joriy vaqtga tegishli qiymatlarni olish uchun ishlatiladigan kutubxona
console.log(Date());
let date = new Date();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getUTCDate());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
console.log(date.getFullYear());
console.log(date.getUTCFullYear());

//vaqt qiymatlarini olishda simple function
const getTime = (symbol) => {
  //chiziqcha o'rniga parametrdan foydalanimiz
  let date = new Date();
  return `Today: ${date.getDay()}${symbol}${date.getMonth()}${symbol}${date.getFullYear()}`;
};
console.log(getTime("/"));

//hafta kunlarini chiqarish uchun function
const WeekDays = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];
console.log(WeekDays[date.getDay()]);

//JSON - JavaScript Object Notation is used to API's and Config files
let user = {
  name: "webbrain",
  year: "2023",
  data: { founded: 2000, size: "more students" },
};
// console.log(JSON.stringify(user)); //objectdan JSON ga o'tish
let jsOb = JSON.stringify(user, ["year"]); //replacer, indentation
//replacer - o'rnini bosuvchi bo'ladi ya'ni faqat replace ichidagi object ma'lumotni jo'natadi objectning qolgan ma'lumotlari jo'natilmaydi
//3 parametr indentation  nested objectlarga nisbatan ishaltiladi va nested objectga kiradi va nested object ichidagiu ma'lumotlarni bo'sh joy tashlab beradi for reading
let jsObj = JSON.stringify(user, ["name", "year", "data", "founded"], 2);
console.log(jsObj);
//JSON.parse() - JSON  to Object
let objJson = JSON.parse(jsObj);
console.log(objJson);
