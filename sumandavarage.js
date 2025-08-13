function calculation(num1,num2,num3)
{
    var sum=num1+num2+num3;
    var avg=(num1+num2+num2)/3;

    return {sum:sum,avg:avg}
  
}
let result=calculation(10,10,10);
console.log("sum :"+result.sum);
console.log("avg :"+result.avg);