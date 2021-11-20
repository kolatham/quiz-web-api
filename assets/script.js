
var timerEl =document.querySelector("#timer")
var scoreText =document.querySelector("#score")
var secondsLeft = 140;

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "How do you make a button clickable?",
        answers: {
            a:"console.log",
            b:"addEventListener",
            c:"btn",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a:"",
            b:"",
            c:"",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a:"",
            b:"",
            c:"",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a:"",
            b:"",
            c:"",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a:"",
            b:"",
            c:"",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a:"",
            b:"",
            c:"",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a:"",
            b:"",
            c:"",
            d: "",
        },
        correctAnswer: ""
    },
];

function beginQuiz() {
    questionCounter = 0;
    score =0;
    nextQuestions =[...myQuestions];
    getNextQuestion();
}

function nextQuestion() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...myQuestions];
    getNextQuestion();
}

function buildQuiz(){
const output =[];
myQuestions.forEach(
    (currentQuestion, questionNumber) 
  
)
const answers = [];
for(letter in currentQuestion.answers) {
    answers.push(
        <label>
            <input type ="radio" name ="question${questionNumber}" value ="${letter}"></input>
            ${letter} :
            ${currentQuestion.answers[letter]}
        </label>

    );
    output.push(
        <div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
    </div>
quizContainer.innerHTML = output.join(""),

function setTime() {
    Headers.style.display = "none";
    startBtn.style.display ="none";
    var timerInterval = setInterval(function( {
        secondsLeft---;
        timerEl.textContent = secondsLeft + "seconds remaining.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    
}, 1000);
};


function showResults() {
    const answerContainers=quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    myQuestions.forEach(currentQuestion, questionNumber) ;
        const answerContainer = answerContainers[questionNumber];
        const selector ="input[name=question${questionNumber}]:checked";
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = "emerald green";
        }
        else {
            answerContainers[questionNumber].style.color = "ruby red";
        }
    }
    resultsContainer.innerHTML = "${numCorrect} out of ${myQuestions.length}",

    
    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;
        if(currentSlide === slides.length-1) {
            nextButton.style.display = "none";
            submitButton.style.display ="inline-block"
        }
        else{
            nextButton.style.display = "inline-block";
            submitButton.style.display ="none";
        }
        
    }

nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener('click', showResults);
beginButton.addEventListener("click", beginQuiz);
}

z