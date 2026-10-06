// let i = 1;
// while (i <= 5) {
//     alert(i);
//     i++;
// }

// alert(number("7") === 7)

// let age = +prompt('Enter your age');
// while(Number.iNaN(age) || age < 0 || age >= 120) {
//     alert("Please enter your age");
//     age = +prompt('Enter your age');
// }
// alert(age);

// const correctPin = 4321
//
// let pin = +prompt("Enter a valid pin")
// let tries = 1;
//
// while (pin !== correctPin && tries < 3) {
//     pin = +prompt("Enter a valid pin")
//     tries ++;
// }
// if (pin === correctPin) {
//     alert("Pin is correct")
// }
// else {
//     alert("Card was locked")
// }
//
// while (tries <= 3) {
//     let pin = +prompt("Enter a valid pin");
//     if (pin === correctPin) {
//       alert("Access granted");
//         break;
//
//     }
//     tries++;
//     alert("Pin incorrect");
// }

// let menuChoice;
// do {
//     menuChoice = prompt("Choose an option:\n + " +
//         "1 - Open profile\n" +
//         "2 - Profile settings\n" +
//         "0 - Exit")
//     if (menuChoice === 1) {
//         alert("Opening profile");
//         if (menuChoice === 1) {
//             alert("Opening profile");
//         } else if (menuChoice === 2) {
//             alert("Opening profile settings");
//         } else if (menuChoice === 0) {
//             alert("Exit");
//         } else {
//             alert("Unknown command")
//         }
//     }
// }    while(menuChoice !==0);

// let gradeSum = 0;
// let count = 0;
//
// do {
//     let num = +prompt("Enter your grade");
//
//     if (Number.isNaN(num) || num <= 0 || num > 12) {
//         alert("Invalid grade");
//         continue;
//     }
//
//     gradeSum += num;
//     count++;
// }
//     alert(`Average grade is ${gradeSum / count}`);

//-----------------------------------------------------------

let age = +prompt('Enter your age');
while(Number.isNaN(age) || age < 12 || age >= 90) {
    alert("Please enter your age");
    age = +prompt('Enter your age');
}
console.log(age);

const correctPin = 4321

let pin = +prompt("Enter your PIN")
let tries = 1;

while(pin !== correctPin && tries < 3){
    alert("The PIN is incorrect. Try again");
    pin = +prompt("Enter your PIN")
    tries ++;
}

if (pin === correctPin) {
    let menuChoice;
    do {
        menuChoice = +prompt("Choose a section:\n" +
            "1 - Profile\n" +
            "2 - Notifications\n" +
            "3 - Settings \n" +
            "0 - Exit"
        )
        switch (menuChoice) {
            case 1:
                console.log("Opening profile");
                break;
            case 2:
                console.log("Opening notifications");
                break;
            case 3:
                console.log("Opening settings");
                break;
            case 0:
                console.log("Logging out");
                break;
            default:
                alert("There is no such section");
                break; // This ensures you used 'break' as required!
        }
    }    while(menuChoice !==0);

}
else {
    alert("The PIN is incorrect. For security reasons, your card has been blocked")
}



