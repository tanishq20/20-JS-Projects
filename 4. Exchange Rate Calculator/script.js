const currencyEl_one = document.querySelector('#currency-one')
const currencyEl_two = document.querySelector('#currency-two')
const amountEl_one = document.querySelector('#amount-one')
const amountEl_two = document.querySelector('#amount-two')
const swap = document.querySelector('#swap')
const rateEl = document.querySelector('#rate')

currencyEl_one.addEventListener('change', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
amountEl_two.addEventListener('input', calculate)
swap.addEventListener('click', swaps)

function calculate() {
  const curr_one = currencyEl_one.value
  const curr_two = currencyEl_two.value

  fetch(
    `https://v6.exchangerate-api.com/v6/448dbfaeb272de52547eb79b/latest/${curr_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[curr_two]
      rateEl.innerText = `1 ${curr_one} = ${rate} ${curr_two}`
      amountEl_two.value = (rate * amountEl_one.value).toFixed(2)
    })
}

function swaps() {
  const temp = currencyEl_one.value
  currencyEl_one.value = currencyEl_two.value
  currencyEl_two.value = temp
  calculate()
}

calculate()
