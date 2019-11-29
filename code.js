  var number= prompt("enter a value");   

  let a,b,c;
  let output=[];
// enter unqiue no. All time means two no. should not be same
  if(number<=10000)
  {
output = [],
sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
output.push(+sNumber.charAt(i));
}
console.log(output);

  }
  else
  {
      alert("Please enter a number less than 10000");
  }

var result = [];
function arrayCreate(array, size) {

array.forEach(function iter(values) {
 return function (v) {
     var temp = values.concat(v);
     if (values.includes(v)) {
         return;
     }
     if (temp.length === size) {
         result.push(temp);
         return;
     }
     array.forEach(iter(temp));
 }
}([]));
return result;
}

let array_val=arrayCreate(output ,output.length).map(g=> g.join(''));

document.getElementById("Val").innerHTML=array_val;
let max;
max=result[0];
for(var i=1;i<result.length;i++){
if(max<result[i]){
  max=result[i];   
  
}
}

document.getElementById("max_num").innerHTML=("The max. number is "+max.join(''));
