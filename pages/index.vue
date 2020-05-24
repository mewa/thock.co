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
    <img class="img-fluid" src="/conundrum.png" />
  </section>

  <section class="container details pt-5">
    <div class="row col-12 justify-content-start text-left">
      <h1 class="section-title display-4 mb-5 pb-3 w-100">Engineered to satisfy the most demanding typists</h1>
    </div>

    <div class="row mb-4">
      <img class="col-5 my-4" src="/conundrum.png" />
      <h3 class="col font-weight-lighter">Electro-capacitive switches with BKE Redux domes in various weights. Bound to make you thock.</h3>
    </div>

    <div class="row my-4">

      <h3 class="col font-weight-lighter">Sturdy 4-piece construction weighing 1400g in total, resting on four rubber feet. For maximum grip.</h3>
      <img class="col-5 my-4" src="/conundrum.png" />
    </div>

    <div class="row my-4">
      <img class="col-5 my-4" src="/conundrum.png" />
      <h3 class="col font-weight-lighter">Any layout you like. Fully programmable, based on the popular QMK firmware.</h3>
    </div>

  </section>

  <section class="container details pt-5">
    <div class="row col-12 justify-content-end text-right">
      <h1 class="section-title display-4 mb-5 pb-3 w-100">Extraordinary looks, luxury at your fingertips</h1>
    </div>

    <div class="row my-4">
      <img class="col-5 my-4" src="/conundrum.png" />
      <h3 class="col font-weight-lighter">Tough electrophoretic coating, vibrant colors.</h3>
    </div>

    <div class="row my-4">
      <h3 class="col font-weight-lighter">Heavy brass weight, mirror polished by hand and PVD coated for extreme durability.</h3>
      <img class="col-5 my-4" src="/conundrum.png" />
    </div>

    <div class="row my-4">
      <img class="col-5 my-4" src="/conundrum.png" />
      <h3 class="col font-weight-lighter">Hand-polished to a luxurious mirror finish, PVD coated brass plate shining through your keycaps.</h3>
    </div>

  </section>
</div>
</template>

<script>
export default {
  data () {
    return {
      loaded: false
    }
  },
  components: {
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
