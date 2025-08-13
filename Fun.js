const txt= "     Coding is FUN when you practice consistently!     ";
console.log(txt);
const length=txt.length;
console.log("Length:"+length);
const trimmedstring=txt.trim();
console.log("trimmedstring :"+trimmedstring);
console.log("trimmedstring length :"+trimmedstring.length)
const getchar=trimmedstring.at(10);
console.log("getcharacter :"+getchar);
const unicodelast=trimmedstring.charCodeAt(trimmedstring.length-1);
console.log("unicodelast :"+unicodelast);
const slicefun=trimmedstring.slice(10,13);
console.log("slicefun :"+slicefun);

const str="Coding is FUN when you practice consistently!";
console.log(str);
const sub=str.substring(23,31);
console.log(sub);
const textreplace="Coding is FUN when you practice consistently!";
console.log("textreplace:" + textreplace.replace(/Fun/i,"enjoyable"));
const replaceall="Coding is FUN when you practice consistently!";
console.log("replace O: "+replaceall.replaceAll(/o/g,"O"));
const splitarry=trimmedstring.split(" ");
console.log(splitarry);
const capital=splitarry.toUpperCase();
console.log("2 :"+capital);




const hyphens=txt.replaceAll(/ /g,"-");
console.log("1 :"+hyphens);
const splitedarray=trimmedstring.split(" ");


let input="Coding is FUN when you practice consistently!";
let count=0;

for(let i=0;i<input.length;i++){
    let ch=input[i];
    if( ch =='a' ||ch == 'e' ||ch =='i' || ch == 'o' || ch =='u'){
        count++;
    }
}
console.log("3 : Numbers of vovals:",count);
let isPalindrome = true;





for (let i = 0; i < input.length / 2; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("4:Palindrome");
} else {
    console.log("4:Not a Palindrome");
}







