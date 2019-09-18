exports.sliceandothers=function sliceandothers(){
  //slice
 var a= ['a','b','c','d']
 var b=a.slice(2,5);
 console.log(b);
 

 var a= ['a','b','c','d']
 var b=a.slice(-3,-1);
 console.log(b);

 //like objects or collections to array
 function x() {
  return Array.prototype.slice.call(arguments);
}

var a1 = x(1, 2, 3);
console.log(a1)

//some 
function isLessThan(element,index,array){
  return element < 20;
}
var v=[20,30,40,50]
//console.log([1,2,3,45].some(isLessThan));
//console.log(v.some(isLessThan));

//array element using arrow function
//console.log(v.some(x=> x >10))

//checking whether value exists
var teams=['India','Australia','New Zeland','England']
function check(arr,val){
  return arr.some(function(arrVal) {
    return val=== arrVal
  });


}
//console.log(check(teams,'WestIndies'))
//console.log(check(teams,'India'))

//using arrow function
const fruits = ['apple', 'banana', 'mango', 'guava'];

function c(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

//console.log(c(fruits, 'watermelon'));   
//console.log(c(fruits, 'banana')); 

//splice

//Removing 0 element and adding 1 element
var character=['Goku','Naruto','Sasuke']
var added=character.splice(0,0,'Killerbee')
console.log(added)
console.log(character)

//Removing 1 element
var food=['Idly','Dose','Chapathi','Anna']
var remove=food.splice(0,1)
console.log(remove)
console.log(food)

//Remove 2 elements and add 1 element
var car=['BMW','Volvo','Suzuki','Ferrari']
var readd=car.splice(1,2,'Benz')
console.log(car)
console.log(readd)

//Remove all the elements from an index
var bike=['Honda','KTM','BMW','TVS']
var rem=bike.splice(1)
console.log(bike)
console.log(rem)

//toLocaleString
var prices = ['$7', 500, 8123, 12]; 
var z= prices.toLocaleString('en', { style: 'currency', currency: 'DOL' });

console.log(z)



}