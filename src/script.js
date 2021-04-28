import * as $ from 'jquery'
// import Splide from '@splidejs/splide';
// import '@splidejs/splide/dist/css/splide.min.css'
import './css/style.css'
import './images/og-image.png'

$(document).ready(function () {
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

  const navLink = document.querySelectorAll('.navbar-menu_item a');
  const infoLink = document.querySelectorAll('.info-middle a');
  [...navLink, ...infoLink].forEach(link => {
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

  $('#subscribe').submit(function (e) {
    var $this = $(this);
    $this.find('.error').text('')
    e.preventDefault();
    var url = "https://icetea.us3.list-manage.com/subscribe/post-json?u=0fbb6304481fc398e41b28f09&id=5968f8dfbe&c=?";
    $.ajax({
      type: "GET",
      url: url,
      data: $this.serialize(),
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      error: function (err) {
        console.error(err);
        var $error = document.querySelector('.subscribe-info');
        $error.addClass('text-danger').removeClass('text-success').text('Something went wrong, please try again later.');
      },
      success: function (data) {
        var info = document.querySelector('.subscribe-info');
        if (data.result != "success") {
          info.addClass('text-danger').removeClass('text-success').text('Something went wrong, please try again later.');
        } else {
          info.addClass('text-success').removeClass('text-danger').text('Thank you for subscribing.');
        }
      }
    });
  })

  // function resizeSlider() {
  //   const slider = document.querySelector('.slide-wrapper')
  //   const wrapper = slider?.parentElement
  //   if(slider.clientHeight > wrapper.clientHeight) {
  //     wrapper.style.minHeight = slider.clientHeight + 'px'
  //   }
  // }
  //
  // window.addEventListener('resize', resizeSlider);
  //
  // const isMobileReso = window.innerWidth <= 600
  //
  // const splide = new Splide('.splide', {
  //   type: 'loop',
  //   perPage: isMobileReso ? 1 : 3,
  //   perMove: isMobileReso ? 1 : 3,
  //   pagination: false,
  //   autoplay: true,
  //   interval: 8000
  // })
  // splide.on('mounted', function () {
  //   setTimeout(() => {
  //     resizeSlider()
  //   }, 300)
  //   if(isMobileReso) {
  //     document.querySelector('.delimiter__mobile').childNodes[0].classList.add('selected')
  //   } else {
  //     document.querySelector('.delimiter').childNodes[0].classList.add('selected')
  //   }
  // })
  // splide.mount();
  // splide.on('move', function (newIndex) {
  //   let index, delimiter
  //   if(isMobileReso) {
  //     delimiter = document.querySelector('.delimiter__mobile')
  //     index = newIndex
  //   } else {
  //     delimiter = document.querySelector('.delimiter')
  //     index = newIndex / 3
  //   }
  //   const items = delimiter.childNodes
  //   items.forEach(item => {
  //     item.classList.remove('selected')
  //   })
  //   items[index].classList.add('selected')
  // })
})


