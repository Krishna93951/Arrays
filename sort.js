exports.sort=function sort(){
  console.log('Sorting numbers')
  var num=[90,70,80,60,50]
  num.sort(function(a,b){
    return a-b
  });
  console.log(num)

  console.log('\nSorting using arrow function')
  var n=[9,8,5,6,7]
  n.sort((a,b)=> a-b)
  console.log(n)

  console.log('\n Sorting name and value')
  var emp=[
    {name:'Arun',age: 22},
    {name:'Kops',age: 21},
    {name:'Bandi',age: 20}
  ];
console.log('\n Sorting by age')
 emp.sort(function(a,b){
    return a.age - b.age;
  });
console.log(emp)

console.log('\n Sorting by name')
emp.sort(function(a,b){
  var A=a.name;
  var B=b.name;
  if(A<B)
  return -1;
  if(A>B)
  return 1
});

console.log(emp)

console.log('\n Sorting non ASCII characters')
var name=['Arun','Aanvi','Apoorva','Barry','Bharath','Bhaghira','Arjun']
name.sort(function(a,b){
  return a.localeCompare(b);
})
console.log(name)


}