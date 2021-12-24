const toggle = document.querySelector('#toggle')
const close = document.querySelector('#close')
const open = document.querySelector('#open')
const modal = document.querySelector('#modal')

toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
)

open.addEventListener('click', () => modal.classList.add('show-modal'))

close.addEventListener('click', () => modal.classList.remove('show-modal'))

// hide modal on click of outside of modal
window.addEventListener('click', (e) =>
  e.target == modal ? modal.classList.remove('show-modal') : false
)
