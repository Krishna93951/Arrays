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


// array.fill
console.log(a.fill(0,1,4))
console.log(b.fill(4,NaN,NaN))

//Filter
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
}

console.log(filterItems(fruits, 'ap')); 
console.log(filterItems(fruits, 'an'));

//find
var a = [5, 12, 8, 130, 44];

var found = a.find(function(element) {
  return element < 10;
});

console.log(found);
} 