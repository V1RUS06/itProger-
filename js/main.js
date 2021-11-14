
/*====================SCROLL REVEAL===================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  // reset: true
})
sr.reveal('.intro, .first-img', {origin: 'left'})
sr.reveal('.text, .second-img', {origin: 'right'})
sr.reveal('.form_input')
sr.reveal('.faq-item', {interval: 150})
sr.reveal('.title', {origin: 'top', delay: 200})
sr.reveal('.subtitle', {origin: 'bottom', delay: 200})

