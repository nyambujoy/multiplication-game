const num1 = Math.ceil(Math.random() * 10)
//console.log(num1)
const num2 = Math.ceil(Math.random() * 10)

const questionEl = document.getElementById("question")
const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")


let score = JSON.parse(localStorage.getItem("score"));
//inorder to add the score you also have to parse as it will be a string and you need a number
if (!score) {
    score = 0;
}

scoreEl.innerText = `score : ${score}`
const inputEl = document.getElementById("input")



questionEl.innerText = `what is ${num1} multiply by ${num2} ?`
const correctAns = num1 * num2

formEl.addEventListener("submit", () => {
    const userAns = Number(inputEl.value)
    if (userAns === correctAns) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))//you have to convert it to a string to store it
}


