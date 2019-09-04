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

//forEach
var a=[1,,,,2];
let b=0;

a.forEach(function(e){
  console.log(e);
  b++;
});
console.log('callbacks',b)


const items = ['item1', 'item2', 'item3'];
const copy = [];
items.forEach(function(item){
  copy.push(item);
});
console.log(copy)

//includes

var a=['kk','apoorva']
console.log(a.includes('kk'))

var b=[1,2,3,4,'']
console.log(b.includes(''))
//index more than 0
var c=[1,2,3,4]
console.log(c.includes(1,100))
//index less than 0
var d=[1,2,3]
console.log(d.includes(1,-10))

//indexOf
var a=[1,20,4]
console.log(a.indexOf(20,1))



}

