
const
  $  = (q) => document.querySelector(q),
  $$ = (q) => document.querySelectorAll(q)

const
  navBar  = $('nav'),
  navMenu = $('nav a[button].menu')
  overlay = $('div[overlay]')

// Event listeners

navMenu
  .addEventListener('click',  () => {
    navBar.classList.toggle('open')
    overlay.classList.toggle('active')
  })

window
  .addEventListener('resize', () => {
    if (window.innerWidth > 800)
      navBar.classList.remove('open')
  })


// Nav links

$('nav a[href="{{ page.permalink }}"]:not(.cta)').classList.add('active')
