const movie = document.querySelector('#movie')
const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const total = document.querySelector('#total')
let ticketPrice = Number(movie.value)

container.addEventListener('click', (e) => selectSeat(e))

movie.addEventListener('change', (e) => updateTotalPrice(e))

function selectSeat(e) {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected')
    updateSelectedSeat(e)
  }
}

function updateSelectedSeat(e) {
  const selectedSeat = document.querySelectorAll('.row .seat.selected')
  const selectedSeatLength = Number(selectedSeat.length)
  count.innerText = selectedSeatLength
  total.innerText = selectedSeatLength * ticketPrice
}

function updateTotalPrice(e) {
  ticketPrice = e.target.value
  updateSelectedSeat(e)
}
