const word = document.querySelector('#word')
const text = document.querySelector('#text')
const scoreEl = document.querySelector('#score')
const timeEl = document.querySelector('#time')
const endgameEl = document.querySelector('#end-game-container')
const settingsBtn = document.querySelector('#settings-btn')
const settings = document.querySelector('#settings')
const settingsForm = document.querySelector('#settings-form')
const difficultySelect = document.querySelector('#difficulty')

// Event Listener
text.addEventListener('input', (e) => {
  const insertedText = e.target.value

  if (insertedText === randomWord) {
    addWordToDOM()
    updateScore()

    // Clear
    e.target.value = ''

    time += 5

    updateTime()
  }
})

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving',
]

// Init word
let randomWord

// Init score
let score = 0

// Init time
let time = 10

// Focus on text on start
text.focus()

// Start counting down
const timeInterval = setInterval(updateTime, 1000)

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}

// update Score
function updateScore() {
  score++
  scoreEl.innerHTML = score
}

// Updtae Time
function updateTime() {
  time--
  timeEl.innerHTML = time + 's'

  if (time === 0) {
    clearInterval(timeInterval)

    // End game
    gaemOver()
  }
}

// Game over, show end screen
function gaemOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onCLick="location.reload()">Play Again</button>
  `

  endgameEl.style.display = 'flex'
}

addWordToDOM()
