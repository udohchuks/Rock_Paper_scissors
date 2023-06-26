let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const result = document.querySelector(".result")
const rock = document.querySelector(".emoji.r")
const paper = document.querySelector(".emoji.p")
const scissors = document.querySelector(".emoji.s")
let compChoice = "";
let text = ""
let random = 0;
choices = ["rock", "paper", "scissors"]
const variables = {
    rock: rock,
    scissors: scissors,
    paper: paper,
};

function Win(userChoice, compChoice) {
    text = `You WIN! ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()} 🥳`;
    result.innerHTML = text;
    userScore += 1
    userScore_span.innerHTML = userScore.toString()
    compScore_span.innerHTML = compScore.toString()
    variables[userChoice].classList.add("glow-win");
    setTimeout(() => {variables[userChoice].classList.remove("glow-win");}, 800);
}
function Loss(userChoice, compChoice) {
    text = `You LOSS!! ${compChoice.toUpperCase()} beats ${userChoice} 😭`;
    result.innerHTML = text;
    compScore += 1
    userScore_span.innerHTML = userScore.toString()
    compScore_span.innerHTML = compScore.toString()
    variables[userChoice].classList.add("glow-loss");
    setTimeout(() => {variables[userChoice].classList.remove("glow-loss");}, 800);
}
function draw(userChoice, compChoice) {
    text = `A Draw!! 🤝`;
    result.innerHTML = text;
    userScore_span.innerHTML = userScore.toString()
    compScore_span.innerHTML = compScore.toString()
    variables[userChoice].classList.add("glow-draw");
    setTimeout(() => {variables[userChoice].classList.remove("glow-draw");}, 800);
}
function playGround(userChoice) {
    random = Math.floor(Math.random() * 3)
    compChoice = choices[random];
    console.log(userChoice, compChoice)
    switch (userChoice + compChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            Win(userChoice, compChoice);
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            Loss(userChoice, compChoice);
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            draw(userChoice, compChoice);
            break;
    }
}

function game() {
    rock.addEventListener("click", () => {
        playGround("rock")
    })
    paper.addEventListener("click", () => {
        playGround("paper")
    })
    scissors.addEventListener("click", () => {
        playGround("scissors")
    })
}
game()