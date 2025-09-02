
let a=0,b=1,i,c;
let check=(x)=>{
for(i=0;i<=x;i++){
    console.log(a);
    c=a+b;
    a=b;
    b=c
}
}
check(10);