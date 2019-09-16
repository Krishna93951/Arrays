exports.kk =function kk()
{

//initial value cases

var myCall = (acc,cur) => Math.max(acc.y,cur.y)
console.log([{y:10},{y:20}].reduce(myCall))
console.log([{y:10}].reduce(myCall))
//console.log([          ].reduce(myCall))




}

