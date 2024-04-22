 function Once(x){
    return function(y){
        return function(z){
            console.log(x*y*z);
        }
    }
}
Once(2)(3)(4);

let c1=Once(3)
let c2=c1(4)
c2(10)


function A(a){
    //console.log(b)
    return function B(b){
        return (c)=>{
            return a-b-c;
        }
    }
    console.log(b) //cant reach due to return sttmnt
}
console.log(A(20)(20)(30));

















