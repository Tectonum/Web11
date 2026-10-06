// if (){
//     do
// }
// else if (){
//    do
// }

// true
// 1

// false
// 0
// 0n
// "", ''
// null
// undefined
// NaN \

// let a = 10, b = 12

// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);
// > < >= <=

// let a = +prompt();
// let b = +prompt();
// let c = +prompt();

// if (a>b){
//     c = 'a > b'
// }else if (a < b){
//     c = 'a < b'
// }
// else{
//     c = 'a == b'
// }
// alert(c);

// if (a > b) c = 'a > b';
// else if (a < b) c = 'a < b';
// else c = 'a == b';

// let course = prompt("What is the name of course?"), tittle;
// switch (course) {
//     case 'Figma':
//         tittle = 'Figma';
//         break;
//
//     case 'WEB':
//     case 'HTML':
//     case 'CSS':
//         tittle = 'HTML + CSS';
//         break;
//
//     case 'Javascript':
//     case 'js':
//         tittle = 'JavaScript programming foundations';
//         break;
//
//     default:
//         tittle = 'Courses not found';
// }
// alert(tittle);


//___________________________________________________________

// let product = prompt("What product do you wish to buy"), tittle;
// switch (product) {
//     case > 5000:
//         tittle = 'Figma';
//         break;
//
//     case 'WEB':
//     case 'HTML':
//     case 'CSS':
//         tittle = 'HTML + CSS';
//         break;
//
//     case 'Javascript':
//     case 'js':
//         tittle = 'JavaScript programming foundations';
//         break;
//
//     default:
//         tittle = 'Courses not found';
// }
// alert(tittle);

// Вибачте, не встиг перше бо погано зрозумів на той момент

let delivery = prompt("Delivery type? (courier, post or takeout)"), tittle;

switch (delivery) {
    case 'courier':
        tittle = '200 UAH';
        break;

    case 'post':
        tittle = '100 UAH';
        break;

    case 'takeout':
        tittle = 'free';
        break;

    default:
        tittle = 'Delivery type not found';
}
alert(tittle);

// ____________________________________________________

// let a = true;
// console.log(!a);

// let a = 10, b = 12, c = 5;
// if (a > b && a > c){
//     console.log(a)
// }else if (b > a || a > c){}

