function Hi(){
    var x=23
    function Di()
    {
      //  console.log(x,89)
        var y=98
        function Wi(){
            console.log(x)
        }
         Wi();
    }
    //x=9876
   return Di;
}

x=34
console.log(x)
var v=Hi();
v();