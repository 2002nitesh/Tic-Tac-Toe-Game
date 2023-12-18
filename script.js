let mainBox = document.querySelector(".container")
let boxes = document.querySelectorAll(".box")
let msg = document.querySelector(".massage")
let newGame = document.querySelector("#new-btn")
let resetBtn = document.querySelector("#rst-btn")
let congoMsg = document.querySelector("#congo-msg")

let turn0 = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false
        } else {
            box.innerText = "X";
            turn0 = true
        }
        box.classList.add("pointer")
        if (boxes[0].innerText != "" &&
            boxes[1].innerText != "" &&
            boxes[2].innerText != "" &&
            boxes[3].innerText != "" &&
            boxes[4].innerText != "" &&
            boxes[5].innerText != "" &&
            boxes[6].innerText != "" &&
            boxes[7].innerText != "" &&
            boxes[8].innerText != ""
        ) {
            boxes.forEach((val) => {
                val.innerText = ""
                val.classList.remove("pointer")
            })
            turn0 = true;
            mainBox.classList.remove("pointer")
        }
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let op1 = boxes[pattern[0]].innerText;
        let op2 = boxes[pattern[1]].innerText;
        let op3 = boxes[pattern[2]].innerText;

        if (op1 != "" && op2 != "" && op3 != "") {
            if (op1 === op2 && op2 === op3) {
                Winner(op1);
            }
        }
    }
}

const Winner = (op1) => {
    msg.classList.remove("hide")
    congoMsg.innerText = `Congratulations 🎉🎉, ${op1} Wins`
    mainBox.classList.add("pointer")
}

newGame.addEventListener("click", () => {
    msg.classList.add("hide")
    boxes.forEach((val) => {
        val.innerText = ""
        val.classList.remove("pointer")
    })
    mainBox.classList.remove("pointer")
})

resetBtn.addEventListener("click", () => {
    boxes.forEach((val) => {
        val.innerText = ""
        val.classList.remove("pointer")
    })
    mainBox.classList.remove("pointer")
})

