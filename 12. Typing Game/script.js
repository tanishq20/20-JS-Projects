const word = document.querySelector('#word')
const text = document.querySelector('#text')
const scoreEl = document.querySelector('#score')
const timeEl = document.querySelector('#time')
const endgameEl = document.querySelector('#end-game')
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

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}

function updateScore() {
  score++
  scoreEl.innerHTML = score
}

addWordToDOM()
