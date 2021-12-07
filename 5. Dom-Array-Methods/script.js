const main = document.querySelector('#main')
const addUserBtn = document.querySelector('#add-user')
const doubleBtn = document.querySelector('#double')
const showMillionairesBtn = document.querySelector('#show-millionaires')
const sortBtn = document.querySelector('#sort')
const calculateWealthBtn = document.querySelector('#calculate-wealth')

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
}
