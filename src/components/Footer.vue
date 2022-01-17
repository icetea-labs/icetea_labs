<template>
  <section>
    <div class="info" id="testimonial">
      <img class="info-logo" alt src="../assets/images/logo2.png">
      <div class="info-left">
        <div class="info-address">
          68 Circular Road, #02-01, Singapore 049422
        </div>
        <a href="mailto:info@icetea.io" class="info-mail">info@icetea.io</a>
      </div>
      <div class="info-middle">
        <a data-location="#service">Our services</a>
        <a data-location="#inhouse">In-house</a>
        <a data-location="#subsidiary">Subsidiary</a>
        <a data-location="#ventures">Ventures</a>
        <a data-location="#portfolio">Portfolio</a>
        <!--    <a data-location="#labs">Labs</a>-->
        <!--    <a data-location="">Testimonial</a>-->
        <!--    <a data-location="#partner">Partner</a>-->
      </div>
      <div class="info-right">
        <div class="subscribe">
          <div class="subscribe-title">
            Get the Latest in Your Inbox
            <img alt src="images/underline.png"/>
          </div>
          <form id="subscribe" class="subscribe-form">
            <input type="email" name="EMAIL" placeholder="Enter your email" required/>
            <button>Subscribe</button>
          </form>
          <div class="subscribe-info"></div>
        </div>
        <div class="info-social">
          <!--    <a href="https://t.me/polkafoundry/" target="_blank"><img class="icon-grayscale" alt src="images/telegram.svg"/></a>-->
          <a href="https://twitter.com/Icetea_Labs" target="_blank"><img class="icon-grayscale" alt src="images/twitter.svg"/></a>
          <a href="https://www.linkedin.com/company/icetea-labs" target="_blank"><img class="icon-grayscale" alt src="images/linkedin.svg"/></a>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="footer">
      © Icetea Labs, Singapore, 2021
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
</style>