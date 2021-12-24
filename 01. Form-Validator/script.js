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

  //   if (username.value === '') {
  //     showError(username, 'Username is required')
  //   } else {
  //     showSuccess(username)
  //   }

  //   if (email.value === '') {
  //     showError(email, 'Email is required')
  //   } else if (!isValidateEmail(email.value)) {
  //     showError(email, 'Email is not valid')
  //   } else {
  //     showSuccess(email)
  //   }

  //   if (password.value === '') {
  //     showError(password, 'Password is required')
  //   } else {
  //     showSuccess(password)
  //   }

  //   if (password2.value === '') {
  //     showError(password2, 'Confirm password is required')
  //   } else {
  //     showSuccess(password2)
  //   }

  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordMatch(password, password2)
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

// function isValidateEmail(email) {
//   const re =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
//   return re.test(email)
// }

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    )
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less tha ${max} characters`
    )
  } else {
    showSuccess(input)
  }
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Password do not match')
  }
}
