const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = document.querySelector("#mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const max_high_scores = 4
finalScore.innerText = mostRecentScore

username.addEventListener("keyup", () =>{
    
    saveScoresBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(4)

    localStorage.setItem("highScores", JSON.stringify(highScores))

    window.location.assign ("/")
}