function buildQuiz(){}
function showResults(){}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [];

buildQuiz();

submitButton.addEventListener('click', showResults);

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
    };
    resultsContainer.innerHTML = "${numCorrect} out of ${myQuestions.length}";

