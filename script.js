function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex].toLowerCase();
}

gameTools = ["rock", "paper", "scissors"];

playGround = (comp_choice, player_choice) => {
    if (comp_choice == "rock" && player_choice == "paper") {
        return (`You Win, ${player_choice} beats ${comp_choice}`);
    }
    else if (comp_choice == "rock" && player_choice == "scissors") {
        return (`You Loss, ${comp_choice} beats ${player_choice}`);
    }
    else if (comp_choice == "rock" && player_choice == "rock") {
        return (`A Draw`);
    }
    else if (comp_choice == "paper" && player_choice == "rock") {
        return (`You Loss, ${comp_choice} beats ${player_choice}`);
    }
    else if (comp_choice == "paper" && player_choice == "scissors") {
        return (`You Win, ${player_choice} beats ${comp_choice}`);
    }
    else if (comp_choice == "paper" && player_choice == "paper") {
        return (`A Draw`);
    }
    else if (comp_choice == "scissors" && player_choice == "paper") {
        return (`You Loss, ${comp_choice} beats ${player_choice}`);
    }
    else if (comp_choice == "scissors" && player_choice == "rock") {
        return (`You Win, ${player_choice} beats ${comp_choice}`);
    }
    else if (comp_choice == "scissors" && player_choice == "scissors") {
        return (`A Draw`);
    }
}
const body = document.querySelector("body")
const btns = document.querySelectorAll(".btn");
const result = document.querySelector("#result");
const final = document.querySelector(".final");
const real = document.querySelector(".real");
const real2 = document.querySelector(".real2");
const field = document.querySelector(".field")
let player_choice = "";
let computerChoice = "";
let comp_score = 0;
let player_score = 0;
let rounds = 0;
let text = "";
let text2 = "";
let text3 = "";

real.classList.add("font");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        player_choice = btn.getAttribute("value");
        computerChoice = getComputerChoice(gameTools);
        // console.log(computerChoice, player_choice)
        if (rounds < 5) {
            text = playGround(computerChoice, player_choice);
            //console.log(playGround(computerChoice, player_choice))
          result.classList.add("font");
          result.textContent = text;
          //  console.log(result);
            //console.log(text)
            if (text.includes("Win")) player_score += 1;
            if (text.includes("Loss")) comp_score += 1;
            // text2 = `Computer: ${comp_score}  Player: ${player_score}`;
            // real.classList.add("font");
           // real.textContent = text2;
           text3 = player_score.toString();
           text2 = comp_score.toString();

           real2.textContent = text3;

           real.textContent = text2;
        }
        rounds += 1;
        if (rounds == 5)
        {
            final.classList.add("font")
            if (player_score > comp_score)
            {
                final.textContent = "YOU WON";
                field.style.backgroundColor = "green";
            }
            else if (player_score < comp_score)
            {
                final.textContent = "YOU LOSS";
                field.style.backgroundColor = "red";
            }
            else {
                final.textContent = "DRAW";
                field.style.backgroundColor = "orange";
            }
            let eventHandled = 0;
            const button = document.createElement("button");
            function handleClick() {
                rounds = 0;
                field.style.backgroundColor = "";
                final.textContent = "";
              }
            button.addEventListener("click", handleClick);
            button.textContent = "Restart"
            button.classList.add("restart");
            body.appendChild(button);
            console.log(rounds)
        }
    })
});