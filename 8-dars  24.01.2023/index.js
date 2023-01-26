//8-lesson
//Questions
// Ehat is "this" keyword ?
//this keywordi o'zi turgan objectga tebg bo'lib target qiladi
//Destructure
// let name = "webbrain";
// let obj = { name: "test", child: { name: "name" } };
// let {
//   name: newname,
//   child: { name: oldname },
// } = obj;
// console.log(newname);
// console.log(oldname);

//Numbers
//Numbers type sifatida JavaScriptda sonlarni ifodalydigan data type dir. Sonlarni Decimal  ya'ni 10 likda ifodalaymiz ammo hisoblashlar ifodalarda boshqa sanoq sistemelarida ha hisoblashimiz mumkin.Xususan binary hexadecimal  yoki octalda. Numbersning o'z metodlari va librarylari bor.
//Integer - butun son
// let num = 45;
//yuqoridagi ko'rinishda butun holdagi son Integer deyiladi
//Katta butun sonlarni yozishda Readabilityni hisobga olib underscore dan foydalanamiz
// let num1 = 1_000_000;
// console.log(num1);
//lekin yanada sonlar kattalashsa unda e  belgisidan foydalanib ketamiz

// let num2 = 1e5;
//let num3 =1e-5
// console.log(num2);
// console.log(num3);
//e dan keyin aniq darajani yozishimiz kerak bo'lmasa SyntaxError ya'ni e bilan noto'g'ri syntaxda ishlayotgan bo'lamiz

// console.log(num2);
//Float - kasr son
// let num3 = 5.12;
// console.log(num3);
// let num4=5.12.23
// console.log(num4);// Unexpected number
// kasr sonlarni 1 ta nuqta bilan yozish kerak 2 nuqtali holat mavjud emas
// let num = 1e6 + 12;
// console.log(num);
// //Ammo e ning limiti bor u 500 ga teng
// let num2 = 2e500;
// console.log(num2); //Infinity
// //JSda floatlar ustida quyodagi amallarni ko'rib chiqamiz
// console.log(0.1 + 0.2 === 0.3);
// // bu yerda 0.1 soni 1 ni 10 ga bo'lganda chiqadi va uning oxirgi soni cheksiz davom etmayid yoki 1 ga teng bo'ladi  0.3 da u oirgi soni 4 ya'ni biz 0.3 va 0.3000004 ni solishtiryapmiz desak bo'ladi
// console.log(1 / 3);
// console.log(0.1 + 0.2);

// //toFixed - berilgan limitgacha butundan keyingi sonlarni chiqarish

// console.log(Number(500).toFixed(3)); //500.000

// //berilgan Stringni number typega almashtirish
// //+
// let num7 = +"1000";
// console.log(typeof num7); //number

// //Number()
// let num8 = "4000";
// console.log(typeof Number(num8)); //number

//parseInt - ifodada integer borligini tekshirish yoki tahlil qilish

// let num = "48+52";
// console.log(parseInt(num));
// //parseFloat - ifodada float borligini tekshirish
// let num2 = "0.7+salom+0.6";
// console.log(parseFloat(num2));

// // ular ko'rgan 1 fractionini oladi

// //eval()- ifoda qiymatini olamiz
// let num3 = "78+98.12";
// console.log(Number(eval(num3)));

// //NaN - not a number
// //string-> number convert holatda hatolik ketsa yoki value type not number bo'lsa output da NaN chiqadi
// let num9 = "1_000";
// console.log(+num9 + 12); //NaN

//Number Systems - 2lik 10 lik yoki 8 lik deganda sanashda nechta raqam ishlatishimiz tushuniladi,masalan 2 likda faqat 0 va 1 10 likda 0 dan 9 gacha sonlar tushuniladi

//Number --> String - e'lon qilingan Number type ham aslida object bo'ladi uning ichida prototype toString metodidan foydalanib numberni stringga aylantiramiz
// let num4 = 5;
// console.log(typeof num4.toString());
// //toString parametres
// //agar parametr bersak biz bergan parametrga asosan sanoq sistemani o'zgartirib beradi
// let num5 = num4.toString(2); //Decimal-->Binary
// console.log(num5);
// console.log(num4.toString(2));
// console.log(parseInt(num5, 2)); //Binary-->Decimal
// //isNaN() - bu method parametrning NaN emasligini check qilib beradi
// console.log(isNaN(+num5));
// //Object.is()-- 2 ta parametrning teng yoki teng emasligini tekshirib beradi
// let numb = 456,
//   strin = "456";
// console.log(Object.is(numb, strin));
// //toPrecision - berilgan valueni aniqlashtirshga yordam beradigan method ya'ni butunlari ko'p sonlarni trim qiladi va berilgan parametrgacha somlarni print qiladi
// console.log(num4.toPrecision(3));
// //to Precision 0larni ignore qiladi
// let numbe = 0.00015;
// console.log(numbe.toPrecision(1));

//9_999_999_999_999_999 = 10000000000000000
// console.log(9_999_999_999_999_999);

//Math library - JSda build library hisoblanadi ba Matematik  funksiyalarni o'z ichiga oladi

// let num = Math.PI; //pi sonini ifodalash uchun undan tashqari e sonini ham ifodalash mumkin
// console.log(num.toPrecision(25));

//abs-modullash
let num = 89562.4562,
  num1 = -56.98;
console.log(Math.abs(num1));

//Rounding methods - yaxlitlash amallari turli usulda maqsadga qarab yaxlitlash mumkin

//round - butundan keyingi son 5 dan kichik bo'lsa u olib tashlanadi
console.log(Math.round(num));
//floor- roundddan farqli butundan keyin 5dan katta bo'lsa ham yaxlitlaydi
console.log(Math.floor(num));
console.log(Math.floor(7.95));
//ceil - butundan keyin qanday son bo'lishiga qaramasdan butunga 1 qo'shadi
console.log(Math.ceil(num));
//trunc - kesish butundan keyingi sonlarni kesib bera oladi minus sonlarda floor bilan farq qiladi
console.log(Math.trunc(num1));

//random - tasodifiy sonni beruvchi qiymat function parametr qabul qilmaydi
console.log(Math.trunc(Math.random() * 1000));

//min- berilgan parametrlar orasidan minimal valueni topib beradi
console.log(Math.min(2, 5, 7, 3, 1));
//max- berilgan parametrlar orasidan maximalini topib beradi
console.log(Math.max(2, 5, 7, 3, 1));

//pow- darajaga ko'tarish
console.log(Math.pow(num1, 3));

//sqrt- ildiz osti amali
console.log(Math.sqrt(num));

//cbrt - cub root dan chiqarish
console.log(Math.cbrt(num));

//sign- ishora topuvchi + === 1 - === -1 0 === 0
console.log(Math.sign(num)); //1

//hypot-hypotenuse yoki uchburchak gipotenuzasini aniqlashdan oilingan bo'lib u n tagacha valueni ham hisoblay oladi
console.log(Math.hypot(num, num1));

//qolgan funksiyalar triganometrik holatlar bo'lib sin.cos,tan,atan,asin,acos va logarifm funksiyalari log,log10 lar mavjud
//imul- berilgan 1 valueni 2 parmaterdagi sanoq sistemaga o'tkazib bera oladi
console.log(Math.imul(num, 7));

//Reference Math library - Math library kutubxonasi decimal sonlar ustida ishlaydi ammo binaryda vazifalar qo'yilsa Math dagi methodlar sekin ishlashi mumkin yaxshi variant Bitwise operatorlardan foydalanishdir
