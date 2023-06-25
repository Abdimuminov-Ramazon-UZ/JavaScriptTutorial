//Lesson 18
//setTimeout, setinterval

//setTimeout() - 3 qismdan iborat function, delay,argumentslardan argumentslar soni o;zgarishi mumkin lekin 1 parmaetr function 2 chisi delay 3 argumentlar bo'ladi

// setTimeout((a,b) => {
//   console.log(a+b);
// }, 2000,7,8);

//setTimeout delayda qancha vaqt berilgan bo'lsa shu vaqtdan keyin handlerni ishlatiadi yoki yurgizib yuboradi
//delay- kechikishda vaqt millisecondlarda beriladi

//settimeout uchun bajarilish tartibi
//single thread 1 vaqtda 1 ta amal bajaradi
// console.log(3);

// setTimeout(() => {
//   console.log(34);
// }, 2000); //sinxron bo'lmagani uchun kutish vaqti bo'lgani uchun settimeout web API da tartiblanib queu ga o'tib ketadi
// bajarilish tartibi call stackda  console.log3 1 chi  bo'lgani uchun web APIga ham 1 o'tadi single thread settimeoutni tekshirganda uning ishlash vaqti keyinroq ekanini ko'radi va keyingi amalga o'tib ketadi keyingi amal conloe.log4 bajarilishidan keyinga settimeoutni qo'yadi
//outputda shu tartibda chiqadi
//buning sababi settimeoutning asinxron ekanligidir eng e'tiborlisi 2 ta console bajarib bo'lingandan so'ng settimeout vaqt hisoblashni boishlaydi ya'ni 2 ta consoleni
// console.log(4);

// console.log(1); //first
// setTimeout(() => {
//   console.log(4);
// }, 1000); //fourth
// setTimeout(() => {
//   console.log(3);
// }, 1000); //third

// console.log(2); //second
// setTimeout(() => {
//   console.log(5);
// }, 1000); //fifth
//asinxron bo'lmagan settimoutlarning chiqish tartibi ularning delay time bilan farqalanib chiqadi agar 2 ta 1xil bo'ls 1 chi turgani avval chiqadi
//for loop berilgan vaziyatda ham avval for loopi bajarilib keyin setttimpoutga o'tib ketadi

// settimeoutga parametr berish
// setTimeout(
//   (a, b) => {
//     console.log(a + b);
//   },
//   1000,
//   8,
//   9
// );

//setInterval - garabage collectionga o'zi tushmaydi va settimoutga o'xshab delay timedan keyin to'xtamaydi aksincha har delay timeda ishlayveradi

let fixLimit = setInterval(() => {
  console.log(2);
}, 1000);

//uni to'xtatish uchun clearIntervaldan foydalanamiz

clearInterval(fixLimit); //intervalni yurg'izmaydi to'xtamaydi

//settimeout va setinterval heapdan space egallagandan keyin agar unga nom biriktirb to'xtatilmasa unda automatik garbage collectionga tushmaydi

let fixlimitForSettime = setTimeout(
  (a, b) => {
    console.log(a + b);
  },
  1000,
  7,
  8
);

clearTimeout(fixlimitForSettime); //settimeot ham to'xtadi
