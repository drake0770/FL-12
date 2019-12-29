let maxrandom = 8;
let randomstep = 4;
let usernumber;
const atempsconstant = 3;
let attempts = 3;
let totalprize = 0;
let prize = 100;
let randomnumb;
let usernumbering;
const two = 2;
const onehundred = 100;
let wincosts = prize;
let confirmation1 = true;
let gamestart = confirm('Do you want to play a game?');
if (gamestart === false) {
    alert('You did not become a billionaire, but can.');
} else {
    while (confirmation1) {
        randomnumb = Math.floor(Math.random() * maxrandom);
        for (let i = 3; i > 0; i--) {
            usernumber = prompt('Choose a roulette pocket number from 0 to ' + maxrandom +
                '\nAttempts left: ' + attempts + '\nTotal prize: ' + totalprize + '$' +
                '\nPossible prize on current attempt: ' + wincosts + '$');
            usernumbering = Number(usernumber);
            attempts--;
            if (usernumbering === randomnumb) {
                totalprize += wincosts;
                break;
            }
            wincosts /= two;
        }
        if (usernumbering === randomnumb) {
            confirmation1 = confirm('Congratulation, you won!   Your prize is: ' +
                totalprize + '$. Do you want to continue?');
            if (confirmation1 === false) {
                alert('Thank you for your participation. Your prize is: ' + totalprize + '$');
                confirmation1 = confirm('Do you want to play again?');
                if (confirmation1 === true) {
                    wincosts = onehundred;
                    attempts = atempsconstant;
                }
            } else {
                attempts = atempsconstant;
                prize *= two;
                maxrandom += randomstep;
                wincosts = prize;
            }
        } else {
            alert('Thank you for your participation. Your prize is: ' + totalprize + '$');
            confirmation1 = confirm('Do you want to play again?');
            if (confirmation1 === true) {
                wincosts = onehundred;
                attempts = atempsconstant;
            }
        }
    }
}