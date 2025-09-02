// let arr = [
//   {name : "jay", age: "20"},
//   {name : "jenny", age: "21"},
//   {name : "john", age: "20"}
// ];


// arr.map((item)=>{
//   console.log(item.age);

// }
// );




// let getage=arr.map((item)=>{
//   return item.age;
  
// }
// );
// console.log(getage);


// ///map>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let num=[1,2,3,4];
// num.map((item,i,l)=>console.log(item,i,l)
// )


// ///filter>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let fil=arr.filter((item)=>item.age==20)
// console.log(fil);//all matches

///find()>>>>>>>>>>>>>>>>>>>>>>>>>

// let find=arr.find((item)=>item.age==20)
// console.log(find);//first match




// ///1sum
//     let sum=0;
//     let X=[1,2,3,4];
// for(let i=0;i<=X.length;i++){
//     sum=sum+i;

// }
// console.log("for loop:",sum);


////function sum
//  let array=[1,2,3,4];
// function total() {
//     let sum=0;
// for(let i=0;i<=array.length;i++){
//     sum=sum+i;
// }
// return sum;
// }
// let T=total();
// console.log("Using fuction:",T);



// ////reduce()>>>>>>>>>>>>>>>>

// let reduce=array.reduce((item,v)=>item+v,0)
// console.log("Using reduce():",reduce);
//value intex full array



// //premitive datatype>>>>>>>>>>>>>>>>>>


// let a=10;
// let b=a
// b=100


//   arr=[1,2,3,4];
//   let temp=arr
//   temp[0]=100


//   console.log(a,"a");
//   console.log(b,"b");
//   console.log(arr,"arr");
//   console.log(temp,"temp");
  



///array destructuring and object destructring>>>>>>>>>>>>>>>>>

// let array=[100,200,300,400];
// //>>>index base***
// let a=arr[1];
// let b=arr[2];


// let [a,b,c]=array;
// console.log(a,b,c);

// ///object

// let arr = {name : "jay", age: "20"};
// let {age}=arr
// console.log(age);

//re naming>>>>

// let {name,age:c}=arr
// console.log(c);




// let allarr=[{name:"temp",age:20,pls:"klt"},{name:"tem2",age:22,pls:"kls"}]

// let select=allarr[1].pls;
// console.log(select);



// let {pls}=allarr[1];
// console.log(pls);


//////////////////event listeners>>>>>>>>>>>>>>>>>>>>>>

///1

// document.getElementById("test").addEventListener("click",function abc(params) {
//   console.log("Welcome");
// })

///2

// let btn=document.getElementById("test")
// btn.addEventListener("click",abc)
// function abc(params) {
//   console.log("Welcome");
  
  
// }

///set intervel and set time out()//////>>>>>>>>>>>>>>>>>>
// setInterval(() => {
//   console.log("Hello");
  
// }, 2000);



// setTimeout(() => {
//     console.log("hai");
// }, 2000);

// //////////////switch>>>>>>>>>>>>>>>>>>>>


// function abc(params) {
//   switch (params) {
//     case 1:
//       console.log("one");
      
//       break;
//     case 2:
//          console.log("two");
//       break;
  
//     case 3:
//        console.log("three");
//       break;
//     default:
//      console.log("missing");

//       break;
//   }
  
// }
// abc(2)


//////////////////spred operator>>>>>>>>..
// usecase1>>>
// let array=[100,200,300,400];
// function abc(a,b) {
//   console.log(a,b);

// }
// abc(array)

//2>>>>
// let a=[...array]
// let b=a
// b[0]=500
// console.log(array);
// console.log(b);
  

///3>>>>>>concat

// let array=[100,200,300,400];
// let arr2=[1,2,3,4,5]

// let a=[...array,...arr2]
// console.log(a);

///4 `function>>>>>>>>>
// function abc(...a) {
//   console.log(a);

// }
// abc(1,2,3,4,5)




// let array=[100,200,300,400];

// function abc(val) {

//   let value=array[0];
//   let second=array[1];
//   console.log(val);
//   console.log(value,second);
// //destructuring
//   let [a,b]=array
//   console.log(a,b);
// // }
// abc(array)

// simple way>>>>
// function abc([a,b]) {
//   console.log(a,b);
// }
// abc(array)

///in object>>>>
// ***
// let allarr={name:"temp",age:20,pls:"klt"}

// function abc({name}) {
//   console.log(name);
// }
// abc( allarr)




// let allarr=[{name:"temp",age:20,pls:"klt"},{name:"tem2",age:22,pls:"kls"}]

// // function abc({pls}) {

//   let v=allarr[1].pls
//   console.log(v);
// // }
// // abc( allarr)



////////next 27/8/25>>>>>>>>>>>>>>>>>


// rest operater>>>>>>>>>>>>>>>>>>
// let array=[100,200,300,400];


// let [a,b,...rest]=array
// console.log(a,b);
// console.log(rest);


// function testfun(...a) {
//     console.log(a);
    
// }
// testfun(1,2,3,4,5)



// function restfun(a,b,...rest) {
//     console.log(a,b,rest);
    
    
// }
// restfun(1,2,3,4,5)




// function test(...a) {  
//    return a  
// }
// let ab =test(1,2,3,4,5)
// console.log(ab);
// let reduce= ab.reduce((v,x)=>v+x,0)
//     console.log(reduce);
    

// //template litrels>>>>
// // let name="afnan"
// // console.log("my name is "+ name+" i am "+name);
// // console.log(`my name is ${name}. iam ${name}`);



// let allarr=[
//     {name:"shijil",age:20,mark:40},
//     {name:"afnan",age:22,mark:30},
//     {name:"shaheed",age:23,mark:45},
//     {name:"hashir",age:21,mark:30}]

// let result=allarr.filter((item)=>item.mark >30 && item.age >=22)
// console.log(result);





// let n=20;

// let count=0;
// for(let i=2;i<n;i++){
//      let flag=0;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag=1;
//             break;
           
//         }
//     }
//     if(flag===0){
//           count++
//           console.log(i +" is prime");
          
      
//     }

   
// }
//         console.log("total prime numbers "+ count);
        
    




// let check=(val)=>{
//     let num=0;


//     for(let i=2;i<val;i++){
//         if(val%i==0){
//             num=1
           
            
//         }}
//          console.log(val);

//         if(num==0){
//             console.log("prime");
            
//         }else{
//             console.log('not prime');
            
//         }
//     }

// check(11);

/////////////////29/8/25>>>>>>>>>>>>>>>>>>>>>>

///work>>>>>>>>>

// let array=[100,200,300,400,500,600,700];

// function test2(a) {
//     console.log("orginal array is "+a)
//     let result=array.filter((item)=>item<300 || item>600)
//     console.log("filter array is "+result);

//     let sum=result.reduce((v,x)=>v+x,0)
//     return sum
    
// }
// let s=test2(array)
// // let s=test2()

// console.log("result is "+ s);


////


// let array=[100,200,300,400,500,600,700]
// let y=Array.push(20)
// console.log(Array);
// console.log(y);



/////sort>>>>>>>>>>>>

// let x=[200,100,600,500,800,700,300,400]
// console.log("orginal array: "+x);

// let y=x.length
// for(let i=0;i<y-1;i++){
//     for(let j=i+1;j<y;j++){
//         if(x[i]>x[j]){
//             temp=x[i]
//             x[i]=x[j]
//             x[j]=temp
//         }
//     }

// }
//         console.log("sorted array: "+x);
///>>>>>>>>>simple way
        // let result=x.sort()
        // console.log(result);
        


//Even number array>>>>>>>>>>>


// let Arr3=[1,2,3,4,5,6,7,8,9,10,11,12];
// let len=Arr3.length

// function Even(...a) {
//     for(let i=1;i<=len;i++){
//         if(i%2==0){
//             console.log(i)
//         }
        
//     }
//     return a
// }

// let result= Even(Arr3)

// let [a,b,c]= result
// console.log(...a);



/////work++
// let arr=[8,5,12,13,15,17,20]
// let len=arr.length
// let result=[];
// let a=0;
// console.log("original array:"+arr);
// for(let i=0;i<len;i++){
//     if(arr[i]%5!==0){
//         console.log(arr[i]);
//         // result.push(arr[i])
//          result[a]=arr[i]
//          a++;

        
//        }
        
//     }
// console.log(result);

// for(let i=0;i<result.length;i++){
//     for(let j=i+1;j<result.length;j++){
//         if(result[i]< result[j]){
//             temp=result[i]
//             result[i]=result[j]
//             result[j]=temp
//         }
        
//     }
// }
//         console.log("sorted array: "+result);





let arr=[8,5,12,13,15,17,20]
let len=arr.length
console.log("original array:"+arr);


for(let i=0;i<len;i++){ 

        if(arr[i]%5==0){
for(let j=i;j<len;j++){
      arr[j]=arr[j+1]
    //  console.log(arr[i] );
         
}
    //  console.log(arr[i] );

    len--
    



    }

   

}
console.log(arr);
