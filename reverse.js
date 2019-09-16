exports.l=function l()
{  
  //reverse of an array
  var a =[1,2,3,4]
 // console.log(a.reverse())

  //reverse of single 
  var b=[1]
  //console.log(b.reverse())

  //reverse of an object
 const a = {0: 'a', 1: 3, 2: 'b', length: 3};

//console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); //same syntax for using apply()

//console.log(a);

//shift
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}


}