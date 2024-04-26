// async function a() {
//     await setTimeout(() => {
//       console.log("Welcome Back!")
//     }, 2000)
// }
// a()
//   console.log("Hello")



const getData = async () => {
  let y = await "Hello World";
  console.log(y);
}

console.log(1);
getData();
console.log(2);
