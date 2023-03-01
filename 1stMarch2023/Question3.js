// write a function which will take an array of "n" numbers as an argument and will
// return the object containing maximum number, minimum number and avg of all numbers in array.

const GiveObj = (nums)=>{
    let sum=0;
    let max=0;
    let avg;
    let min = nums[0];
    for(let i = 0;i<nums.length;i++){
        sum = sum + nums[i];
        if(nums[i]>max){
            max = nums[i];
        }

        if(nums[i]<min){
            min = nums[i];
        }
        avg = sum/nums.length;
    }
    
    const obj = {Max:max,Min:min,Avg:avg};
    return obj;
}

 console.log(GiveObj([1,2,3,5,4,])) // output : {max: 5, min: 1, avg: 3}