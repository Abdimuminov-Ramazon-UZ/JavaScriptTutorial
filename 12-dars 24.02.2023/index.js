//12-lesson
//CRUD
//Read - ma'lumotlarning  array-object ko'rinishidagi qismlarini o'qish uchun ishlatiladigan array metodlari usuli
//buning uchun sort metodidan function sifatida chaqiramiz bunda dataga o'zgartirish kiritilmay biz xohlagan ko'rinishda tartibsiz holtni tartiblab chaqiramiz
let cars = [
  { id: 1, year: 1900, name: "volvo" },
  { id: 2, year: 1980, name: "bmw" },
  { id: 3, year: 1850, name: "citrocv" },
  { id: 4, year: 1752, name: "chevro" },
  { id: 5, year: 1400, name: "lada" },
  { id: 6, year: 2000, name: "rolls roys" },
  { id: 7, year: 1980, name: "tesla" },
];

// let sortByYear = () => {
//   let res = cars.sort((a, b) => a.year - b.year);
//   return res;
// }; //bu yerda ma'lumot number typeda bo'lgani uchun  sort ishlaydi ascendingda
// // sortByYear();
// // console.log(sortByYear());
// console.log(cars);
// //uni string uchun ishlatamiz quyidagi ko'rinishda
// let sortByName = () => {
//   let res = cars.sort((a, b) =>
//     a.name.toLowerCase().localeCompare(b.name.toLowerCase())
//   );
//   res = cars;
// }; //localecompare metodidan foydalanib ishlasak bo'ladi
// // sortByName();
// console.log(cars);

// let sortByOnly = (key) => {
//   let res = cars.filter((value) => value.name.toLowerCase().includes(key.toLowerCase()));
//   cars = res;
// };
// sortByOnly("bmw");
// console.log(cars);//includes bilan ishlaganda ma'lumotlar o'xshashligiga e'tibor berish kerak

//Delete - ma'lumotni o'chirib yuborishni metodlar orqali bajaramiz
// let deleteUser = (id) => {
//   let res = cars.filter((value) => value.id !== id);
//   cars = res;
// };

// deleteUser(2); //2 id ga tegishli bo'lgan ma'lumot o'chirildi
// console.log(cars);

// //Create - ma'lumot qo'shish
// const addUser = (user) => {
//   cars = [...cars, { ...user, id: cars.length + 2 }];
// };
// addUser({ name: "webbrain", year: 2019 });
// console.log(cars);

//Update - ma'lumotlarni yangilash
// const updateUser = (data) => {
//   let res = cars.map((value) =>
//     value.id === data.id ? { ...value, [data.type]: data.value } : value
//   );
//   cars = res;
// };
// updateUser({ id: 1, type: "year", value: 2023 });
// console.log(cars);

//Multitasking functions - readda yoki deleteda umumiy yoki bir nechta vazifalkarni bajaruvchi funksiya
let getFilterByProp = ({ key, value }) => {
  let res = cars.filter((values) =>
    `${values[key]}`.toLowerCase().includes(`${value}`.toLowerCase())
  );
  cars = res;
};
// getFilterByProp({ value: "tesla", key: "name" });
getFilterByProp({ value: 1980, key: "year" });

console.log(cars);
