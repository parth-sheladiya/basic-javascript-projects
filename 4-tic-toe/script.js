const boxes =  document.querySelectorAll(".box");
const gameInfo = document.querySelector(".gameInfo");
const btnGame = document.querySelector(".btnNewGame");


let currentPlayer;
let gameGrid;


const gameWinningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function gameInitialize(){
    currentPlayer = 'X';
    // backend pe empty
    gameGrid = ["","","","","","","","",""];
    //  ui pe empty
    boxes.forEach((box , index)=>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
    });


    btnGame.classList.remove("active");
    gameInfo.innerText = `current player - ${currentPlayer}`;
}
gameInitialize();

function xSwapToY(){
    if(currentPlayer == 'X'){
        currentPlayer = '0';
    }else{
        currentPlayer = 'X';
    }
   

    gameInfo.innerText = `current player - ${currentPlayer}`;
}

function checkForWinOrNot(){
    let checkWinOrNot = "";

    gameWinningPositions.forEach((position)=>{
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
                && 
            ((gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]]) )){
                if(gameGrid[position[0]] === "X"){
                    checkWinOrNot = "X"
                }else{
                    checkWinOrNot = "0"
                }
                boxes.forEach((box)=>{
                    box.style.pointerEvents = "none";
                })
        }
    })

    if(checkWinOrNot !== ""){
        gameInfo.innerText= `winner player - ${checkWinOrNot}`; 
        btnGame.classList.add("active");
        return;
    }

    let count =0;
    gameGrid.forEach((box)=>{
        if(box !== ""){
            count++;
        }
    })

    if(count ===9){
        gameInfo.innerText = "game tied";
        btnGame.classList.add("active");

    }

}
    

function handleclick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents ="none";
        // x swap to  0 
        xSwapToY();
        // check for win
        checkForWinOrNot();
    }else{

    }
}

boxes.forEach((box , index)=>{
    box.addEventListener("click", ()=>{
        handleclick(index);
    })
})

btnGame.addEventListener("click", () => {
    gameInitialize();
});