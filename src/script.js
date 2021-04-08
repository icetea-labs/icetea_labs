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
    wrapper.style.height = slider.clientHeight + 'px'
  }
}

resizeSlider();

window.addEventListener('resize', resizeSlider)
