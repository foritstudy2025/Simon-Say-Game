let colorList = ["red", "blue", "yellow", "purple"];
let gameSeq = [];
let userSeq = [];
let startGame = false;
let level = 0;

let h3 = document.querySelector("h3");
let body = document.querySelector("body");

let wrongSound = new Audio("sounds/error-126627.mp3");

document.addEventListener("keypress", function () {
    if (startGame === false) {
        console.log("Game was started!");
        startGame = true;

        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() * colorList.length);
    let randColor = colorList[randInx];

    let randBtn = document.querySelector(`#${randColor}`);
    flashBtn(randBtn);

    gameSeq.push(randColor);
    console.log("Game Sequence:", gameSeq);
}

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 500);
}

function pressBtn() {
    let btn = this;
    flashBtn(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let btnAll = document.querySelectorAll(".btn");
for (let btn of btnAll) {
    btn.addEventListener("click", pressBtn);
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(() => {
                levelUp();
            }, 750);
        }
    } else {
        h3.innerHTML = `Game Over! Your Score <b>${level}</b> <br> Press any key to start.`;

        wrongSound.play();
        body.classList.add("over");
        setTimeout(() => {
            body.classList.remove("over");
        }, 300);

        reset();
    }
}

function reset() {
    gameSeq = [];
    userSeq = [];
    startGame = false;
    level = 0;
}
