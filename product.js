let products = [{pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led'},
{pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led'},
{pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led'},
{pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd'},
{pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd'}];
// // 1.List the names of all products.
console.log(" names of all products");

var names=products.forEach((item)=>{
console.log(item.pName);
})


// // // 2.Display all products with an lcd display.
console.log("Display all products with an lcd display");

var founds=products.filter((item)=>{
  return(item.display=="lcd")
})
console.log(founds);
// 3. List the names of all products that support the 5g band.
console.log("names of all products that support the 5g band");

var product5g=products.filter(item=>item.band==='5g');
product5g.forEach((item)=>{
  console.log(item.pName);

});


// 4.Filter out and display all products with a price below 50,000
console.log("display all products with a price below 50,000:");
var price=products.filter((item)=>{
    return(item.price<50000)
})
console.log(price);


// 5. Find and display the product with the highest price.
let highestprice=products[0];
for(let i=0;i<products.length;i++){
    if(products[i].price > highestprice.price){
        highestprice=products[i];
    }
}
console.log(" product with the highest price");
console.log(highestprice);


// 6. Find and display the product with the lowest price.


let lowestprice=products[0];
for(let i=1;i<products.length;i++){
    if(products[i].price < lowestprice.price){
        lowestprice=products[i];
    }
    
}
console.log(" product with the lowest price");
console.log(lowestprice);
