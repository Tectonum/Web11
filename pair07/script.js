// function showMessage() {
//     console.log("hello world!")
// }
//
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();
//
// function showProduct(name, price) {
//     console.log('${name}: {price}uah');
// }
//
// showProduct("Notebook")
//
// function calculate(price, count) {
//     return price*count;
// }
//
// let total = calculate(1000, 4)
// console.log(total)


// function discount(total){
//     if (total >= 5000){
//         return 10
//     }
//     else{
//         return 0;
//     }
// }
// let discount1 = +prompt("Please enter a number");
//
// console.log(discount(discount1));


// function getProductTotal(price, count){
//     return price * count;
// }
//
// function getDiscount(total){
//     if (total >= 10000){
//         return 0.15
//     }
//     else if (total >= 5000){
//         return 0.10
//     }
//     else if (total >= 2000){
//         return 0.05
//     }
//     else {
//         return 0;
//     }
// }
// function getDiscountValue(total, cent){
//     return total * cent;
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
//
// let productName = prompt("Enter product name");
// let productPrice = +prompt("Enter price");
// let productCount = +prompt("Enter count");
//
// let productTotal = getProductTotal(productName, productCount);
// let discount = getDiscount(productTotal)
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(productName);
// console.log(`Price: ${productPrice} uah`);
// console.log(`Count: ${productCount}`);
// console.log(`Count: ${productTotal} uah`);
// console.log(`Discount: ${discount} %`);
// console.log(`Discount sum: ${productDiscountValue} uah`);
// console.log(`Total: ${productFinalPrice} uah`);

//______________________________________________________
let a = prompt("Enter city A")
let b = prompt("Enter city B")
let distance = +prompt("Enter distance between A and B in km")
let consumption = +prompt("Enter fuel consumption (L/100km)")
let fuelCost = +prompt("Enter fuel cost per liter in $")

function tripCost (distance, consumption, fuelCost) {
    return ((consumption / 100) * distance) * fuelCost
}
let finalPrice = tripCost(distance, consumption, fuelCost);

alert(`Your trip will cost ${finalPrice}$`)