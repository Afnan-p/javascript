
let size="5";
let i,j,k,m;
let print="";
for(i=1;i<=size;i++){
    for(j=1;j<=size-i;j++){
        print +=(" ");
    }
        for(k=1;k<=i;k++){

            print +=("* ");
        }
        print+=("\n");
    }
    for(i=3;i<=size;i++){
        for(j=1;j<=size-i;j++){
        print +=(" ");
    }
        for(k=1;k<=i;k++){

            print +=("* ");
        }
        print+=("\n");
    }
     for(i=3;i<=size;i++){
        for(j=1;j<=size-i;j++){
        print +=(" ");
    }
        for(k=1;k<=i;k++){

            print +=("* ");
        }
        print+=("\n");
    }
    for(i=3;i<=4;i++){
         for(j=1;j<=3;j++){
        print +=(" ");
    }
        for(m=1;m=i-1;k++){

            print +=("* ");
        }
        print+=("\n");
    }
    console.log(print);
    
