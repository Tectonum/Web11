let eventType = +prompt("Choose an option:\n1 - Cinema\n2 - Theater\n3 - Concert")
while (eventType !== 1 && eventType !== 2 && eventType !== 3) {
    eventType = +prompt("Bruh, 1, 2, or 3:\n1 - Cinema\n2 - Theater\n3 - Concert")
}

let basePrice = 0
switch(eventType){
    case 1:
        basePrice = 150
        break;
    case 2:
        basePrice = 220
        break;
    case 3:
        basePrice = 350
        break;
}

let dayType = +prompt("Day type:\n" +
    "1 - Weekday\n" +
    "2 - Weekend")


if(dayType===2) {
    basePrice = basePrice*1.15
}

let tickets = +prompt("How many tickets? (1-6)")
while (tickets < 1 || tickets > 6 || isNaN(tickets)) {
    tickets = +prompt("Only 1 to 6 tickets allowed. We ain't selling the whole row to you.")
}

let processed = 0
let free = 0
let discounted = 0
let fullPrice = 0
let totalSum = 0

for (let something = 1; something<= tickets; i++) {
    let age = +prompt(`Enter age for ticket ${something} (or -1 to stop)`)

    while (age < -1 || isNaN(age)){
        age = +prompt("Enter valid age")
    }

    if (age === -1) {
        break;
    }

    processed++;

    if (age >= 0 && age <= 5){
        free++
        continue;
    }

    let currentPrice = basePrice
    let isDiscounted = false

    if (age  >= 6 && age <= 12) {
        currentPrice = currentPrice * 0.5
        isDiscounted = true
    }else if (age >= 13 && age <= 17){
        currentPrice = currentPrice * 0.8
        isDiscounted = true;
    } else if (age >= 60) {
        currentPrice = currentPrice * 0.75
        isDiscounted =true;
    }else if (age >= 18 && age <= 25) {
        let student = +prompt("Got a student ID? 1 - Yes, 2 - No")
        if (student === 1) {
            currentPrice= currentPrice * 0.9
            isDiscounted = true
        }
    }


    if (isDiscounted) {
        discounted++
    } else {
        fullPrice++;
    }

    totalSum += currentPrice
}

if (totalSum > 1000) {
    totalSum = totalSum * 0.95
}

alert(`Tickets processed: ${processed}\nFree: ${free}\nDiscounted: ${discounted}\nFull price: ${fullPrice}\nTotal: ${totalSum} uah`)