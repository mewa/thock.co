<template>
<b-carousel
  :id="id"
  v-model="slide"
  :interval="interval || 5000"
  :no-animation="noanim"
  :fade="fade"
  indicators
  >
  <b-carousel-slide
    v-for="img in images"
    :img-src="img"
    :key="img"
    ></b-carousel-slide>
</b-carousel>
</template>

<script>
export default {
  props: ['images', 'id', 'interval', 'noanim', 'fade'],
  data() {
    return { slide: null }
  }
}
</script>
