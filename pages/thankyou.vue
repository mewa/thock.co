<template>
<div class="pb-5">
  <header>
    <div style="height: 6vw;">
    </div>
    <svg class="bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,100 100,0 100,100"/>
    </svg>
  </header>
  
  <section class="intro my-4">
    <transition name="fade2" appear>
      <div class="container">
        <div class="row">
          <img class="mx-auto" src="/img/success.svg" style="width: 45%;" />
        </div>
      </div>
    </transition>
  </section>

  <div class="mx-auto" style="max-width: 800px;">
    <b-container fluid="md">
      <div class="row mt-5">
        <h6 class="w-100 text-center">Thank you for purchasing the Conundrum</h6>
      </div>
    </b-container>
  </div>

</div>
</template>

<script>
const CART = 'thock-cart';

export default {
  mounted() {
    sessionStorage.removeItem(CART);
  }
}
</script>
