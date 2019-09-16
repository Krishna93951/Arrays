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

var 

}