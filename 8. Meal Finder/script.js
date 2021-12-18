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
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        resultHeading.innerHTML = `<h2>Search Results for '${term}' :</h2>`

        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no serach results. Try again!</p>`
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) =>
                `<div class='meal'>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class="meal-info" data-mealID="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                </div>
              </div>`
            )
            .join('')
        }
      })

    search.value = ''
  } else {
    alert('Please enter a search term')
  }
}
