// let student = {
//     name: 'John Smith',
//     role: 'student',
// }
// // DOM
// console.log(student.name);
// console.log(document.body);

// let heading = document.getElementsByTagName('h1');
// let headingId = document.getElementById('profile-name');
// let skills = document.getElementsByClassName('skill');


// let skills2 = document.querySelector('.skills');
// let skills = document.querySelectorAll('.skills');
// for (let skill of skills) {
//     console.log(skill)
// }

let student = {
    name: 'Muslim Seitkhalil',
    role: '11th grade student',
    city: 'Chaiky',
    portfolio: 'https://github.com'
}

let nameElement = document.querySelector("#profile-name");
// nameElement.textContent = "Muslim Seitkhalil";
let roleElement = document.querySelector(".profile-role");
let cityElement = document.querySelector("#profile-city");
let portfolioElement = document.querySelector("#profile-link");

nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.textContent = student.city;

roleElement.innerHTML = '<strong>' + student.role + '</strong>';

portfolioElement.setAttribute('href', 'https://github.com');
let skillsElement = document.querySelectorAll(".skills");

let skillsArray = ['HTML', 'CSS', 'JavaScript'];
// skillsElement[0].textContent = 'HTML'
// skillsElement[1].textContent = 'CSS'
// skillsElement[2].textContent = 'Javascript'

for (let i = 0; i < skillsArray.length; i++) {
    skillsElement[i].textContent = skillsArray[i];
}