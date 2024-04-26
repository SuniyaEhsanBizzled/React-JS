const Foo= (callback) =>{
    setTimeout(()=>{
        let sum = 0;
        let array=[2,3,4,5]
        for(let i of array) {
            sum += i;
        }
        console.log(sum);
    },3000)
}

Foo();