//15- lesson
//Recursion function
let res = 0;
let sum = (n) => {
  console.log(n);
  if (n === 1) {
    return (res += 1);
  } else {
    res += n;
    return sum(n - 1);
  }
};
console.log(sum(4)); //1+2+3+4

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sities: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    dev: [
      { name: "Case", salary: 2000 },
      { name: "Tina", salary: 1000 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

const getCalc = (company) => {
  if (Array.isArray(company)) {
    //case 1 typeni tekshirish qachonki agar array type chiqsa ular ichidagi ma'lumoitlardan yig'indi chiqarish
    return company.reduce((prev, current) => prev + current.salary, 0);
  } else {
    //case 2 agar array tipida bo'lmasa mavjud obektni elementlarga bo'lib olish  va yana qayta tekshirish
    let sum = 0;
    for (let subdep of Object.values(company)) {
      sum += getCalc(subdep);
    }
    return sum;
  }
};
let x = getCalc(company);
console.log(x);
