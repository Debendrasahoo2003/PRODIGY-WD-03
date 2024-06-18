let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true; 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8]
];

const resetGame =() => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerHTML="X";
            turnX = false;
        }
        else{
            box.innerHTML = "O";
            turnX=true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const enableBoxes = () => {
    for( let box of boxes) {
        box.disabled = false;
        box.innerHTML="";
    }
};

const disableBoxes = () => {
    for( let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerHTML=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val!="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
              showWinner(pos1val);
            }
           
        }
    }
};

newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);