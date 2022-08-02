<template>
  <nav class="navbar">
    <a class="navbar-brand" href="/">
      <img alt="icetea labs" src="../assets/../assets/images/logo.svg"/>
      <span class="ml-1">Icetea Labs</span>
    </a>
    <ul class="navbar-menu collapsed">
      <li class="navbar-menu_item">
        <a data-location="#service">Our Services</a>
      </li>
      <li class="navbar-menu_item">
        <a data-location="#inhouse">In-house</a>
      </li>
      <li class="navbar-menu_item">
        <a data-location="#subsidiary">Subsidiary</a>
      </li>
      <li class="navbar-menu_item">
        <a data-location="#ventures">Ventures</a>
      </li>
      <li class="navbar-menu_item">
        <a data-location="#partner">Partner</a>
      </li>
      <li class="navbar-menu_item">
        <a data-location="#portfolio">Portfolio</a>
      </li>
      <li class="navbar-menu_item">
        <a href="#/news">Blog</a>
      </li>
      <li class="navbar-menu_item neon">
        <a target="_blank" href="https://ilap.icetea.io/">Join Accelerator Program</a>
      </li>
    </ul>
    <button class="navbar-button">
      <img alt class="closed" src="../assets/images/menu.svg"/>
      <img alt class="opened" src="../assets/images/close.png"/>
    </button>
    <div class="navbar-info">
      <p>Community</p>
      <div class="info-social">
        <a href="https://twitter.com/Icetea_Labs" target="_blank"><img class="icon-grayscale" alt src="../assets/../assets/images/twitter.svg"/></a>
        <a href="https://www.linkedin.com/company/icetea-labs" target="_blank"><img class="icon-grayscale" alt src="../assets/../assets/images/linkedin.svg"/></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  mounted() {
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
        if(location)
          setTimeout(() => {
            location.scrollIntoView( {behavior: 'smooth'})
          }, timeOut)
      })
    })
  }
}
</script>

<style scoped>

</style>
