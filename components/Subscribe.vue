<template>
<div>
  <b-form inline class="subscribe" @submit="onSubmit" v-if="!ok">
    <label class="sr-only" for="inline-form-input-name">Email</label>
    <b-form-input
      id="email"
      class="mb-2 mr-sm-2 mb-sm-0"
      type="email"
      placeholder="your@email.com"
      v-model="email"
      ></b-form-input>
    <b-button class="mx-auto" type="submit" variant="outline-dark" :disabled="waiting">Subscribe</b-button>
</b-form>
  <span class="fade1" v-if="ok">Thank you for subscribing</span>
</div>
</template>

<script>
export default {
  data() {
    return { email: null, waiting: false, ok: null }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      try {
        gtag('event', 'subscribe_clicked', {
          'event_category': 'Newsletter'
        });

        this.waiting = true
        await this.$axios.$put(process.env.API_URL + '/subscribe', { email: this.email })
        this.ok = true

        gtag('event', 'subscribed', {
          'event_category': 'Newsletter'
        });
      } finally {
          this.waiting = false;
      }
    }
  }
}
</script>

<style>
.subscribe {
  animation: 3.5s appear;
}

.fade1 {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
