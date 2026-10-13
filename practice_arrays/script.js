let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let userName;
let birthDay;
let birthMonth;

function getData(){
    userName = prompt("Enter your name:");
    while (userName === ""){
        userName = prompt("Unless your name is literally John Cena and we can't see it, please enter a valid name:");
    }

    birthDay = +prompt("Enter your birth DAY (1-31):");
    while (birthDay < 1 || birthDay > 31){
        birthDay = +prompt("Unless you were born on the 32nd of Neveruary, enter a valid day (1-31):");

    }
    birthMonth = +prompt("Enter your birth MONTH (1-12):");
    while (birthMonth < 1 || birthMonth > 12) {
        birthMonth = +prompt("There are only 12 months in the human calendar. Try 1-12:");
    }
}

getData();


let personalNumber = (userName.length + birthDay + birthMonth) % topics.length;
alert("Your destined webinar is: " + topics[personalNumber]);

let catalog = "Webinar Catalog:\n\n";
for (let i = 0; i < topics.length; i++) {
    let status = "Open for enrollment";
    if (seats[i] === 0) {
        status = "No seats left";
    }
    catalog = catalog + (i + 1) + ". " + topics[i] + " — " + seats[i] + " seats | " + status + "\n";
}
alert(catalog);

let minSeats = +prompt("How many seats do you need for your crew?");
let matches = "";
for (let i = 0; i < topics.length; i++) {
    if (seats[i] >= minSeats) {
        matches = matches + "- " + topics[i] + "\n";
    }
}
if (matches === "") {
    alert("No matches.");
} else {
    alert("Matches:\n" + matches);
}



let search = prompt("Enter webinar name to search:");

if (search == null) {
    alert("Cancel");
} else {
    let found = -1;
    for (let i = 0; i < topics.length; i++) {
        if (topics[i] === search) {
            found = i;
        }
    }
    if (found !== -1){
        if (seats[found] > 0) {
            let enrol = confirm("Found it! Enroll?");
            if (enrol) {
                seats[found] = seats[found] - 1;
                alert("Success. Seats left " + seats[found]);
            } else {
                alert("canceled");
            }
        } else {
            alert("No seats");
        }
    } else {
        alert("unknown name");
    }

}

let participants = [];
participants[0] = userName;

for (let j = 0; j < 4; j++) {
    let n = prompt("Enter participant name:");
    if (n == null) {
        alert("cancel");
        break;
    }
    while (n === "") {
        n = prompt("Name cant be empty, enter again:");
    } participants[participants.length] = n;
}

let list = "";
for (let i = 0; i < participants.length; i++) {
    list = list + (i + 1) + " " + participants[i] + "\n";
} alert(list);

let long = 0;
for (let i = 0; i < participants.length; i++) {
    if (participants[i].length > userName.length) {
        long = long + 1;
    }
}
alert("longer names: " + long);

let change = confirm("change a name?");
if (change) {
    let x = +prompt("participant number");
    let newName = prompt("new name");
    participants[x - 1] = newName;

    let list2 = "";
    for (let i = 0; i < participants.length; i++) {
        list2 = list2 + (i + 1) + " " + participants[i] + "\n";
    } alert(list2);
}


let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let personalVisits = [];
let bonus = (birthDay + birthMonth) % 7;

for (let i = 0; i < visits.length; i++) {
    personalVisits[i] = visits[i] + bonus;
}

function getVisitStats(values) {
    let sum = 0;
    let max = values[0];
    let min = values[0];

    for (let i = 0; i < values.length; i++) {
        sum = sum + values[i];
        if (values[i] > max) {
            max = values[i];
        }
        if (values[i] < min) {
            min = values[i];
        }
    } let avg = sum / values.length;
    let result = [];
    result[0] = sum;
    result[1] = avg;
    result[2] = max;
    result[3] = min;
    return result;
}

let stats = getVisitStats(personalVisits);
let threshold = +prompt("Enter attendance threshold:");

let passedCount = 0;
for (let i = 0; i < personalVisits.length; i++) {
    if (personalVisits[i] >= threshold) { passedCount = passedCount + 1; }
}

alert("Sum: " + stats[0] + "\nAverage: " + stats[1] + "\nMax: " + stats[2] + "\nMin: " + stats[3] + "\nBonus: " + bonus + "\nWebinars reaching threshold: " + passedCount);

let showNumbers = confirm("Show numbers of webinars that reached the threshold?");
if (showNumbers) {
    let passedNumbers = "";
    for (let i = 0; i < personalVisits.length; i++) {
        if (personalVisits[i] >= threshold) { passedNumbers = passedNumbers + (i + 1) + " "; }
    } alert(passedNumbers);
}


let menuChoice;
do {
    menuChoice = +prompt("1 show, 2 add, 3 rename, 4 find, 5 delete, 0 exit");
    if (menuChoice === 1) {
        let s = "";
        for(let i=0; i<topics.length; i++) {
            s = s + topics[i] + "\n";
        } alert(s);
    } else if (menuChoice === 2) {
        topics[topics.length] = prompt("name");
        seats[seats.length] = +prompt("seats");
    } else if (menuChoice === 3) {
        let id = +prompt("index");
        topics[id] = prompt("new name");
    } else if (menuChoice === 5) {
        topics.length = topics.length - 1;
        seats.length = seats.length - 1;
    }
} while (menuChoice !== 0);

let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let pScore = (birthDay * birthMonth) % 101;
requestScores[requestScores.length] = pScore;

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) {
        }
    }
}

    // Я не встигаю 😭