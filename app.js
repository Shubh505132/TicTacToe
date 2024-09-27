let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

//console.log("value");
let turn0 = true;
let count = 0;

const WinPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]

];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //box.innerHTML = 'as'
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        count ++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });

});


const gameDraw = () => {
    msg.innerText = "Game is Draw";
    msgContainer.classList.remove("hide");
    disableBox();
}

const resetGame = () => {
    turnO = true;
    count = 0;
    EnableBoxes();
    msgContainer.classList.add("hide");
};

const disableBox = () => {
    for ( let box of boxes)
        box.disabled = true;
};

const EnableBoxes = () => {
    for ( let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
       // msgContainer.classList.remove("hide");
    }
};

const ShowWinner = (winner) => {
    msg.innerText = `Congratulation , ${winner}`;
    msgContainer.classList.remove("Hide");
    disableBox();

}



const checkWinner = () => {
    for (let pattern of WinPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                //console.log("winner", pos1Val);
                ShowWinner(pos1Val);
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
ResetBtn.addEventListener("click", resetGame);



