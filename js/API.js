const $name = document.querySelector('#name')
const $email = document.querySelector('#email')
const $message = document.querySelector('#message')
const $submit__btn = document.querySelector('.submit-btn')

let name = ''
let email = ''
let message = ''

const URL_BASE = 'https://635946bf38725a1746ac64d6.mockapi.io/api/v1'

$name.addEventListener('input', e => {
  name = e.target.value
})

$email.addEventListener('input', e => {
  email = e.target.value
})

$message.addEventListener('input', e => {
  message = e.target.value
})

$submit__btn.addEventListener('click', e => {
  fetch(`${URL_BASE}/offers`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    }
  )
  alert('SENT!')
  setTimeout(() => {
    window.location.reload()
  }, [1000])
})