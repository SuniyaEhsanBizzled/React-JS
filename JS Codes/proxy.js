let Example={
    use:"none",
    purpose:"to name",
    age:33
}

// let Handler={
//     set: function(obj,key,value){
//         obj[key]=value;
//         return;
//     }
// }

// const Eg2=new Proxy(Example,Handler)
// Eg2.author="Suniya"
// console.log(Eg2)

const myFunction = () => {
    console.log("execute this function")
};

const handler = {
    set: function (target, prop, value) {
        if (prop === 'name' && value === 'Jack') {
            // calling another function
            myFunction();
        }
        else {
            console.log('Can only access name property');
        }
    }
};

const proxy = new Proxy(Example, handler);

proxy.name = 'Jack'; // execute this function
proxy.age = 33; // Can only access name property