//SPread Operator
let ob={
    name:"Suniya",
    age:423,
}
let ob2={...ob,job:"ASE"}
console.log(ob2)

const numbers = [1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;
console.log(one,rest)