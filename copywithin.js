exports.bc = function bc() {

 var a=[1,2,3,4]
 //Target greater than length
 var b= a.copyWithin(5,1,2);
 console.log(b)

 //Target positive and greater than start
 var c= a.copyWithin(1,0,3);
 console.log(c) //4 is trimmed 

 //Target negative 
 var d= a.copyWithin(-1,2,3);
 console.log(d) //starts from ending

 //Start is positive
 var e= a.copyWithin(0,2,3);
 console.log(e)

 //Start is negative
 var f= a.copyWithin(0,-1,1);
 console.log(f)
};