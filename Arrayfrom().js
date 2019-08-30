export {s}
export {b}
export {k}
function s(){


//Trying to convert object values to an array
var x = {
  a:'kk',
  b: 23
};
//console.log(Array.from(x.a));
//console.log(Array.from(x.b));
}
//Trying to get Map to Array
function b(){
  var c= new Map ([[22,1],[2,40],[1,3]]);
  //console.log(Array.from(c.values()));
  //console.log(Array.from(c.keys()));
};

//Trying Arrow function and range
function k(){
  var z=[1,2,3,4,5];
  const range =(start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  //console.log(Array.from(z,(v,i)=>v+2));
  //console.log(range(1,5,1));
}



