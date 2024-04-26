function *Gen(){
    yield 1
    yield 2
    yield 3
}

const G1=Gen()
console.log(G1.next())
const G2=Gen()
console.log(G2.next())

function* nextNatural() { 
    let naturalNumber = 1; 
  
    // Infinite loop 
    while (true) { 
        yield naturalNumber++; 
    } 
} 
  
let gen = nextNatural(); 
for (let i = 0; i < 10; i++) { 
  
    // Generating Next Number 
    console.log(gen.next().value); 
}
