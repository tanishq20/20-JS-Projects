const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  validateFields(e)
})

function validateFields(e) {
  e.preventDefault()

  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess(username)
  }

  if (email.value === '') {
    showError(email, 'Email is required')
  } else if (!isValidateEmail(email.value)) {
    showError(email, 'Email is not valid')
  } else {
    showSuccess(email)
  }

  if (password.value === '') {
    showError(password, 'Password is required')
  } else {
    showSuccess(password)
  }

  if (password2.value === '') {
    showError(password2, 'Confirm password is required')
  } else {
    showSuccess(password2)
  }
}

function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function isValidateEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  return re.test(email)
}
