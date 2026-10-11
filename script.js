let chance = "X";

const boxes = document.querySelectorAll(".box");
const restart = document.getElementById("restart");

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach(function(box) {

    box.addEventListener("click", function() {

        if (box.innerText === "") {

            box.innerText = chance;

            checkWinner();

            changeChance();
        }

    });

});


function changeChance() {

    if (chance === "X") {
        chance = "O";
    } 
    else {
        chance = "X";
    }

}


function checkWinner() {

    for (let pattern of winningPatterns) {

        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;

        if (a !== "" && a === b && b === c) {

            alert(a + " Wins!");

            return;
        }

    }

}


restart.addEventListener("click", function() {

    boxes.forEach(function(box) {
        box.innerText = "";
    });

    chance = "X";

});