//Leson 29
//Curry functions
//darslar ketma ketligi javascriptInfo kitobi asosida davom etayotganligi sababli curry function mavzusi Advanced function mavzularini yopadi

function getData(a) {
  return (b) => {
    return (c) => {
      console.log(a + b + c);
    };
  };
}

getData(5);
console.log(getData(6));

//function nimaga return qilsa shunga qiymati teng bo'ladi
//functionlarning qolganinini ham chaqirish uchun
console.log(getData()()()); //qo'shimcha invokelar berishimiz kerak ya'ni getData functioni qolgan functionlarni ham ko'tarib yuribdi desak bo'ladi

//curry originall jihatdan lambda matematik hisoblashdan kelib chiqqan matematiuk amallarning ketma ket bajaralishini amalga oshirish uchun
// function calculus(a) {
//   a = a * a;
//   return (b) => {
//     b = b * a;
//     return (c) => {
//       return (c = c - b);
//     };
//   };
// }
// console.log(calculus(5)(6)(7));
//curry function yana o'xshash o'zgaruvchilarni jo'natib yubormaslik uchun kerak
//kichik functionlarni bo'lib ishlatish uchun qulay

//curry function bir vaqtni o'zida multiple argumentlarni qabul qiluvchi function va function qachonki boshqa functiuonga return qilgan

const operations = (type) => {
  return (a) => (b) => (c) => {
    switch (type) {
      case "multiply":
        return a * b * c;
        break;
      case "divide":
        return a / b / c;
        break;
      case "add":
        return a + b + c;
        break;
    }
  };
};

const math = operations("multiply");
console.log(math(5)(4)(3));
