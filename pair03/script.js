// let age = +prompt("What's your age?");
//
// if (12 > age && age >= 0) {
//     alert('child')
// }
// else if (18 > age && age >= 12) {
//     alert('teenager')
// }
// else if (age >= 18 && age < 120) {
//     alert('adult')
// }
// else {
//     alert('invalid age. try entering a number')
// }


// const username = "admin";
// const password = "password";
//
// let username = prompt("Username: ");
// let password = prompt("Password: ");
//
// if (username === 'admin') {
//     if (password === '12345') {
//         alert('You have logged in successfully!');
//     } else {
//         alert("Username and password don't match");
//     }
// }
// else{
//     alert("Username doesn't exist");
// }


// let day = +prompt("Enter a number of the day of the week:");
//
// if (!(day < 1 && day > 7)){
//     switch (day){
//         case 1:
//             alert("Monday")
//             break;
//         case 2:
//             alert("Tuesday")
//             break;
//         case 3:
//             alert("Wednesday")
//             break;
//         case 4:
//             alert("Thursday")
//             break;
//         case 5:
//             alert("Friday")
//             break;
//         case 6:
//             alert("Saturday")
//             break;
//         case 7:
//             alert("Sunday")
//             break;
//     }
// }

//______________________________________________________________
let keepShopping = true
let productPrices = 0
let totalPrice = 0
let productCount = 0
let deliveryPrice = 0

while (keepShopping) {
    let productName = prompt("Enter product name");
    //let productPrice = +prompt("Enter product price");

    switch (productName) {
        case "Mouse":
            productPrices = 1000
            productCount = prompt("Enter product count");
            break;
        case "Keyboard":
            productPrices = 2000
            productCount = prompt("Enter product count");
            break;
        case "Key switches":
            productPrices = 200
            productCount = prompt("Enter product count");
            break;
        case "Mouse pad":
            productPrices = 300
            productCount = prompt("Enter product count");
            break;
        case "Headset":
            productPrices = 1500
            productCount = prompt("Enter product count");
            break;
        default:
            alert("That product doesn't exist.");
            break;
    }
    totalPrice += productPrices * productCount;

    keepShopping = confirm("Do you want to buy anything else?");


}
let discountCard = confirm("Do you have a discount card?");
let deliveryType = prompt("Enter delivery type");

switch (deliveryType) {
    case "Courier":
        deliveryPrice = 200
        break;
    case "Post":
        deliveryPrice = 100
        break;
    case "Takeout":
        deliveryPrice = 0
        break;
}

//<2000 - 0%
// 2000>= - 5%
// 5000>= - 10%

let shopDiscount = 0;

if (totalPrice >= 5000) {
    shopDiscount = 0.15;
} else if (totalPrice >= 2000) {
    shopDiscount = 0.12;
} else if (totalPrice >= 1000) {
    shopDiscount = 0.10;
}

if (discountCard === true){
    shopDiscount += 0.05
}

finalPrice = ((1 - shopDiscount) * totalPrice) + deliveryPrice;

// alert(finalPrice);
// alert(totalPrice);
// alert(deliveryPrice);
// alert(1-shopDiscount);

alert("Your order costs " + finalPrice);