let arr=['a','b','c','d','e','f','g','h','i','a','b','c']
  
for(let i=0;i<=arr.length-1;i++){
    for(let j=i+1;j<=arr.length-1;j++){

        if(arr[i]===arr[j]){
            console.log(`Duplicate word found: ${arr[i]} at index ${i} and ${j}`);
        }
}
}



