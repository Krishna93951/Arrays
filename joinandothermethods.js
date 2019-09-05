exports.u= function u(){
//join
  var car = ['BmW','Volvo','Suzuki'];
  console.log(car.join(' * '))
  console.log(car.join(' ,Krishna owns this. '))

//keys
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]

//lastIndexOf(searches backward)
var t=[1,2,3,4,2,3,4,5,3]
console.log(t.lastIndexOf(3))

var car=['Kia','BMW',1,2]
if (car.length > 3)
console.log ('not found')
else
console.log(car.lastIndexOf('Kia'));

//pop
var g=['banana',1,'pulp',2,3,4,5]
var h= []
var h1=h.pop();
var popped= g.pop();
console.log(h)
console.log(h1)
console.log(g)
console.log(popped)

var i=['me','you',1,2,3,4,5]
var count=0;
i.forEach(function(pop)
{
  i.pop();
  count++;
});
console.log(i);
console.log(count)
}

