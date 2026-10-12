// let languages = ["Python", "Javascript", "C++"];
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length)
//
// for (let i = 0; i < languages.length; i++) {
//     console.log(languages[i]);
// }
// function gerSum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }
//
// let number = [10, 15, 24, 46]
// console.log(gerSum(number));

// let name = [];
// name.push("Ivan");
// name.push("Ivan2");
// name.pop()
// name.unshift("Ivan3", "Ivan4");
// name.shift();
// console.log(name.slice(0, 1))
//
// console.log(name);


// let color = ['red', 'green', 'blue', 'yellow', 'brown', 'cyan', 'white'];
// //color = color.splice(0, 1, "pink")
// let deleted = color.splice(4, 2)
// color.splice(0, 0, 'pink')
// console.log(color);

// function registerNames(name) {
//     if (name.trim() === "") {
//         alert("Please enter a name");
//         return;
//     }
//     let dublicationName = false
//     for (i = 0; i < name.length; i++) {
//         if (eventNames[i] === name){
//             dublicationName = true;
//         }
//     }
//     if (dublicationName) {
//         alert("Participant registered");
//     }
//     eventNames.push(name)
//     alert(`Participant ${name} registered`)
// }
// function removeNames(name){
//     let index = -1;
//     for (i = 0; i < eventNames.length; i++) {
//         if (eventNames[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//     alert("Couldn't find the participant")
//     }else{
//         eventNames.splice(index, 1)
//         alert("Participant removed");
//     }
// }
// function printCount(){
//     alert(`Number of participants registered ${eventNames.length}`)
// }
// let eventNames = ["Ivan", "Olha", "Maria", "Stepan", "Oleh"]
// // for(let i = 0; i < eventNames.length; i++){
// //     console.log(`${name}`)
// // }
//
// for (let name of eventNames){
//     console.log(`${name}`)
// }
//
// eventNames.forEach(function (name, index){
//     console.log(index)
//     console.log(name)
// })