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

  <section class="container py-5">
    <transition name="fade2" appear>
      <b-container fluid class="my-3">
        <b-row>
          <b-col>
            <h2 class="text-center">Group Buy is in progress</h2>
          </b-col>
        </b-row>
        <b-row align-h="center">
          <b-col cols="6" sm="5" md="4" lg="3">
            <b-progress class="my-4" variant="light-accent" value="1" max="1" animated></b-progress>
          </b-col>
        </b-row>
      </b-container>
    </transition>
  </section>

  <section class="container details py-5">
    <transition name="fade2" appear>
      <b-container fluid class="my-3">
        <b-row>
          <b-col>
            <h3 class="text-center">Get updates and group buy notifications</h3>
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
      imagesSummary: [
        '/img/ck/sum/004.jpg',
        '/img/ck/sum/001.jpg',
        '/img/ck/sum/002.jpg',
        '/img/ck/sum/006.jpg',
        '/img/ck/sum/007.jpg'
      ],
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
    },
  }
}
</script>

<style lang="scss">
.fade2-enter-active, .fade2-leave-active {
  transition: opacity 3s ease-in-out;
  transition-delay: 0.5s;
}

.fade2-enter, .fade2-leave-to {
  opacity: 0;
}

.section-title {
    position: relative;
}

.details {
    .row {
        align-items: center;
    }
}
</style>
