

// let randomnumber = 10

// console.log(Math.random(randomnumber)*5);

// if (randomnumber === 4 || randomnumber === 6) {
//     console.log("kareeb ho");
// } else {
//     console.log("door ho");
// }

// Generate random number between 1 and 10
// let randomNumber = Math.floor(Math.random() * 10) + 1;

// console.log("Random number:", randomNumber);

// if (randomNumber === 4 || randomNumber === 6) {
//     console.log("kareeb");
// } else {
//     console.log("door");
// }

let input = document.querySelector("#guessInput")
let button = document.querySelector("#guessButton")

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
function guess() {
    document.innerHTML = ""
    let userGuess = parseInt(document.querySelector("#guessInput").value);
    let result = document.querySelector("#result");
    if (userGuess === randomNumber) {
        result.textContent = "Congratulations! You guessed the correct number.";
    } else {
        result.textContent = "Sorry, try again!";
    }
    
}