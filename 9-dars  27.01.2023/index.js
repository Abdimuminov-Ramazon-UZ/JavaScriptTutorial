//9-lesson
//Strings
//String - Jsda data typelardan biri bo'lib apostrophe,quote,backtick orasiga yoziladi.String ham object hisoblanib o'z property va metodlariga ega
//Apostrophe
// let name = "webbrain"; //apostrophe bilan yozilsa doublega JS auto o'tkazadi
// let copy = "webbrain 'academy '"; //double ichida single apostrophe ishlatsa bo'ladi
// let nameC = `webbrain 'academy'`; //shuningdek backtick ichida ham odatda single orqali chegaralab double double orqali chegaralab esa  single orqali yozsa bo'ladi
// //bactick
// let nameF = `webbrain ${nameC}`; // String yoki template literaldan foydalanishda stringda foydalaniladi
// console.log(nameF);

//Escape sequences or backslash character
//Stringdan foydalanghanimizda satr tushirish yoki tab elementlaridan foydlanishimiz uchun 1 satrning o'zi kamlik qiladi buning uchun escape sequenses dan foydalanmiz
// let name = "webbrain \n academy";//\n - newline yoki yangi satrga tushirish
// console.log(name);
// let name = "webbrain \00 academy";// \0 - backslashdan keyingi ma'lumotlar  name variable ichida programda yozilgan bo'ladi lekin print da yoki descriptionda chiqmaydi
// console.log(name);
// let name = "webbrain \r academy";// \r - o'zidan oldingi stringni remove qilib yuboradi
// console.log(name);
// let name = "webbrain \t academy"; //\t- 1tab oralig'i yoki 8 t probel oralig'icha bo'sh joy tashlab bera oladi
// console.log(name);
// let name = "webbrain \\ academy";// \\ holatda \ ni o'zini print qilish uchun kerak bo'ldi
// console.log(name);
// let name = "webbrain     a\bbb a academy"; //\b - o'zidan oldingi 1 ta elementni o'chirib yuboradi
// console.log(name);

//Add String
//stringlarni qo'shishda + operatoridan foydalanib keta olamiz yoki template literal ham o'rinli include qilganimizda
// let name = "webbrain  academy",
//   name1 = `pro Frontend`;
// console.log(name + name1);
// //yoki
// let name2 = "this line is very long" + "but we ${name} write + operator ";
// console.log(name2);

//String constructor
// let jobs = new String("drivewr");

// console.log(jobs);
// console.log(typeof jobs); //object
// //agar new keywordisiz chaqirsak
// let name4 = String("compare");
// console.log(name4);
// // console.log(typeof name4); //type string bo'ladi
// // //string constructor symbol ko'rinishida yozilgan yoki umuman barcha ma'lumotlarni conversion qilishda  eng muqobil usuldir
// let id = Symbol("id"),
//   newS = String(id);

// console.log(id);
// console.log(newS);
// console.log(newS + jobs);

// //localecompare() metodi stringning 1 elementlaridan boshlab taqqoslashi lozim bo'lgan parametrga o'xshahsligini tekshiradi outputda 0 chiqsa qisman 1 exactly same -1 not same qiymatlarini chiqaradi
// console.log(jobs.localeCompare(newS)); //-1

// //constructor yordamida yozilgan stringni qiymatini olish uchun ya'ni objectdan chiqarish uchun valueof metodidan foydalaniladi agar constructorda new keywordi bo'lmasa oddiy stringholatida ishlaymiz ammo new keywordidan foydalanilgan bo'lsa valueof shart
// console.log(jobs.valueOf()); //drivewr

//Index of String
//String ham object hisoblanadi va indexlanadi
let name14 = "   Strinfg datatype   ";
// console.log(name[0]);
//Stringlar immutable ya'ni o'zgarmas hisoblanadi uni indekslash orqali numerable, called qilishimiz mumkin lekin rewrite qila olmaymiz
//String objectida indekslar bilan ishlash maqsadida 2 ta metho bor
//at()- indekslaydi []dan farqi postive va negative number index olishidir positiveda left->right ,negativeda right<-left yurib keladi
// console.log(name.at(1));
// //charAt() indekslashda atga o'xshaydi lekin faqat positiveda ishlaydi
// console.log(name.charAt(-1));

//Methods
//String metodlari stringni turli usulda tahlil qilish uchun ishlatiladi
//Sring.length - bu string objectida aslida property hisoblanadi
console.log(name14.length); //7 ya'ni string nechta belgidan iborat ekanligini hisoblab bera oladi

///toUpperCase()  - Stringni harflarini kattalashtirish
console.log(name14.toUpperCase()); //Stringdan boshqa typelar kelsa error beradi lekin string ichida 1 ta harf bo'lsa ham uni katta qilib beradi
console.log("1565u".toUpperCase()); //1565U

//toLowercase() - harflarni kichiklashtirb beradi
console.log(name14.toLowerCase()); //stringf

//toLocaleLowerCase(),toLocaleUpperCase()  -  murakkab tillarni kichiklashtiradi yoki kattalshtiradi parametr sifatida tillar en-Tr ko'rinishida beriladi
console.log(name14.toLocaleLowerCase("TR")); //hozir OS tanlagan til eng hisoblanadi bu metod uchun ham default qiymatdir

//indexOf() - stringning indexini olishimiz mumkin va 2 parametrni ular orasidan izlashimiz mumkin uning 2 ta parametri bor

console.log(name14.indexOf("nf")); //4
console.log(name14.indexOf("fg", 3)); //metod faqat 3 dan boshlab tekshiradi

//lastIndexOf() - IndexOf() ga o'xshaydi lekin oxiridan boshlab sanaydi sanoq left->right ketadi 2 metod ham 2 parametr sifatida positive numbersni oladi

console.log(name14.lastIndexOf("tr", 2)); //ya'ni 1 indexdan bohlangan deydi

//includes() - string ichida biz izlayotgan ifoda bormi yo'q ekanligini tekshrib beradi boolean qiymat qaytaradi
console.log(name14.includes("fg")); //true

//startswith() - qaysi so'z bilan boshlanganlini tekshiradi
console.log(name14.startsWith("st")); //false
//endswith() - bu method esa qaysi so'z bilan tugaganligini tekshirib beradi
console.log(name14.endsWith("pe"));

//padStart() - 2 ta parametr qabul qiladi 1 parametr index raqami 2 si shu indexdan keyingi almashtiriladigan belgi bo'ladi
// console.log(name14.padStart(22, "...")); //22 belgigacha yoki string harflari 22 ta bo'lguncha nechta ... larni qo'shib beradi
//padEnd() - agar slice metodidan foydlanilmay lengthdan kam index kiritilsa ishlamaydi agar indexdan katta kiritilgan bo'lsa toki 1 parametr index qiymatigacha  2 parametrni yozadi.metod negative oladi va 2 parametr teskari yurib keladi agar -2 kiritsak oxiridan 2 chi indexdagi  harfgacha kesadi
console.log(name14.padEnd(22, "..."));

//slice() - kesish amali 2 ta parametr oladi va 1 parametr qiymatudagi indexdan w sigacha kesadi,agr 2 parametr berilmasa shu indexdan boshlab hammasini kesib oladi
console.log(name14.slice(0, 7));
console.log(name14.slice(5));
console.log(name14.slice(2, -2));

//substring() - slice bilan o'xshaydi positive number parametr sifatiga qabul qilmaydi,swipe metodi  bor ya'ni parametrlarni kattasidan kichigiga  almashtira oladi
console.log(name14.substring(2, 5));

//trim()  - bo'sh joylarni kesib olish
console.log(name14.trim());
//trimStart() - string boshlanishidan boshlab bosh joylari kesib oladi
console.log(name14.trimStart());
//trimEnd() - string tugashidagi bosh joylari kesib oladi
console.log(name14.trimEnd());

//split() - stringi array holatiga o'tkazadi va 1 ta parametr qabul qiladi parametr bermay ishlab ko'rsak
console.log(name14.split("")); //Har bir elementni alohidadan array elemnti qilib beradi
//parametr bersak shu paramterni tashlab shu belgi uchraguncha ma'lumotlarni array elementlari yasaydi
console.log(name14.split("t"));

//concat() - stringga  biron so'z qo'shish uchun ishlatiladi.istalgancha qo'shish mumkin
console.log(name14.concat("mode", "number"));

//replace() - 1 parametrdagi qiymatni 2 parametrdagiga  almashtirish  1 chi duch kelganga almashtirib beradi
console.log(name14.replace("Str", "number"));
//replaceAll() - stringdagi hammasini almashtiradi

//Looplar
//Stringda for( char of str) yoki for of loopidan foydalanib looplar amalga oshiriladi
for (i of name14) {
  console.log(i);
} //object yoki oddiy loopdan farqli o'laroq i stringdagi elementga teng bo'ladi
