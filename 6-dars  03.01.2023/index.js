//Objects
//object - key va valuedan tashkil topgan chain
// let account = {
//     name: "Decoder",
//     major: "Frontend",
//     founded: "2020",
//     "full name": "Accounting pro",
// };
// console.log(account);

//Acces property
//to'liq objectni ekranga chiqarib bo'lmaydi
//1 ta propertyni chaqirish
// console.log(account.name);
// //har qanday propertyni chiqarish;
// console.log(account["name"]);
// //orasida probel bo'lgan keyni chaqirish
// console.log(account["full name"]);

//Object Constructor
//1 - yo'l
// let obj1 = {};
// console.log(obj1);
// //2- yo'l
// //Old way constructor
// let obj2 = new Object();
// console.log(obj2);

//object keyida raqam ishlatilishi
// let acc1 = {
//     name: "Decoder",
//     major: "Frontend",
//     founded: "2020",
//     "full name": "Accounting pro",
//     0: 564563,
// };
// console.log(acc1[0]); //output 564563
//raqamli keylarni . orqali acces qilib bo'lmaydi unga [] bilan  murojat qilish kerak

//objectda variablelar orqali propertylar chaqirish
// let key = "major";
// console.log(acc1.key);
// console.log(acc1[key]); //==console.log(acc1.major)
// console.log(acc1["key"]);
//shu holatda [] ning xususiyatlari ko'zga tashlanadi [""] holatda object ichidagi key qidirilishi  []  holatda variablega valuesini olgan holda qidirilishini ko'rishimiz mumkin
//Dynamic holatda variablega olinishining sababi keyning valuesini o'zgartirish orqali object key:valuelarini olish mumkin

// let keys = prompt("Enter object keys...", "");
// alert(acc1[keys]); //free response
// let name = "major";
// alert(acc1["name"]);

//Object key va valuelarini qo'shish o'zgartirish
//O'zgartirish
// acc1.name = "Dexoder tar";
// acc1.actual = "one year";
// console.log(acc1.actual);

//Object ichida same name key qo'llash
// let acc2 = {
//     name: "Atrium",
//     cost: 1200,
//     name: "Saphir",
// };

// console.log(acc2.name); //Saphir object first yozilgan keyni ignore qiladi u 2 yozilgan name ning qiymatini oladi
//keylarni o'chirish
// delete acc2.cost;
// console.log(acc2.cost);
// //const variabledan foydalanganda xatolik
// const acc3 = {
//     name: "Atrium",
//     cost: 1200,
//     name: "Saphir",
// };
// acc3.type = "Jewelry";
// console.log(acc3);
// delete acc3.cost;
// console.log(acc3);
// acc3 = "hero";
// console.log(hero);
// //bu yerda xatolik bermaydi chunki object o'z ichidagi key valuelarga solishtirish uchun link beradi ichki ma'lumotlar o'zgartirilgani bilan  asosiy link o'zgarmasa object const variableda ham  ishlayveradi
//Faqat yuqoridagio object nomini o'zgartimasak bo'ldi

//Object.freeze metodi
// Object.freeze(acc3);
// acc3.different = "size";
// console.log(acc3);
// delete acc3.name;
// console.log(acc3);
// acc3.cost = 2500;
// console.log(acc3);
//Bu metod objectni ichidagi key : valuelarni qo'shish o'chirishni o'zgartirishni to'xtatadi.

//Object.seal metodi
// Object.seal(acc3);
// acc3.different = "size";
// console.log(acc3);
// delete acc3.name;
// console.log(acc3);
// acc3.cost = 2500;
// console.log(acc3);
// bu metoddan foydalanilganda propertylarni o'chirib qo'shib bo'lmaydi lekin o'zgartirsa bo'ladi

//objects are comparisoning same name

// let acc4 = acc3;
// console.log(acc3 == acc4); //true
// console.log(acc3 === acc4); //true
//Objectlar manzil ya'ni linklarga ega bo'ladi ichki propertylar bir xil lekin nomlari boshqa bo'lsa unda ular o'zaro teng bo'lmaydi

//2 ta objectni linkini har xil qilib nusxalash
// const acc5 = structuredClone(acc3);
// console.log(acc5); //node -v 18.13.0 LTS

// object propertylarini variable orqali qo'shish

// let name = prompt("Enter name: value ", "");
// let age = prompt("Enter age: value ", "");
// let color = prompt("Enter name: value ", "");

// let getObjP = {
//     name: name,
//     age: age,
//     color: color,
// };
// console.log(getObjP);

// //Short way
// let getObjS = { name, age, color };
// console.log(getObjS);

//Object ichida property bor yoki yo'qligini tekshirish
const acc3 = {
    name: "Atrium",
    cost: 1200,
};
const acc6 = {
    Nname: "gold",
    Ecost: 4000,
};

console.log("name" in acc3); //true

//Object.assign  metodi
Object.assign(acc3, acc6); //Target acc3 source acc6 holatida 2 ta objectni biriktiryapti
console.log(acc3);

//objectlardan for loop lardan foydalanish.Propertylarni raqamlash

// for (let i in acc3) {
//     // i += 1;
//     console.log(acc3);
// } // bu ifodada Object keylar olinadi
for (let i in acc3) {
    // acc3[i] += 1;
    console.log(acc3[i]);
} // bu ifodada Object valuelar olinadi