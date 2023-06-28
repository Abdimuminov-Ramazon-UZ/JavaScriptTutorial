//Lesson 20

//DDOS attackdan himoyalanish functionlarni getCached qilish

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

function geCached(func) {
  //func getData() ga teng
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let res = func.call(this); //call orqali usr obektiga qayta getDatani o'rnatish orqali thisga scope berildi
    cache.set(x, res);
  };
}
getData = geCached(getData);
// getData();
//mapning xususiyatidan foydalanib functionlar orqali DDOS atackdan himoya qilishimiz mumkin
//hozir getCached functioin orqali himoya qilindi ya'ni ko'plab requestlarda 1 marta olingan ma'lumotdan qayta foydalanadi

//objectlarga qo'llash

let usr = {
  name: "webbrain",
  getData() {
    return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(
      (res) => res.json()
    );
  },
};
usr.getData = geCached(usr.getData); //bunday o'zgartirish ichkli thisning scopeni o'zgartirib yuboradi ya'ni u joriy obektdan chgiqb ketadi va windowga osilib qoladi

//o'rganilgan narsalar agar function nomini bracketsiz chaqirsak unda uning qiymatini olgan bo'lamiz
//this ning scopelari 1 marta tashqaridagi bracketda

//DDOS attak
function attackDDOS() {
  setInterval(function () {
    return fetch("url").then((res) => res.json);
  }, 0);
}
