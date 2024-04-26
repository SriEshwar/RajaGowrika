console.log("hello");

// for loop:

// for (let i = 1; i <= 5; i++) {
//     console.log("Hello");
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

//while loops:

let k = 0;
while (k < 10) {
    console.log(k);
    k++;
}

//do while loop:

let j = 0;
do {
    console.log(j);
    
    j++;
} while (j == 0)

//for. of loop:
let arr = ['apple', 'orange', 'grapes', 'starberry', 'pineapple'];
console.log(arr);
// iterate throught for loop:
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase());
}

//iterating through for..of loop:
for (let fruit of arr) {
    console.log(fruit);
}

while (true) {
    let num = Number(prompt("Enter a number "));
    if (!isNaN(num)) {
        break;
    }

}

let item = {
    iname: 'phone',
    quantity: 1,
    price: 23900
}

for (let key in item) {
    console.log(item[key]);
}
