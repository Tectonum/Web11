let nameInput = document.querySelector("#nameInput");
let eventInput = document.querySelector("#eventInput")
let addButton = document.querySelector("#addButton")
let errorMessage = document.querySelector("#errorMessage")
let requestCounter = document.querySelector("#requestCounter");
let confirmedCounter = document.querySelector("#confirmedCounter")
let requestList = document.querySelector('#requestList')
let emptyMessage = document.querySelector("#emptyMessage")
let clearButton = document.querySelector("#clearButton")


function updateCounter(){
    let count = requestList.querySelectorAll("li").length
    requestCounter.textContent = count
    let confirmed = requestList.querySelectorAll(".confirmed").length
    confirmedCounter.textContent = confirmed

    if (count === 0) {
        emptyMessage.textContent = "No requests yet"
    }else{
        emptyMessage.textContent = ""
    }
}
function addRequest() {
    let name = nameInput.value.trim()
    let eventName = eventInput.value.trim();

    if (name === "" || eventName === "") {
        errorMessage.textContent = "Please fill in both fields"
        return;
        
    }errorMessage.textContent = ""
    let li = document.createElement("li");
    li.classList.add("request")
    let info = document.createElement("div")
    info.classList.add("request-info")


    let nameElement = document.createElement("strong")
    nameElement.textContent = name
    let eventElement = document.createElement("p")
    eventElement.textContent = eventName
    let status = document.createElement("span")
    status.classList.add("status")
    status.textContent = 'Pending'

    let confirmButton = document.createElement("button")
    confirmButton.textContent = "Confirm"
    confirmButton.addEventListener("click", () => {
        li.classList.toggle("confirmed")
        if (status.textContent === "Pending") {
            status.textContent = "Confirmed"
            confirmButton.textContent = "Cancel"
        }else{
            status.textContent = "Pending"
            confirmButton.textContent = "Confirm"
        }
        updateCounter()
    })


    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        li.remove()
        updateCounter()
    });

    info.append(nameElement, eventElement, status);
    li.append(info, confirmButton, deleteButton)
    requestList.append(li)
    updateCounter();
    nameInput.value = ''
    eventInput.value = ''
}

addButton.addEventListener("click", addRequest);

clearButton.addEventListener("click", () => {
    let answer = confirm("Delete all requests?")
    if (answer === true) {
        requestList.textContent = ""
        updateCounter()
    }
});
updateCounter()
