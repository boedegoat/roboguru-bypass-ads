const questionContents = document.querySelectorAll('.question-content')
const answerContainer = questionContents[questionContents.length - 1]
const adsContainer = answerContainer.nextSibling.nextSibling

adsContainer.style.display = 'none'
answerContainer.setAttribute('style', 'max-height: none')
