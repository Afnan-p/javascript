        let size="5";
let print="";
let i,j;


for(i=1;i<=size;i++){
    for(j=1;j<=size;j++){
        if(j==1||i==1||i==size||j==size){
        print +=("* ");
        }
    else {
        print +=("  ");
    }
}
    
    print +=("\n");
}

console.log(print);