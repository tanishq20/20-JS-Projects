const search = document.querySelector('#search')
const submit = document.querySelector('#submit')
const random = document.querySelector('#random')
const mealsEl = document.querySelector('#meals')
const resultHeading = document.querySelector('#result-heading')
const single_mealEl = document.querySelector('#single-meal')

submit.addEventListener('submit', searchMeal)

function searchMeal(e) {
  e.preventDefault()

  single_mealEl.innerHTML = ''

  const term = search.value
  console.log(term)

  if (term.trim()) {
    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  } else {
    alert('Please enter a search term')
  }
}
