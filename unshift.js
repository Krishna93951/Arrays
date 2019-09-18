exports.unshift=function unshift(){
  var num=[1,2,3]
  console.log(num.unshift('kk'))
  console.log(num)
  
  //array in array
  var a=[1,2,3,34]
  console.log(a.unshift([20,10],[1]))
  console.log(a)

  //toString
  var b=[1,2,3,'a','KK']
  console.log(b.toString())

  //values
  var num1= [1,2,3,4,5];
var iterator = num1.values();

for (let numbers of iterator) {
  console.log(numbers); 
}
}