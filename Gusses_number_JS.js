let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomnumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let gussesnumber = parseInt(userInput.value);
    if (gussesnumber > randomnumber) {
        gameResult.textContent = "Too High! Try again....";
        gameResult.style.backgroundColor = "#1e217c"
    } else if (gussesnumber < randomnumber) {
        gameResult.textContent = "Too Low! Try again....";
        gameResult.style.backgroundColor = "#1e217c"
    } else if (gussesnumber === randomnumber) {
        gameResult.textContent = "Congratulations......";
        gameResult.style.backgroundColor = "green"
    } else {
        gameResult.textContent = "Please provide valid input";
        gameResult.style.backgroundColor = "#1e217c"
    }

}