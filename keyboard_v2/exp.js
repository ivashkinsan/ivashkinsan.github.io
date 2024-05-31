let object1 = {
    name: 100,
    max: 2,
    lev: 3,
    dima: 4
}
// Object.entries(nameObj).forEach(([key, value]) => {
// console.log(`${key} = ${value}`); 
// });

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  const result = Object.groupBy(inventory, ({type}) => type);
  console.log(result);

  function myCallback({ quantity }) {
    return quantity > 5 ? "ok" : "restock";
  }
  
  const result2 = Object.groupBy(inventory, myCallback);
  console.log(result2);