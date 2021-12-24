const movie = document.querySelector('#movie')
const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const total = document.querySelector('#total')

populateUI()

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

  const seatIndex = [...selectedSeat].map((seat) => {
    return [...seats].indexOf(seat)
  })

  localStorage.setItem('selectedSeats', JSON.stringify(seatIndex))

  const selectedSeatLength = Number(selectedSeat.length)
  count.innerText = selectedSeatLength
  total.innerText = selectedSeatLength * ticketPrice
}

function updateTotalPrice(e) {
  ticketPrice = Number(e.target.value)
  setMovieData(e.target.selectedIndex, ticketPrice)
  updateSelectedSeat(e)
}

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected')
      }
    })
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

  if (selectedMovieIndex !== null) {
    movie.selectedIndex = selectedMovieIndex
  }
}

updateSelectedSeat()
