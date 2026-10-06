let savedUser = "admin";
let savedPassword = "12345";


function startMenu() {
    let menuChoice;
    do {
        menuChoice = +prompt("Choose an option:\n" +
            "1 - Sign up\n" +
            "2 - Login\n" +
            "0 - Exit")
        if (menuChoice === 1) {
            signUp();
            login()
        } else if (menuChoice === 2) {
            login();
        } else if (menuChoice === 0) {
            alert("Exit");
        } else {
            alert("Unknown command")
        }

    } while (menuChoice !== 0);
}

function signUp() {
    savedUser = prompt("User")
    savedPassword = prompt("Password");
    registered = true;
    alert("Account creation successful!")
}
let registered = false

function login() {
    let user = prompt("Enter username");

    if (user !== savedUser) {
        alert("Sign up first!")
        return;
    }

    let password = prompt("Enter password")
    let tries = 1;

    while ((user !== savedUser || password !== savedPassword) && tries < 3) {
        alert("Incorrect username or password! Attempts remaining: " + (3 - tries))

        password = prompt("Enter password");
        tries++;
    }

    if (user === savedUser && password === savedPassword) {
        alert("Access granted");
    } else {
        alert("Account locked. Feel free to contact support (we definitely won't reply, so good luck with that lol).")

    }
}

startMenu();