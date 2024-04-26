// let ob={
//     name:"Suniya",
//     age:423,
// }
// let ob2=ob
// ob2.age=765
// console.log(ob.age,ob2.age)

const a = {
    name:"Sunny",
    foods: {
      dinner: 'Pasta'
    }
  }
  //let b = {...a}
  //let b = {...a, foods: {...a.foods}}
  let b = JSON.parse(JSON.stringify(a))
  b.foods.dinner = 'Soup' // changes for both objects
    console.log(b.foods.dinner,b.name) 
  console.log(a.foods.dinner) 