// accesing element and variable declaration 
let welcomepage = document.querySelector(".welcome");
let mainpage = document.querySelector("main");
let winnerpage = document.querySelector(".winner");
let roundClass = document.querySelector(".welcome input");
let startgame = document.querySelector("#start-game");
let choices = document.querySelectorAll(".img-container");
let comment = document.querySelector("#comments");
let computerscore = document.querySelector("#computer");
let playerscore = document.querySelector("#player");
let winnerscore = document.querySelector("#winner");
let restartgame = document.querySelector("#restart");
let newgame = document.querySelector("#new-game");


// setting page to none 
mainpage.classList.add("none");
winnerpage.classList.add("none");

//funciton declaration
const showscore = (playerscr, computerscr) => {
    if (playerscr == computerscr) {
        winnerscore.innerText = `The game is draw by ${playerscr}-${computerscr}`;
    }
    else if (playerscr > computerscr) {
        winnerscore.innerText = `Congratulations you have won the game by ${playerscr}-${computerscr}`;
    }
    else {
        winnerscore.innerText = `Oops! you have lost the game by ${playerscr}-${computerscr}`;
    }
    mainpage.classList.add("none");
    winnerpage.classList.remove("none");
}

const playgame = (rounds) => {
    let Xscore = 0;
    let Cscore = 0;
    let choiceArr = ["stones", "papers", "scissors"];
    let i = 0
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            if (i < rounds) {
                const userchoice = choice.getAttribute("Id");
                let computerchoice = Math.floor(Math.random() * 3);
                if (choiceArr[computerchoice] == userchoice) {
                    comment.innerText = "Last round is Draw";

                    computerscore.innerText = `Score of Computer :- ${Cscore}`;
                    playerscore.innerText = `Score of player :- ${Xscore}`;
                }
                else if (userchoice == "stones") {
                    if (choiceArr[computerchoice] == "papers") {
                        comment.innerText = "computer won the last round";
                        Cscore++;
                        computerscore.innerText = `Score of Computer :- ${Cscore}`;
                        playerscore.innerText = `Score of player :- ${Xscore}`;
                    }
                    else {
                        comment.innerText = "You won the last round";
                        Xscore++;
                        computerscore.innerText = `Score of Computer :- ${Cscore}`;
                        playerscore.innerText = `Score of player :- ${Xscore}`;
                    }
                }
                else if (userchoice == "papers") {
                    if (choiceArr[computerchoice] == "scissors") {
                        comment.innerText = "computer won the last round";
                        Cscore++;
                        computerscore.innerText = `Score of Computer :- ${Cscore}`;
                        playerscore.innerText = `Score of player :- ${Xscore}`;
                    }
                    else {
                        comment.innerText = "You won the last round";
                        Xscore++;
                        computerscore.innerText = `Score of Computer :- ${Cscore}`;
                        playerscore.innerText = `Score of player :- ${Xscore}`;
                    }
                }
                else {
                    if (choiceArr[computerchoice] == "stones") {
                        comment.innerText = "computer won the last round";
                        Cscore++;
                        computerscore.innerText = `Score of Computer :- ${Cscore}`;
                        playerscore.innerText = `Score of player :- ${Xscore}`;
                    }
                    else {
                        comment.innerText = "You won the last round";
                        Xscore++;
                        computerscore.innerText = `Score of Computer :- ${Cscore}`;
                        playerscore.innerText = `Score of player :- ${Xscore}`;
                    }
                }
                i++;
            }
            else {
                showscore(Xscore, Cscore);
            }
        });
    })

}

// js for welcome page 


startgame.addEventListener("click", (evt) => {
    evt.preventDefault();
    let rounds = roundClass.value;
    if (rounds < 1) {
        alert("Enter a number greater than 0");
    }
    else {
        welcomepage.classList.add("none");
        mainpage.classList.remove("none");
    }

    //js for main page 
    playgame(rounds);

});


const ResetGame = () => {
    mainpage.classList.add("none");
    winnerpage.classList.add("none");
    welcomepage.classList.remove("none");
    location.reload();

}

// js for the restart and new game button 

newgame.addEventListener("click", () => {
    ResetGame();
});
restartgame.addEventListener("click", () => {
    ResetGame();
});
