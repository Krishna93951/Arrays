exports.h=function h()
{
  //findIndex
function equals(e){
  return e == 5
}
var a=[1,2,3,4]
console.log(a.findIndex(equals))

//findIndex using arrow
const fruits = ["apple", "banana", "strawberry", "mango", "grapes"];

const index = fruits.findIndex(fruit => fruit === "mango");

console.log(index);
console.log(fruits[index]);
}
