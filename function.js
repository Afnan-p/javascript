
// let num=100;

// let arr=['1,3,2,4,5']
// function ab(a){

   
//     console.log("hay",a);
//     //  return 200;
//     a();
// }
// ab(arr);
// ab(num);
// ab(10);
// let res=ab(arr);
// console.log(res,'==res');





///////

// ()=>{

// }







// 1==={}
// 2===()
// 3====return


// ab(function () {
//     console.log("haaai");
// })

// ab( ()=> {
//     console.log("haaai");
// })


// let num=20;
// for(let i=1;i<=num;i++){
//     console.log(i);
    
// }


// function check(a) {
//     if(){
//         console.log('even');
        
//     }
//     else{
//         console.log('odd');
        
//     }
    
// }
// check(10);





let check=(val)=>{
    let num=0;


    for(let i=2;i<val;i++){
        if(val%i==0){
            num=1
        }
    }

        if(num==0){
            console.log("prime");
            
        }else{
            console.log('not prime');
            
        }
    }

check(11);