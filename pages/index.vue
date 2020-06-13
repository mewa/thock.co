<template>
<div>
  <header>
    <transition name="fade" appear>
      <div class="main container text-white">
        <h1 class="title">
          Conundrum
        </h1>
        <h2 class="subtitle">
          a keyboard by <span class="thock">thock.co</span>
        </h2>
      </div>
    </transition>
    <svg class="bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,100 100,0 100,100"/>
    </svg>
  </header>

  <section class="intro my-5">
    <transition name="fade2" appear>
      <div class="container">
        <h1 class="section-title display-4 w-100">Meet world's first 40% ortholinear, programmable, electro-capacitive keyboard</h1>
        <div class="col-lg-8 mx-auto mt-4">
          Drawing its inspiration from Japanese technology and compact ortholinear keyboards, after two years of prototyping and development, the Conundrum keyboard is now here.
        </div>
      </div>
    </transition>
  </section>

  <section class="container my-5 pt-5">
    <img class="img-fluid" src="/img/conundrum-main.jpg" />
  </section>
  
  <section class="container details py-5">
    <transition name="fade2" appear>
      <b-container fluid class="my-3">
        <b-row>
          <b-col>
            <h3>Get notified when the group buy goes live</h3>
          </b-col>
        </b-row>
      </b-container>
    </transition>
    
    <b-row align-h="center">
      <Subscribe />
    </b-row>
  </section>

  <section class="container details pt-5">
    <div class="row col-12 justify-content-start text-left">
      <h1 class="section-title display-4 mb-5 pb-3 w-100">Engineered to satisfy the most demanding typists</h1>
    </div>

    <div class="row mb-4">
      <b-col cols="12" sm="8">
        <img class="img-fluid my-4" src="/img/conundrum-1.jpg" />
      </b-col>
      <b-col>
        <h3 class="font-weight-lighter">Electro-capacitive switches with rubber domes in various weights. Bound to make you thock.</h3>
      </b-col>
    </div>

    <div class="row my-4">
      <b-col cols="12" sm="8">
        <Carousel id="img-backs" fade class="img-fluid my-4" :images="['/img/back-white.jpg', '/img/back-black.jpg']" />
      </b-col>
      <b-col>
        <h3 class="col font-weight-lighter">Sturdy 4-piece construction weighing roughly 1400g in total, resting on four rubber feet. For maximum grip.</h3>
      </b-col>
    </div>

    <div class="row my-4">
      <b-col cols="12" sm="8">
        <img class="img-fluid my-4" src="/img/conundrum-2.jpg" />
      </b-col>
      <b-col>
        <h3 class="font-weight-lighter">Any layout you like. Fully programmable, based on the QMK firmware.</h3>
      </b-col>
    </div>

  </section>

  <section class="container details pt-5">
    <div class="row col-12 justify-content-start text-left">
      <h1 class="section-title display-4 mb-5 pb-3 w-100">Extraordinary looks, exceptional typing experience</h1>
    </div>

    <div class="row my-4">
      <b-col cols="12" sm="8">
        <Carousel id="img-colors" fade class="img-fluid my-4" :images="['/img/colors-1.jpg', '/img/colors-2.jpg', '/img/colors-3.jpg']" />
      </b-col>
      <b-col>
        <h3 class="font-weight-lighter">Captivating color depth.</h3>
      </b-col>
    </div>

    <div class="row my-4">
      <b-col cols="12" sm="8">
        <Carousel id="img-weights" fade class="img-fluid my-4" :images="['/img/weight-2.jpg', '/img/weight-1.jpg']" />
      </b-col>
      <b-col>
        <h3 class="font-weight-lighter">Heavy brass weight, mirror polished by hand and PVD coated for extreme durability.</h3>
      </b-col>
    </div>

    <div class="row my-4">
      <b-col cols="12" sm="8">
        <img class="img-fluid my-4" src="/img/plate.jpg" />
      </b-col>
      <b-col>
        <h3 class="font-weight-lighter">Hand-polished to a luxurious mirror finish, PVD coated brass plate shining through your keycaps.</h3>
      </b-col>
    </div>


    <div class="row my-4">
      <b-col cols="12" sm="8">
        <Carousel id="img-angle" fade class="img-fluid my-4" :images="['/img/angle-1.jpg', '/img/angle-2.jpg', '/img/angle-3.jpg']" />
      </b-col>
      <b-col>
        <h3 class="font-weight-lighter">Gently angled case.</h3>
      </b-col>
    </div>
  </section>

  <section class="container details pt-5">
    <div class="row col-12 justify-content-start text-left">
      <h1 class="section-title display-4 mb-5 pb-3 w-100">A handful of renders</h1>
    </div>

    <div class="row my-4">
      <b-col cols="12" sm="8">
        <Carousel id="img-renders" :interval="500" noanim class="img-fluid my-4" :images="rendered" />
      </b-col>
      <b-col>
      </b-col>
    </div>

    <div class="row my-4">
      <b-col cols="12" sm="8">
        <img class="img-fluid my-4" src="/img/renders/back.jpg" />
      </b-col>
      <b-col>
      </b-col>
    </div>
  </section>


  <section class="container details py-5">
    <transition name="fade2" appear>
      <b-container fluid class="my-3">
        <b-row>
          <b-col>
            <h3>Get notified when the group buy goes live</h3>
          </b-col>
        </b-row>
      </b-container>
    </transition>

    <b-row align-h="center">
        <Subscribe />
    </b-row>
  </section>
</div>
</template>

<script>
import Subscribe from '~/components/Subscribe.vue'
import Carousel from '~/components/Carousel.vue'

export default {
  head: {
    script: [
      { src: '/drift.js' }
    ]
  },
  data () {
    return {
      loaded: false,
      rendered: [
          '/img/renders/frame.0.png',
          '/img/renders/frame.1.png',
          '/img/renders/frame.2.png',
          '/img/renders/frame.3.png',
          '/img/renders/frame.4.png',
          '/img/renders/frame.5.png',
          '/img/renders/frame.6.png',
          '/img/renders/frame.7.png',
          '/img/renders/frame.8.png',
          '/img/renders/frame.9.png',
          '/img/renders/frame.10.png',
          '/img/renders/frame.11.png',
          '/img/renders/frame.12.png',
          '/img/renders/frame.13.png',
          '/img/renders/frame.14.png',
          '/img/renders/frame.15.png',
          '/img/renders/frame.16.png',
          '/img/renders/frame.17.png',
          '/img/renders/frame.18.png',
          '/img/renders/frame.19.png',
          '/img/renders/frame.20.png',
          '/img/renders/frame.21.png',
          '/img/renders/frame.22.png',
          '/img/renders/frame.23.png',
          '/img/renders/frame.24.png',
          '/img/renders/frame.25.png',
          '/img/renders/frame.26.png',
          '/img/renders/frame.27.png',
          '/img/renders/frame.28.png',
          '/img/renders/frame.29.png',
          '/img/renders/frame.30.png',
          '/img/renders/frame.31.png',
          '/img/renders/frame.32.png',
          '/img/renders/frame.33.png',
          '/img/renders/frame.34.png',
          '/img/renders/frame.35.png',
      ].reverse()
    }
  },
  components: {
    Subscribe,
    Carousel
  },
  methods: {
    onLoaded () {
      this.loaded = true
    }
  }
}
</script>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade2-enter-active, .fade2-leave-active {
  transition: opacity 3s ease-in-out;
  transition-delay: 0.5s;
}

.fade2-enter, .fade2-leave-to {
  opacity: 0;
}

.rel {
    position: relative;
    width: 100%;
    height: 0px;
}

svg.bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 6vw;
  /* set height to pixels if you want angle to change with screen width */
}

svg.top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 6vw;
  /* set height to pixels if you want angle to change with screen width */
}

.section-title {
    position: relative;
}

header, {
    position: relative;
    padding-bottom: 3vw;
    background: #ffb347;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffcc33, #ffb347);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffcc33, #ffb347); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main {
  margin: 0 auto;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 1px;
}

.subtitle {
  margin-top: -24px;
  opacity: 0.7;
  font-weight: 100;
  font-size: 2.4rem;
  word-spacing: 5px;
  /* padding-bottom: 15px; */
}

.details {
    .row {
        align-items: center;
    }
}

html {
  font-size: 0.65em;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 0.7rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 0.8rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1rem;
  }
}

.links {
  padding-top: 15px;
}
</style>
