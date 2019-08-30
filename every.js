exports.gg= function gg(){
function isBigEnough(element, index, array) {
  return element >= 10;
}
var a=[12, 5, 8, 130, 44];
var b=[12, 54, 18, 130, 44];
console.log(a.every(isBigEnough)); 
console.log(b.every(isBigEnough));
// Using arrow function

console.log(a.every(x=>x<=10));
console.log(b.every(x=>x<=1));
} 