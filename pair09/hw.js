let games = [
    {id:1, title : 'Vader Immortal', genre : 'VR Action', price : 40, rating: 10, available: true},
    {id:2, title : 'Cyberpunk 2077', genre : 'RPG', price : 60, rating: 8, available: true},
    {id:3, title : 'Minecraft', genre : 'Sandbox', price : 30, rating: 9, available: true},
    {id:4, title : 'Green Hell', genre : 'Survival', price : 50, rating: 2, available: false},
    {id:5, title : 'Assetto Corsa', genre : 'Racing Simulation', price : 15, rating: 10, available: true},
    {id:6, title : 'GTA VI', genre : 'Open World Action', price : 999, rating: 10, available: false}
]
console.log(games)
for (const game of games) {
    console.log(` ${game.title} - ${game.genre}`)
}

console.log(`Total games in your backlog that you'll never finish: ${games.length}`)

let newTitle = prompt('Enter game title');
let newGenre = prompt('Enter game genre')
let newPrice = Number(prompt('Enter game price'));
let newRating = Number(prompt('Enter game rating (1-10)'));
games.push({id: 7, title: newTitle, genre: newGenre, price: newPrice, rating: newRating, available: true});
console.log(games);


let searchUserGame = prompt('Enter the name of the game to search:');
let searchGame = games.find(game => game.title === searchUserGame)
if (searchGame !== undefined){
    alert(`Found it! Rating is ${searchGame.rating}/10`);
} else{
    alert('Game not found. Maybe try going outside? Just kidding, check your spelling.');
}

let maxBudget = Number(prompt('Enter your maximum budget:'));
let affordableGames = games.filter(function(game){
    return game.price <= maxBudget
})
console.log(affordableGames)


let topTierGames = games.filter(game => game.rating >= 8)
console.log(topTierGames);

let titles = games.map(game => game.title)
console.log(titles)

let gamesSummerSale = games.map(game => {
    return {
        id: game.id,
        title: game.title,
        genre: game.genre,
        price: Math.round(game.price * 0.85),
        rating: game.rating,
        available: game.available
    }
})
console.log(gamesSummerSale);


let sortedByPrice = games.slice().sort((a,b) => a.price - b.price)
console.log(sortedByPrice)

const myName = "Muslim"
let nameLength = myName.length

let calculatedBudget = nameLength * 100;
console.log(`My name is ${myName}. My gaming budget is ${calculatedBudget} coins. Time to make some poor financial decisions!`);



let availableGames = games.filter(game => game.available === true);
let totalCost = 0

console.log("Games I can actually buy right now:");
availableGames.forEach(game => {
    console.log(`- ${game.title}: ${game.price} coins`)
    totalCost += game.price
    });
console.log(`Total damage to the wallet: ${totalCost} coins.`);

if (totalCost > calculatedBudget) {
    console.log(`Alert! Total cost (${totalCost}) exceeds my budget (${calculatedBudget}). Guess I'm waiting for the next Steam sale...`);
} else {
    let leftover = calculatedBudget - totalCost
    console.log(`Success! I bought them all and still have ${leftover} coins left for snacks.`);
   }
let confirmDelete = confirm("Are you sure you want to delete the last game? It might be a masterpiece!");
if (confirmDelete) {
    games.pop()
    console.log("Game deleted.", games);
} else {
    console.log("Phew, game saved from the void.");
}