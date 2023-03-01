// Write a function to calculate sum of n elements where n >=2

// console.log(sumOfN(1,2,3)) // output: 6
// console.log(sumOfN(1,2,3,4)) // output: 10

// hint: rest operator

const sumOfN = (...args) => {
    let sum = 0;
    for(let i=0;i<args.length;i++){
        sum = sum + args[i];
    }
    return sum;
}

console.log(sumOfN(1,2,3)) // output: 6
console.log(sumOfN(1,2,3,4)) // output: 10