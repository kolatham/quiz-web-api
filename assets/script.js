const question =document.querySelector("#question");
const choices =Array.from(document.querySelectorAll(".choice-text"));
const progressText =document.querySelector("#progressText");
const scoreTest =document.querySelector("#score");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let availableQuestions =[]


let questions = [
    {
        question: "What is...",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
    },
    {
        question: "What is...",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
    },
    {
        question: "What is...",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
    },
    {
        question: "What is...",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
    },
    {
        question: "What is...",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
    },
]
const score_points = 10
const max_questions = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter >max_questions) {
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = "Question ${questionCounter} of ${max_questions}"

    const questionsIndex = Math.floor(Math.random()*availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion ["choice" + number]
    })

    availableQuestions.splice(questionIndex,1)

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]
        
        let classToApply = selectAnswer ==currentQuestion.answer ? "correct" :
        "incorrect"

        if(classToApply === "correct") {
            incrementScore(score_points)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
        
    })
})

incrementScore =num =>{
    score +=numscoreText.innerText = score
}

startGame()