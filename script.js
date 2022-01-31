
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
     name:"Furkan",
     chips: 145
     }


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $"+ player.chips;


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0 ; i < cards.length;i++){
        cardsEl.textContent +=cards[i] + " "
    }
    sumEl.textContent = "Sum: "+ sum;


    if(sum <=20){
        message = "Do you want to draw a new card?"

    }
    else if(sum === 21){
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true;
        
    }
    else{
        message = "You're out of game "
        
        isAlive = false;
    }
    messageEl.textContent = message;
    
}
function newCard(){
    if(isAlive===true&& hasBlackJack===false){
        console.log("Drawing a new card")
        let card = getRandomCard();
        sum = card+sum
        cards.push(card);
        renderGame();
    }
    }

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*11)
    if(randomCard==1){
        return 11;
    }
    if(randomCard==11 || randomCard ==12 || randomCard ==13){
        return 10;
    }
    else{
        let randomCard = Math.floor(Math.random()*11+1)
        return randomCard;
    }
    
    
}