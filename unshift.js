exports.unshift=function unshift(){
  var num=[1,2,3]
  console.log(num.unshift('kk'))
  console.log(num)
  //array in array

  var a=[1,2,3,34]
  console.log(a.unshift([20,10],[1]))
  console.log(a)
}