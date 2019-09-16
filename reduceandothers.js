exports.kk =function kk()
{

//initial value cases

// var myCall = (acc,cur) => Math.max(acc.y,cur.y)
// console.log([{y:10},{y:20}].reduce(myCall))
// console.log([{y:10}].reduce(myCall))
//console.log([          ].reduce(myCall))

//sum of all values of array

// var total=[1,2,3,4,5].reduce((acc1,curr)=>
//    acc1 + curr,3);

// console.log(total)

//sum of values in object

var sum = [{x: 5}, {x: 20}, {x: 19}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,0
    
);

//console.log(sum)

//flat an array
var ini=0
var flat=[[1,2],[3,4],['a','b']].reduce(function(acc,curr){
  return acc.concat(curr)}  
);
//console.log(flat)

//counting instances of values in an object

var car = ['Suzuki','BMW','Ferrari','BMW','Volvo']

var ccar=car.reduce(function(allcar,car){
  if(car in allcar){
  allcar[car]++;
  }
  else{
  allcar[car]=1
  }
  return allcar;
},{});
//console.log(ccar)


// grouping objects by property

var people =[
  {name:'Kopps', gender:'male'},
  {name:'Keerthi', gender:'female'},
  {name:'KK',gender:'male'}
];
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
var groupedPeople = groupBy(people, 'gender');
//console.log(groupedPeople)

//Bonding arrays in a arrays

var company =[
  {name:'Bandi',
  desig:['web','Dev','form'],
  age: 22
  },
  {name:'Kopps',
  desig:['web','Dev','DE'],
  age: 22
  },
  {name:'KK',
  desig:['Web','Dev','Form'],
  age: 22
  }
];
var emp=company.reduce(function(acc,curr){
  return[...acc,...curr.desig];
},['App Dev'])
//console.log(emp)

//removing duplicate 
var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd',1,1,1,1,1,2,2,2,2,2,3,3,3,3,3];
var myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator
}, [])

//console.log(myOrderedArray);


//writing using map reduce
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };


var a=[0, 0,0, 0].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
); // [4,5,6,7]
//console.log(a)

//reduce Right sum
var k=[3,0,5,1,2,3,6].reduceRight(function(a,b){
  return a+b;
});
//console.log(k)

//reduce Right flat
var t=[[1,0],[3,2],[6,5,4]].reduceRight(function(a,b){
  return a.concat(b)
},[])
//console.log(t)

//difference between reduce and reduceRight
var y=['1','2','3','4','5']
var q=y.reduce(function(a,b){return a + b})
var w=y.reduceRight(function(a,b){return a + b})
console.log(q)
console.log(w)





}