let games = [
    {id:1,title : 'Vader Immortal',genre : 'VR Action', price : 40, rating: 10,available: true},
    {id:2,title : 'Cyberpunk 2077',genre : 'RPG', price : 60, rating: 8,available: true},
    {id:3,title : 'Minecraft',genre : 'Sandbox', price : 30, rating: 9,available: true},
    {id:4,title : 'Green Hell',genre : 'Survival', price : 50, rating: 2,available: false},
    {id:5,title : 'Assetto Corsa',genre : 'Racing Simulation', price : 15, rating: 10,available: true},
    {id:6,title : 'GTA VI',genre : 'Open World Action', price : 999, rating: 10,available: false}
]
console.log(games);

for (const game of games) {
    console.log(` ${game.title} - ${game.genre}`);
} console.log(games.length);

let newTitle = prompt('Enter game title')
let newGenre = prompt('Enter game genre')
let newPrice = Number(prompt('Enter game price'))
let newRating = Number(prompt('Enter game rating'))
games.push({id:7,title : newTitle,genre : newGenre, price : newPrice, rating: newRating,available: true})
games.pop()

let searchUserGame = prompt('Enter game name')
let searchGame = games.find(game => game.title === searchUserGame)
if (searchGame !== undefined){
    alert(searchGame.title)
} else{
    alert('no such game (skill issue)')
}

let maxBudget = Number(prompt('Enter your maximum budget'))
let affordableGames = games.filter(game => game.price <= maxBudget)
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

const myName = 'Muslim'
let nameLength = myName.length
let calculatedBudget = nameLength * 100

let totalCost = 0
let availableGames = games.filter(game => game.available === true)
availableGames.forEach(function(game) {
    totalCost += game.price
    });

if (totalCost > calculatedBudget) {
    console.log('Cost exceeds budget. I am officially broke.')
} else {
    console.log(calculatedBudget - totalCost)
 }
let confirmDelete = confirm('Delete game? (im serious)')
if (confirmDelete) {
    games.pop()
}