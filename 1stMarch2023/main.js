// const obj1 = {
//     a: 1,
//     b: {
//         c:{
//             d:2,
//         }
//     },
//     e:3
// }

// const {a,b:{c:{d}},e} = obj1;

// console.log(d);

//-------------------------------------------------------------------------

// Write a arrow function which takes an object and prints the particular sentence
// My name is Ankit Singhania. I scored 99 in Math and 96 in Computer.

// const obj ={
//     name: 'Ankit Singhania',
//     school: {
//         board:['ISC'],
//         marks: [{
//             subject: 'Math',
//             percent: 99
//         },
//         {
//             subject: 'Computer',
//             percent: 96
//         }]
//     }
// }

// const printFun = obj =>{
//     const {name, school:{marks:[{subject,percent},percen]}} = obj;
//     return percen;
// }


// console.log(printFun(obj));

//-------------------------------------------------------------------------
// Write a function to calculate sum of n elements where n >=2



// hint: rest operator

// const sumOfN = (...args) => {
//     let sum = 0;
//     for(let i=0;i<args.length;i++){
//         sum = sum + args[i];
//     }
//     return sum;
// }

// console.log(sumOfN(1,2,3)) // output: 6
// console.log(sumOfN(1,2,3,4,5,6)) // output: 10

//-------------------------------------------------------------------------

// write a function which will take an array of "n" numbers as an argument and will
// return the object containing maximum number, minimum number and avg of all numbers in array.

// const GiveObj = (nums)=>{
//     let sum=0;
//     let max=0;
//     let avg;
//     let min = nums[0];
//     for(let i = 0;i<nums.length;i++){
//         sum = sum + nums[i];
//         if(nums[i]>max){
//             max = nums[i];
//         }

//         if(nums[i]<min){
//             min = nums[i];
//         }
//         avg = sum/nums.length;
//     }
    
//     const obj = {Max:max,Min:min,Avg:avg};
//     return obj;
// }

// // sampleOutput -
//  console.log(GiveObj([1,2,3,5,4,])) // output : {max: 5, min: 1, avg: 3}


//-------------------------------------------------------------------------
// const getArea = (a,b) =>{
//     if(b === undefined){
//         return a*a;
//     }else{
//         return a*b;
//     }
// }

// console.log(getArea(4)) // output : 16
// console.log(getArea(4,8)) // output : 32

//-------------------------------------------------------------------------

// const factorial = (...nums) => {
//    let total =0;
//    for(let i = 0; i < nums.length; i++){
//     let fact = 
//    }
//    return total;
// }

// console.log(factorial(1,2,3,4));