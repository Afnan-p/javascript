function palindrom(str) {
    let len=str.length;
    for(i=0;i<=len/2;i++){
        if(str[i]!==str[len-i-1]){
            return "Not palindrom"
        }

    }
    return "palindrom"
}

console.log(palindrom("mam"));
