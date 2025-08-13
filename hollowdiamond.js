     let size="5";
let print="";
let i,j,k;


for(i=size;i>=1;i--){
    for(j=1;j<=i;j++){
        print+=("*");
    }
    for(k=1;k<=size-i;k++){
                print+=("  ");

    }
    for(j=1;j<=i;j++){
                print+=("*");

    }
       
    print +=("\n");
}

for(i=1;i<=size;i++){
    for(j=1;j<=i;j++){
        print+=("*");
    }
    for(k=1;k<=size-i;k++){
                print+=("  ");

    }
    for(j=1;j<=i;j++){
                print+=("*");

    }
       
    print +=("\n");
}


console.log(print);
