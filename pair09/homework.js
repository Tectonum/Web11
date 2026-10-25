let games = [
    {id:1,title : 'Відьмак 3',genre : 'RPG', price : 800, rating: 10, available: true},
    {id:2,title : 'Кіберпанк 2077',genre : 'RPG', price : 900, rating: 8, available: true},
    {id:3,title : 'Майнкрафт',genre : 'Пісочниця', price : 600, rating: 9, available: true},
    {id:4,title : 'Dota 2',genre : 'MOBA', price : 0, rating: 7, available: false},
    {id:5,title : 'CS:GO',genre : 'Шутер', price : 0, rating: 8, available: true},
    {id:6,title : 'S.T.A.L.K.E.R.',genre : 'Шутер', price : 750, rating: 9, available: false}
]
console.log(games)
console.log(games.length)

let newTitle = prompt('Введіть назву гри');
let newGenre = prompt('Введіть жанр');
let newPrice = +prompt('Введіть ціну');
let newRating = +prompt('Введіть рейтинг (1-10)');
games.push({id:7,title : newTitle,genre : newGenre, price : newPrice, rating: newRating, available: true})
console.log(games);

games.pop()
console.log(games);


for (const game of games) {
    console.log(` ${game.title} - ${game.genre}`);
}


let searchUserGame = prompt('введіть назву гри')
let searchGame = games.find(game => game.title === searchUserGame)
if (searchGame !== undefined){
    alert(searchGame.title + ' знайдено')
} else{
    alert('такої гри немає')
}


let maxPrice = +prompt('введіть максимальну ціну')
let affordableGames = games.filter(game => game.price <= maxPrice)
console.log(affordableGames);
let topGames = games.filter(game => game.rating >= 8)
console.log(topGames);

let titles = games.map(game => game.title )
console.log(titles);

let gamesSales = games.map(game => {
    return{
        id:game.id,
        title:game.title,
        genre:game.genre,
        price:Math.round(game.price * 0.85),
        rating:game.rating,
        available:game.available
    }
})
console.log(gamesSales);

let sortedByPrice = games.slice().sort((a,b) => a.price - b.price)
console.log(sortedByPrice);

```javascript
// 3. Individual task

// 1-4. Enter your name, get length, multiply by 100 to get budget
// const myName = prompt('Enter your name:'); 
// const nameLength = myName.length; 
// const myBudget = nameLength * 100; 
// console.log(`My name is ${myName}, and my gaming budget is a whopping $${myBudget}. Don't spend it all in one place!`);



const myName = prompt('Enter your name:');
const nameLength = myName.length;
const myBudget = nameLength * 100;
console.log(`My name is ${myName}, and my gaming budget is a whopping $${myBudget}. Don't spend it all in one place!`);


let availableGames = games.filter(game => game.available === true);
let totalCost = 0;
console.log("Games you can actually buy right now:");
for (const game of availableGames) {
    console.log(`- ${game.title}: $${game.price}`);
    totalCost += game.price;
}
console.log(`Total cost of all available games: $${totalCost}. Ouch, my wallet is already crying.`);

if (totalCost > myBudget) {
    alert(`Error 404: Funds not found! The total cost ($${totalCost}) exceeds your budget ($${myBudget}). Time to find a side hustle!`);
} else {
    let leftover = myBudget - totalCost;
    alert(`Success! You can buy everything and still have $${leftover} left over for pizza.`);
}


let confirmDelete = confirm("Are you absolutely sure you want to delete the last game? It has feelings too.");
if (confirmDelete) {
    games.pop();
    console.log("Game deleted. RIP.", games);
} else {
    console.log("Deletion cancelled. The game lives to see another day.");
}


let newTitle = prompt('Enter game title');
let newGenre = prompt('Enter genre');
let newPrice = Number(prompt('Enter price')); // converted to number
let newRating = Number(prompt('Enter rating (1-10)')); // converted to number
games.push({id:7, title: newTitle, genre: newGenre, price: newPrice, rating: newRating, available: true});