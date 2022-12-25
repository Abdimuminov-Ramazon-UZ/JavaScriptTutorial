//Switch case
// let LoginA = "Admin";
// switch (LoginA) {
//     case "Admin":
//         console.log("Welcome");
//         break;
//     case "Ghost":
//         console.log("Your password !!");
//         break;
//     default:
//         console.log("Please checked web addres");
// }

//if break isn't at switch case don't stop  code execution

//for loop basic
//for syntax for(start;false or true value;execution action)
//Doim chiqadigan qavatlar raqamini ketma ketligini chiqarish
// for (let j = 1; j <= 9; j = j + 1) {
//     console.log(`Your floor ${j}`);
// }
//for false or true values
// for (let k = 2; true; k = k + 5) {
//     console.log(k);
// } //Infinity  numbers printed
// for (let k = 2; false; k = k + 5) {
//     console.log(k);
// } // not worked
//first valuable not internal
// let f = 0;
// for (; f <= 11; f++) {
//     console.log(f);
// }

//diffierent var and let

// console.log(h);//undefined

// for (var h = 5; h > 0 && h < 8; h--) {
//     console.log(h);
// }
// console.log(h);//dedfined and equal to 0s

// for (let i = 3; i < 14; i += 3) {
//     console.log(i);
// }
// console.log(i); //ReferenceError: i is not defined

//break and continue in for loop
// let i = 3;
// for (; i < 14; ++i) {
//     console.log(i);
//     if (i === 10) break;
//     console.log(i);
// } //break stoped all codes
let i = 5;
// for (; i < 14; ++i) {
//     console.log(i);
//     if (i === 10) continue;
//     console.log(i);
// } //continue stopped this code

//LAbels
// outer: for (; i > 0 && i < 12; i--) {
//     inner: for (let j = 6; j > 2 && j < 15; j--) {
//         console.log(`J ${j}`);
//         if (i === 7) console.log(`J ${j}`);
//     }
//     console.log(`I ${i}`);
// } //Answer  without i j

//for
//tub sonlar
// let i = 5,
//     r = i % 2;

// for (; i < 15; i += 2) {
//     console.log(i);
// }

// if (i == 0) {
//     for (; i < 15; i += 2) {
//         console.log(i);
//     }
// } else if (i == 1) {
//     let a = i - 1;
//     for (a; a < 15; a += 2) {
//         console.log(a);
//     }
// } else if (r == 0) {
//     for (; i < 15; i += 2) {
//         console.log(i);
//     }
// } else if (r == 1) {
//     let a = i + 1;

//     for (; a < 15; a += 2) {
//         console.log(a);
//     }
// }