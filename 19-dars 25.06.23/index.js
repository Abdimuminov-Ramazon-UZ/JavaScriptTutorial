//Lesson 19
//function call,apply,bind

//function call

//thisning yo'qolishi qachonki this chiqishi kerak bo'lgan scope mavjud bo'lmasa ya'ni return non primitive bo'lib qolgandan keyin

let user = {
  name: "webbrain",
  lastname: "Academy",
  title: "IT Center",
  getFull() {
    console.log(`${this.name} ${this.lastname}`);
  },
};
// user.getFull();

let user2 = {
  name: "Digital",
  lastname: "One",
  title: "It Center",
};

let users = [
  {
    name: "webbrain",
    lastname: "Academy",
    title: "IT Center",
  },
  {
    name: "Digital",
    lastname: "One",
    title: "It Center",
  },
];
function getFull() {
  console.log(`${this.name} ${this.lastname}`, getFull());
}
// user2.getFull();//bunda user2 uchun function ishlamaydi
// getFull.call(user); //bunda functionning native metodlari ya'ni call ni chaqiramiz
//call(thisArgN,...arg1,arg2) - berilgan argumentlar orqali this uchun scope beradi
// getFull.call({ name: "faza", lastname: "bir" });
//shu yuqorida berilgan scope thisga tegishliu bo'ladi

//ko'proq ma'lumot berilgan to'plam uchun
// for (let val of users) {
//   getFull.call(val);
// }

//call ishlatilish maqsadi functionning dynamik yozilishi uchun osonlashgan yo'ldir
//callga this orqali murojat qilish orqali contextni nomidan foydalanmay turib undan foydalanish mnumkin
function k(a) {
  return console.log(a);
}
a = 2;
k.call(this, a); //=k(a) ga teng nazariy olib qaralsa call ga brinchi context sifatida  berilgan qiymat this bo'lsa
//this shu functionnimng o'ziga osiladi va shuni qaytaradi
//apply() - call ga o'xshaydi ammo argumentlarda farq qiladi
// getFull.apply(user);

//callda parametrlar berish
// function getHalf(a, b) {
//   console.log(`${this.name}`, a, b);
// }
// getHalf.call(user, "Dilijon", "Umbrella");

//callda funjction parametrlariga qiymat berib keta olamiz ammo agar parametrlar sonidan ortsa udefined beradi va function parametrlari 2 parametrdan foydalanib beradi

//applyda  parametrlar uchun array typedan foydalanamiz parametrlar calldan farqli arrayning o indexidan boshlab hisoblanadi va array tashqarisida verguldan keyingi parametrlar qo'llanmaydi
// getHalf.apply(this, ["Fortepiano", "Bethoven"]);
//thisArg ga this yozsak unda this yana undefioned bo'lib qoladi

//bind() - function bo'lib ishlaydi boshqa functionning copysini beradi result qaytarmaydi
// getFull.bind(user); //result bermaydi
// getFull.bind(user)(); //natija berish uchun invoke qilish
// let m = getFull.bind(user); //alohida funksiyaga olindi
// m(); //alohida qilib chaqirilganda result beradi va ma'lum qiymatga ega
// let x = m();
// console.log(x); //undefined ma'lum qiymatga ega emas

for (let key in user) {
  if (typeof user[key] == "function") {
    user[key] = user[key].bind(user);
  }
}
console.log(user.getFull());
