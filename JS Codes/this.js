////// this
const obj={
    name:'OBJ',
    versions:[1,2,3],
    showVersions(){
        this.versions.forEach(function(v){  //not member func of object, anonymous callback function
           console.log(this,v);  
        }, this)
    },
    use(){
        console.log(this);
    }
};

obj.showVersions();
//obj.use();
obj.break=function(){
    console.log(this);
}
//obj.break();
