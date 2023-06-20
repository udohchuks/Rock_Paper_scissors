function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex].toLowerCase();
}

gameTools = ["rock", "paper", "scissors"];
let comp = 0;
let player = 0;

playGround = (comp_choice, player_choice) => {
    if (comp_choice == "rock" && player_choice == "paper") {
        player += 1;
        return (`You WIN, ${player_choice} beats ${comp_choice}`);
    }
    else if (comp_choice == "rock" && player_choice == "scissors") {
        comp += 1;
        return (`You Loss, ${comp_choice} beats ${player_choice}`);
    }
    else if (comp_choice == "rock" && player_choice == "rock") {
        return (`A Draw`);
    }
    else if (comp_choice == "paper" && player_choice == "rock") {
        comp += 1;
        return (`You Loss, ${comp_choice} beats ${player_choice}`);
    }
    else if (comp_choice == "paper" && player_choice == "scissors") {
        player += 1;
        return (`You Win, ${player_choice} beats ${comp_choice}`);
    }
    else if (comp_choice == "paper" && player_choice == "paper") {
        return (`A Draw`);
    }
    else if (comp_choice == "scissors" && player_choice == "paper") {
        comp += 1;
        return (`You Loss, ${comp_choice} beats ${player_choice}`);
    }
    else if (comp_choice == "scissors" && player_choice == "rock") {
        player += 1;
        return (`You Win, ${player_choice} beats ${comp_choice}`);
    }
    else if (comp_choice == "scissors" && player_choice == "scissors") {
        return (`A Draw`);
    }
    else {
        return ("Error");
    }
}
function game() {
    let round = 5;
    for (let i = 0; i < round; i++) {
        let playerSelection = prompt("Enter your selection: ");
        console.log(playGround(getComputerChoice(gameTools), playerSelection.toLowerCase()));
    }

    if (player > comp) {
        console.log("Player Won");
        console.log(`Player: ${player} Computer: ${comp}`);
    }

    else if (player < comp) {
        console.log("Computer Won");
        console.log(`Player: ${player} Computer: ${comp}`);
    }
    else {
        console.log("A Draw")
    }
}
game();