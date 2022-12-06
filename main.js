const questionContents = document.querySelectorAll('.question-content')
const answerContainer = questionContents[questionContents.length - 1]
const answers = [...answerContainer.children]

answers.forEach((p) => {
    console.log(p.textContent)
})
