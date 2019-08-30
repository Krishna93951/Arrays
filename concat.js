exports.ab=function ab(){
   console.log('concating two arrays');
   var a=[2,3,'a']
   var b=[4,3,1,2]
   console.log(a.concat(b))


  console.log('concating three arrays');
  var x=[1,2,3]
  var y=[100,101,10]
  var z=[1,2,3]
  console.log(x.concat(y,z))
  
  console.log('concating alphnumberic')
  var j=['a','v','b']
  console.log(j.concat(1,2,3,['x','v','c']))

  console.log('Concating Nested arrays')
  var g=[[2]]
  var h=[2,[4]]
  var u=g.concat(h)
  console.log(Array.isArray(u)+'   ' + u)

}


