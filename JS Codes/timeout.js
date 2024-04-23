function Foo(){
    // for (let i=0;i<5;i++){
    //     setTimeout(function(){
    //         console.log(i+1)
    //     },(i+1)*1000)
    // }
    for (var i=1;i<=5;i++){   //CB function keeps ref to i, i updates till it becomes 6, meanwhile CB funcs are waiting for timers to expire,
     //sol is to use let i, bec let is block-scoped, so ev CB func keeps ref to diff i
     // 2nd sol is to unclose func inside a new func/closure, ev time that func is called, a new ref to i is made
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
    console.log("jdhskhk")
}
Foo();