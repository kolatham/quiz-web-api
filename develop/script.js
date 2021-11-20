f

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
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
        <div class = "question"> ${currentQuestion}</div>
        );
    output.push(
        <div class = "question">${answers.join("")}</div>
    );
quizContainer.innerHTML = output.join("");
 }


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
    resultsContainer.innerHTML = "${numCorrect} out of ${myQuestions.length}";

    
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
    
    showSlide(currentSlide);

    function showNextSlide() {
        showSlide(currentSlide +1);
    
    }    

nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener('click', showResults);
}
