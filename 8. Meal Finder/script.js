const search = document.querySelector('#search')
const submit = document.querySelector('#submit')
const random = document.querySelector('#random')
const mealsEl = document.querySelector('#meals')
const resultHeading = document.querySelector('#result-heading')
const single_mealEl = document.querySelector('#single-meal')

submit.addEventListener('submit', searchMeal)

mealsEl.addEventListener('click', (e) => {
  const mealInfo = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains('meal-info')
    } else {
      return false
    }
  })

  if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealid')
    getMealById(mealID)
  }
})

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
                <div class="meal-info" data-mealid="${meal.idMeal}">
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

function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const meal = data.meals[0]

      addMealToDOM(meal)
    })
}

function addMealToDOM(meal) {
  const ingredients = []

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      )
    } else {
      break
    }
  }

  single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map((ing) => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
    </div>
  `
}
