function game(player1, player2) {
    let winner = 0;
    if (player1 == 'scissors' && player2 == 'rock') {
        winner = 'You have lost!!!';
    } else if (player1 == 'scissors' && player2 == 'spock') {
        winner = 'You have lost!!!';
    } else if (player1 == 'scissors' && player2 == 'lizard') {
        winner = 'You have won!!!';
    } else if (player1 == 'rock' && player2 == 'scissors') {
        winner = 'You have won!!!';
    } else if (player1 == 'rock' && player2 == 'spock') {
        winner = 'You have lost!!!';
    } else if (player1 == 'rock' && player2 == 'lizard') {
        winner = 'You have won!!!';
    } else if (player1 == 'scissors' && player2 == 'paper') {
        winner = 'You have won!!!'; 
    } else if (player1 == 'paper' && player2 == 'scissors') {
        winner = 'You have lost!!!';
    } else if (player1 == 'paper' && player2 == 'lizard') {
        winner = 'You have lost!!!';
    } else if (player1 == 'paper' && player2 == 'spock') {
        winner = 'You have won!!!';
    } else if (player1 == 'rock' && player2 == 'paper') {
        winner = 'You have lost!!!';
    }  else if (player1 == 'paper' && player2 == 'rock') {
        winner = 'You have won!!!';
    }  else if (player1 == 'scissors' && player2 == 'scissors') {
        winner = 'Draw -,-';
    }  else if (player1 == 'paper' && player2 == 'paper') {
        winner = 'Draw -,-';
    }  else if (player1 == 'rock' && player2 == 'rock') {
        winner = 'Draw -,-';
    } else if (player1 == 'spock' && player2 == 'spock'){
        winner = 'Draw -,-';
    } else if (player1 == 'spock' && player2 == 'lizard'){
        winner = 'You have lost!!!';
    } else if (player1 == 'spock' && player2 == 'rock'){
        winner = 'You have won!!!';
    } else if (player1 == 'spock' && player2 == 'paper'){
        winner = 'You have lost!!!';
    } else if (player1 == 'spock' && player2 == 'scissors'){
        winner = 'You have won!!!';
    } else if (player1 == 'lizard' && player2 == 'lizard'){
        winner = 'Draw -,-';
    } else if (player1 == 'lizard' && player2 == 'spock'){
        winner = 'You have won!!!';
    } else if (player1 == 'lizard' && player2 == 'rock'){
        winner = 'You have lost!!!';
    } else if (player1 == 'lizard' && player2 == 'paper'){
        winner = 'You have won!!!';
    } else if (player1 == 'lizard' && player2 == 'scissors'){
        winner = 'You have lost!!!';
    }
    return winner;
    // console.log(winner);
}

function bot() {
    let max = 4;
    let min = 0;
    let variable = 0;
    variable = Math.floor(Math.random() * (max - min + 1)) + min
    return variable;
}
const botChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function botChoice(n) {
    return botChoices[n];
}

// // DOM

document.addEventListener('DOMContentLoaded', function() {
    // create start
    const divLightbox = document.createElement("div");
        divLightbox.classList.add("lightbox");
        
        const divLightboxCnt = document.createElement("div");
        divLightboxCnt.classList.add("lightbox-cnt");

        const btnClose = document.createElement("button");
        btnClose.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
        `
        divLightbox.append(divLightboxCnt);
        // create end
    // catched
    const container = document.querySelector(".container");
    const panel = document.querySelector(".panel")
    const mainPrompt = document.querySelector(".mainPrompt")
    const opt = document.querySelector(".options");
    const btns = document.querySelectorAll(".btn");
    const oponentResult = document.querySelector(".oponentResult");
    const playerResult = document.querySelector(".resultsPlayer");

    // rotation of logo
    for (const el of btns) {
        el.addEventListener("click", function () {
            mainPrompt.classList.add("rotate");
            setTimeout(() => {
                mainPrompt.classList.remove("rotate");    
            }, 3000);
            console.log("click");
        })
    }

    // game
    let counter1 = 0;
    let counter2 = 0;

    for (const el of btns) {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            let res = game(el.dataset.name, botChoice(bot()));
            setTimeout(() => {
                divLightboxCnt.innerHTML = res;
                document.body.append(divLightbox);
            }, 300);
            setTimeout(() => {
                divLightbox.remove();
            }, 2000);
            setTimeout(() => {
                if (res == "You have won!!!") {
                    counter1 += 1
                } else if (res == "You have lost!!!") {
                    counter2 += 1
                }
                playerResult.innerText = counter1;
                oponentResult.innerText = counter2;
            }, 2000)
           
        })
    }
});
