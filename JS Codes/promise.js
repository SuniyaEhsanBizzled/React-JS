// let prom=new Promise((resolve,reject)=>{
//     let p=1+1
//     if (p==2)
//     {
//         resolve(p);
//     }
//     else
//     {
//         reject(p);
//     }
// })
// prom.then((val)=>{
//     console.log(val*10)
// }).catch((val)=>{
//     console.log(val)
// })

const A=false
const B=true

let ans=new Promise((resolve,reject)=>{
    if (A){
        reject("doing a")
    }
    else if (B){
        resolve ()
    }
    else{
        resolve("Yes")
    }
})

ans.then((message)=>{
    console.log(message)
})
.then(()=>{
   console.log("uhiuhiuh")
})
.catch((message)=>{
    console.log(message)
})