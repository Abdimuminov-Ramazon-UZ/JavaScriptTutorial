//11-lesson
//Savollar:
//Arraylarga kirishni necha xil usuli bor ?
//array elemntni quodrate square yo'li bilan chaqirish usuli
//data typeni o'zgartirib objectga o'tkazib object modedan foydalanib chaqirish mumkin
//at() metodi orqali indexni kiritib kirish mumkin
//splice metodi  arrayni modify qiladi kesadi,o'chiradi,replace qila oladi
//3 indexdagi ma'lumotni yangilash splice orqali
// let arr = [1, 2, 2, 2, 3];
// arr.splice(3, 4, 7);
// console.log(arr);
// //arrayni typeni aniqlash uchun- sodda usul
// console.log(typeof arr);
// //slice va splice farqi spliceni arrayni modify qilishida slice o'zgaruvchiga tenglashtirish orqali yangi array oladi lekin arrayni modify qila omaydi
// console.log([] == 0); //true chunki array empty yoki 0 falsega  teng
// console.log([] === "0"); //type string ekanligidan false
// console.log([] === 0); //type arr va number ekanligidan  false
// console.log([1, 2, 22, 3] + [, 6]);
// //index() metodi berilgan belgini indexini izlaydi unga duch kelsa to'xtaydi,lastIndex() array oxiridan boshlab izlaydi,includes array ichida berilgan parametrdagi valueni izlaydi
// console.log(eval(arr.join("+")));

//Methods

//fiter()- callbackfn da berilgan shartga ko'ra array metodlarini saralaydi.Arrayni modify qilmaydi
//metodning callback functioniga 3 ta parametr beramiz 1 parametr valuega teng bo'ladi,2 chisi index 3 chisi array nomi bo'ladi
//callback functionga arrow function berish osonroq declare function berilishi mumkin
//Arrow function ga compare,assign usulida valuelarni filtrlashni tushuntirishimiz mumkin odatda qaytuvchi ma'lumot shu value ustida  amal bajargan function qiymatiga teng bo'ladi,agar array last indexda 0 turgan bo'lsa ignore bo'lib ketadi agar array elemnti empty bo'lsa ham ignore bo'ladi yangi qaytadigan arrayda empty element bo'lmaydi
let num = [57, 3, 4, 22, 4, 55, 0];
let str = [
  "banana",
  "apple",
  "apelsin",
  "mandarin",
  "ananas",
  "Ciwi",
  "Grapes",
];
// let res = num.filter((val, ind) => {
//   return val < 10;
// });
// console.log(res);

// function cutBigLeng(arr) {
//   return arr.filter((val) => {
//     return val.length < 7;
//   });
// }
// console.log(cutBigLeng(str));
// let res1 = str.filter(function (val, ind) {
//   return val.includes("an") && ind < 3;
// });
// console.log(res1);
//objectlar bilan ishlash
let cars = [
  { id: 1, year: 1900, name: "volvo" },
  { id: 2, year: 1980, name: "bmw" },
  { id: 3, year: 1850, name: "citrocv" },
  { id: 4, year: 1752, name: "chevro" },
  { id: 5, year: 1400, name: "lada" },
  { id: 6, year: 2000, name: "rolls roys" },
  { id: 7, year: 1980, name: "tesla" },
];
// let res2 = cars.filter((value) => value.year === 1980);
// console.log(res2);
// console.log(cars.filter((val) => val.id < 4));

//sort()- metodi array elementlari  son lardan iborat bo'lsa yoki stringlardan iborat bo'lsa  ularni tartiblab beradi bunda sonlarni ham stringni ham ASCII codlarda solishtiradi shuning uchun numberda 10 dan katta sonlar kelganda xatolik yuz beradi buni to'g'rilash uchun sortda callbackfn dan foydalanamiz bunda functionga 2 ta parametr beramiz a- firstItem b-secondItem sifatida ishlatishimiz bunda a ni har bir elementga taqqoslanb chiqadi mumkin a-b holatda ascending holatda saralab beradi b-a holatda descending ya'ni sonlar string pasayish tartibida saralanadi

// console.log(num.sort((a, b) => a - b));
// console.log(num.sort((a, b) => b - a)); //qolgan opertorlar ishlamaydi + * / - lar bir xil ishlaydi JS b va a ning joylashish o'rniga qarab ishlayveradi

//string elementlari bilan localeCompare() metodi orqali ishlaymiz
// console.log(str.sort((a, b) => a.localeCompare(b))); //ascending
// console.log(str.sort((a, b) => b.localeCompare(a))); //descending

//objectda ishlatib ko'ramiz
// let res4 = cars.sort((a, b) => a.year - b.year);
// console.log(res4);
// let res5 = cars.sort((a, b) => b.name.localeCompare(a.name));
// console.log(res5);

//find() -  elementlar orasidan so'ralganini qaytaradi agar element bor bo'lsa o'zini qaytaradi agar yo'q bo'lsa undefined qaytaradi
//callbackfn ham 3 ta parametr oladi bular value , index, array bo'lib returnda array emas valuening ekanligi bilan farq  qiladi
// console.log(
//   num.find((val) => {
//     return val === 555;
//   })
// );
// //objectda
// console.log(
//   cars.find((val) => {
//     return val.id === 6;
//   })
// );

//finIndex() - qidiralayotgan ma'lumotning indexini chiqarib beradi
// let num = [5, 3, 4, 22, 4, 55, 0];
// let str = [
//   "banana",
//   "apple",
//   "apelsin",
//   "mandarin",
//   "ananas",
//   "Ciwi",
//   "Grapes",
// ];
// console.log(
//   num.findIndex((val, index) => {
//     return val > 10 && index > 2;
//   })
// ); //agar bunday indexdagi qiymat bo'lmasa -1 bo'lsa indexini qaytarib beradi
// //objectda
// console.log(
//   cars.findIndex((val, ind) => {
//     return val.year > 1900;
//   })
// );//1

//findLast() - metodi find() metodi arrayning boshidan keladi va 1 qanoatlantirilgan qiymat chiqishi bilan shuni chiqaradi va to'xtaydi finLast() oxiridan qidirb keladi
// console.log(num.findLast((val) => val > 10));

//finLastIndex() - findIndex() arrayning boshidan keladi va 1 qanoatlantirilgan qiymat chiqishi bilan shuni chiqaradi va to'xtaydi findLastIndex() oxiridan qidirb keladi

// console.log(num.findLastIndex((val) => val < 10)); //6 indeksdagi son 10 dan kichik

//forEach()- valuelarni loop qilish uchun ishlatiladi
//metod arrayga return qilmaydi ya'ni qiymatga erishmaydi faqat amal bajarib beradi

// let res5 = num.forEach((element) => console.log(element + 2));
// console.log(res5); //res5 undefined hisoblanadi

//map() - forEachga o'xshab elementlarni loop qiladi ammo return qiladi va array qaytaradi
// let res6 = num.map((val, ind) => val + 2);
// console.log(res6); //res6 Array bo'lib ma'lum qiymatga ega

// let res7 = str.map((val) => {
//   return val + 11;
// });
// console.log(res7);

//every() - har bir elementni tekshirib chiqadi va ulardan biri shartga to'g'ri kelmasa false hammasi to'g'ri kelsagina true qaytaradi

// console.log(num.every((val) => !isNaN(val)));//true
// console.log(num.every((val) => typeof val === "number"));

//some() - tekshirilganda elementlardan 1 tasi shartni qanoatlantirsa ham true qaytaradi
// let num1 = [1, 2, 3, , 5, 4, 4, "het"];
// console.log(num1.some((val) => typeof val === "string")); //true callbackfn yoki declarationdan foydalanganimizda ham some comparing qilishda osonroq ya'ni find metodlarida -1 1 0 qaytishidan ko'ra

//fill() - elemntlarni o'rnini almashtiradi  yoki to'ldiradi Arryni modify qiladi . RegEx  qabul qilmaydi.slice() ga o'xshab 3 ta parametr qabul qiladi first qiymat, second start index,third end index sifatida ishlatiladi

// console.log(num1.fill(7)); //agar 1 parametrning o'zi kelsa unda hamma elemntni 7 ga almashtiradi
// console.log(num1);
// console.log(num1.fill(8, 2)); //agar 1 va 2 parametrning o'zi kelsa unda 2 indexdan boshlab hamma elemntni 8 ga almashtiradi
// console.log(num1.fill(9, 2, 5)); //agar 3 ta parametr bilan kelsa unda 2 param dan 3 paramgacha elemntni 9 ga almashtiradi
// //negative number olinmaydi

//copyWithin() - array elementini indexiga boshqa pozitziyadagi ma'lumotni yoki ma'lumotlarni joylaydi Arrayni modify qiladi
//3 ta parametr oladi first target,second start,third end hisoblanadi e'tiborli jihati arrayning ichki elementlaridan foydalanadi
// console.log(num.copyWithin(2)); //faqat targetning o'zi berilganda 2 indeksgacha ma'lumotni oladi va uni 2 dan keyingi indekslarga 2,3 - o'rniga 0,1 indeksdagi ma'lumotlarni yozadi  qolgan indeksdagilar suriladi  va oxirgi 2 ta sig'may qolgani kesib tashlanadi
// console.log(num.copyWithin(2, 3)); //3 indexdan toki array tugaguncha ma'lumotlar 2 indexdan boshlab yozib kelinadi sig'may qolganlari skip qilinadi
// console.log(num.copyWithin(2, 3, 5)); //2 indexdan boshlab 3,4,5 indexdagi ma'lumotlar joylanadi surilganlari skip qilib yuboriladi

//sig'may qolganlari skip qilinadi agar array elementi 9 ta bo'lsa target 8 dan boshlanib copy qilingan elementlar 4 ta bo'lsa unda 8,9 indexga 2 ta element yozilib qolgani skip qilinadi

//reduce() -  bu metod valuelar ustidan yurib chiqib ularning hammasi ustida 1 ta amalni har bir valuega o'tganda valuelar o'rtasida bajaradi bajaradi soddaroq holatda ularni qo'shadi yig'indisini hisoblaydi uning callbackfniga berilgan parametrlari yuqoridagi callbackfn larnikidan 1 parametri initialvalue yoki yig'indiga biz tashqaridan qo'shmoqchi bo'lgan raqamga tengligi bilan farq qiladi uning parametrlari first initalvalueni declared name(parametr berishda uni e'lon qilamiz unga bu yerda qiymat bermaymiz),second currentvalue (arrayning shu stepdagi value qiymati),third current index(indekslar bilan ishlash uchun 3 qiymatni e'lon qilsak bizga callbackfn ga indexni value sifatida beradi),fourth array(odatda ishlatilmaydi ammo nested amallarda index pozitsiyalari yoki change valuelarda ishlatamiz bunda array shu chaqirilayotgan arrayga teng) syntaxda arr.reduce((sum,currentvalue,currentindex,array)=>{statement},initalvalue) ko'rinishida beramiz bu yuerda initalvalue for sum first value if initalvalue equal zero and sum equal first value array's
// let num3 = [4, 5, 6, 7, 8];
// console.log(num3.reduce((sum, val, ind) => sum + val, 0)); //30 sum=0
// console.log(num3.reduce((sum, val, ind) => sum, 2)); //32 sum =2 first value
// console.log(num3.reduce((sum, val, ind, arr) => sum + val + ind + arr[3], 0)); //75

//flat()- multidimensional arrays ya'ni array ichida arraylarni ochib array valuesiga aylantirish uchun ishlatiladi arrayni modify qilmaydi uning 1 ta parametri bor necha marta  childdan parentga chiqarishni belgilaydi parametrsiz bersak 1 marta deb tushunadi

// let multiDimArr = [1, 2, [7, 8, 9], 6, 0, 8];
// console.log(multiDimArr[2][2]);
// console.log(multiDimArr.flat(Infinity)); //endi array elementlari 6 ta emas 8 ta child array ochilgani uchun 2 ta  yangi value qo'shildi
// console.log(multiDimArr.flat()); //1 marta child-parent chiqardi

//new Set() - unique valuelar yasaydigan object turi hisoblanadi o'xshash valuelar yozilmaydi va alohida array yasaladi
//Set()  constructor sifatida ishlatilmasa TypeError beradi ya.ni uni faqat new Set() ko'rinishida e'lon qilib yasash mumkin
//Setga yaqin usulda same valueni sort qilish
// let n = [2, 2, 3, 3, 4, 5, 8, 9, 9];

// let res = n.filter((val, ind, arr) => arr.indexOf(val) === ind);
// console.log(res);
// let x = new Set(n);
// console.log(x);

// //new Map() key-values chainga asoslanib objeect key va valuelarini yangi arrayda saqlaydi  object holatidagi ma'lumotlarni object.entries usuli bilan Mapga joylashtirish mumkin
// let obj = { a: 1, c: 2, v: 4 },
//   objAr = Object.entries(obj);
// console.log();
// let v = new Map(Object.entries(obj));
// console.log(v);
// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);
// console.log(map1);

//from() -  arrayga aylantirish uchun ishlatiladi odatda stringni aylantirish uchun ishlatiladi.2 ta parametri bor 1- parametr arrayga aylanishi kerak bo'lgan qiymat yoki value 2-prametr esa shu array ustida ishlaydigan  callbackfn.callbackfn parametrlari ham yuqoridagilar kabi from() mapda ishlatsa bo'ladi u yangi array set qiladi

// let newfrom = "webbrain";
// let newFrom2 = Array.from(newfrom);
// console.log(newFrom2);
// console.log(Array.from(newfrom, (v, i, a) => v + i));
