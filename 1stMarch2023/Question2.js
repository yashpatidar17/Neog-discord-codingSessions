// Write a arrow function which takes an object and prints the particular sentence
// My name is Ankit Singhania. I scored 99 in Math and 96 in Computer.

const obj ={
    name: 'Ankit Singhania',
    school: {
        board:['ISC'],
        marks: [{
            subject: 'Math',
            percent: 99
        },
        {
            subject: 'Computer',
            percent: 96
        }]
    }
}

const printFun = obj =>{
    const {name, school:{marks:[{subject,percent},{subject:sub,percent:per}]}} = obj;
    return per;
}


console.log(printFun(obj));