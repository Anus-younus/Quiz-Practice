const arr = [1, 2, 3, 4, 4, 3, 2, 1]

for(let i = 0; i < arr.length; i++){
    // console.log(i);
}

let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);
    i++;
}

do {
    // console.log(i);
} while (i <= 3);

arr.forEach((item) => {
    // console.log(item);
})

arr.map((item) => {
    // console.log(item);
})

const newArr = arr.filter((item) => item%2 !== 0)

// console.log(newArr);

const reduceArr = arr.reduce((item) => item % 2 !== 1)

// console.log(reduceArr);

const everyArr = arr.every((item) => item % 2 !== 1)

// console.log(everyArr);

const someArr = arr.some((item) => item % 2 !== 1)

console.log(someArr);
