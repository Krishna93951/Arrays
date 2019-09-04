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

//flat
var a=[1,[2,3,[4,5,3,[5,6,7,[2]]]]]
console.log(a.flat(Infinity))

//map
var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
return Math.sqrt(num)
});
console.log(roots);

var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { 
  return x.charAt(0); 
});
//console.log(a);

var b= [, ,]
var c=b.map(function(e){
  return e
});
console.log(c)

//console.log(['1','2','3'].map(parseInt))

//flatMap
var x=[1,2,3,4]
var z= x.map(x=>[x*2])
console.log(z)

var f=x.flatMap(x=>[x*2])
console.log(f)


}

