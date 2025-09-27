// let gameSqu = [];
// let userSqu = [];
// let startGame = false;
// let colorArr = ["red","blue","yellow","purple"];
// let level = 0;

// let h3 = document.querySelector("h3");
// document.addEventListener("keypress",() =>{
//     if(startGame === false){
//         console.log("Game was started.");
//         startGame = true;

//         levelUp();
//     }
// });

// function levelUp(){
//     level++;
//     h3.innerText = `Level ${level}`;

//     let ranIdx = Math.floor(Math.random() * colorArr.length);
//     let randColor = colorArr[ranIdx];
//     let randBtn = document.querySelector(`#${randColor}`);
//     flashBtn(randBtn);
// }

// function flashBtn (btn){
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 500);
// };

// let btnAll = document.querySelectorAll(".btn");
// for(let btn of btnAll){
//     btn.addEventListener("click",pressBtn);
// };

// function pressBtn (){
//     let btn = this
//     flashBtn(btn);
// }







// let create a game, Game name was Simon Say Game 
// -----------------------------------------------

// let gameSeq = [];
// let userSeq = [];
// let colorArr = ["red","blue","yellow","purple"];
// let startGame = false;
// let level = 0;

// document.addEventListener("keypress", () => {
//     if(startGame === false){
//         console.log("Game was stated!");
//         startGame = true;

//         levelUp();
//     };
// });

// let h3 = document.querySelector("h3");
// function levelUp () {
//     userSeq = [];
//     level++;
//     h3.innerText = `Level ${level}`;

//     let randInx = Math.floor (Math.random() * colorArr.length);
//     let randColor = colorArr[randInx];
//     let accIdCol = document.querySelector(`#${randColor}`);
//     flashBtn(accIdCol);

//     gameSeq.push(randColor);
//     console.log(gameSeq);
// }

// function flashBtn(btn){
//     btn.classList.add("flash");
//     setTimeout(() => {
//         btn.classList.remove("flash");
//     }, 500);
// }

// function pressBtn () {
//     let btn = this;
//     flashBtn(btn);

//     let userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     console.log(userSeq);
//     checkAns(userSeq.length - 1);
// }

// let btnAll = document.querySelectorAll(".btn");
// for(let btn of btnAll){
//     btn.addEventListener("click",pressBtn);
// };


// function checkAns(idx){
//     if(gameSeq[idx] === userSeq[idx]){
//         if(gameSeq.length === userSeq.length){
//             setTimeout(() => {
//                 levelUp();
//             }, 750);
//         }
//     }
//     else{
//         h3.innerText = "Game Over! Press any key to start game";
//         let body = document.querySelector("body");
//         body.classList.add("over");
//         setTimeout(() => {
//             body.classList.remove("over");
//         }, 150);
//         reset();
//     }
// }

// function reset() {
//     level = 0;
//     gameSeq = [];
//     userSeq = [];
//     startGame = false;
// }











// last time i will try same game :-
// ---------------------------------
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
