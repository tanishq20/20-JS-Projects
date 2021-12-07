const main = document.querySelector('#main')
const addUserBtn = document.querySelector('#add-user')
const doubleBtn = document.querySelector('#double')
const showMillionairesBtn = document.querySelector('#show-millionaires')
const sortBtn = document.querySelector('#sort')
const calculateWealthBtn = document.querySelector('#calculate-wealth')

addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
showMillionairesBtn.addEventListener('click', showMillionaire)
sortBtn.addEventListener('click', sortByRichest)

let data = []

getRandomUser()
getRandomUser()
getRandomUser()

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()
  const user = data.results[0]
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  }
  addData(newUser)
}

function addData(obj) {
  data.push(obj)
  updateDOM()
}

function updateDOM(providedData = data) {
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

  providedData.forEach((item) => {
    const element = document.createElement('div')
    element.classList.add('person')
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`
    main.appendChild(element)
  })
}

function formatMoney(money) {
  return `₹ ${money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}

function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 }
  })
  updateDOM()
}

function showMillionaire() {
  data = data.filter((user) => {
    return user.money > 1000000
  })
  updateDOM()
}

function sortByRichest() {
  data.sort((a, b) => {
    return b.money - a.money
  })
  updateDOM()
}
