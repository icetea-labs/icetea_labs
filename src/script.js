let scroll = 0;
document.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav.navbar');
  navbar.style.background = '#191919';
  scroll++;
  setTimeout(() => {
    scroll--;
    setTimeout(() => {
      if (document.documentElement.scrollTop === 0) navbar.style.background = '';
    }, 500);
  }, 500);
})

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
}

function addFadeUpAnimation (entries, observer) {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fadeUp')
    }
  })
}

const observer = new IntersectionObserver(addFadeUpAnimation, options);
const sections = document.querySelectorAll('.section')
sections.forEach((section) => {
  observer.observe(section)
})

function resizeSlider() {
  const slider = document.querySelector('.slide-wrapper')
  const wrapper = slider?.parentElement
  if(slider.clientHeight > wrapper.clientHeight) {
    wrapper.style.minHeight = slider.clientHeight + 'px'
  }
}

resizeSlider();

window.addEventListener('resize', resizeSlider);

let collapsed = true
const navBtn = document.querySelector('.navbar-button')
navBtn.addEventListener('click', () => {
  const navMenu = document.querySelector('.navbar-menu')
  const nav = document.querySelector('nav.navbar')
  if(collapsed) {
    nav.style.height = '100vh'
    navMenu.classList.remove('collapsed')
    navMenu.classList.add('opened')
  } else {
    nav.style.height = '52px'
    navMenu.classList.remove('opened')
    navMenu.classList.add('collapsed')
  }
  collapsed = !collapsed
})

const navLink = document.querySelectorAll('.navbar-menu_item a')
navLink.forEach(link => {
  const locationId = link.dataset.location
  link.addEventListener('click', () => {
    let timeOut = 0
    if(!collapsed) {
      navBtn.click()
      timeOut = 300
    }
    const location = document.querySelector(locationId)
    setTimeout(() => {
      location.scrollIntoView( {behavior: 'smooth'})
    }, timeOut)
  })
})



