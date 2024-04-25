function foo(){
    throw new Error ("Oops")
}

function bar(){
    foo();
}

function baz(){
    baz();
}

baz();