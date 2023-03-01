const obj1 = {
    a: 1,
    b: {
        c:{
            d:2,
        }
    },
    e:3
}

const {a,b:{c:{d}},e} = obj1;

console.log(d);