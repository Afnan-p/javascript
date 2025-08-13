
function delay(){

    for( let i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(`hello world ${i}`);
        },i*1000);
    }
}
delay();


