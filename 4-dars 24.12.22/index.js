//for
//tub sonlar
let i = 5,
    r = i % 2;

// for (; i < 15; i += 2) {
//     console.log(i);
// }

if (i == 0) {
    for (; i < 15; i += 2) {
        console.log(i);
    }
} else if (i == 1) {
    let a = i - 1;
    for (a; a < 15; a += 2) {
        console.log(a);
    }
} else if (r == 0) {
    for (; i < 15; i += 2) {
        console.log(i);
    }
} else if (r == 1) {
    let a = i + 1;

    for (; a < 15; a += 2) {
        console.log(a);
    }
}