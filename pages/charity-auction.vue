<template>
<div>
  <header>
    <transition name="fade" appear>
      <div class="main container text-white wosp-main">
        <h1 class="">
          <router-link class="header-link" to="/">thock.co</router-link> + <b-img width="96" class="wosp-logo d-inline-block" src="/img/gocc.svg"/>
        </h1>
      </div>
    </transition>
    <svg class="bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,100 100,0 100,100"/>
    </svg>
  </header>
  
  <section class="buy container mb-5 pb-5 ">
    <b-row>
      <h1 class="section-title display-4 w-100 text-center">Charity auction</h1>
    </b-row>

    <b-row class="my-4" align-h="center">
      <b-col sm="10">
        <p>Each year millions of people unite under a common cause and donate to <b-link target="blank" href="https://en.wosp.org.pl/fundacja">The Great Orchestra of Christmas Charity Foundation</b-link>, a foundation that has changed the landscape of public healthcare in Poland. The Orchestra's work is focused on improving care for the youngest and enhancing the level of care offered to senior patients in geriatric and long-term care units. In the 28 years of the Foundation's charitable endeavours, over PLN 1,300,000,000 was raised &ndash; over one billion PLN!</p>

        <p>Continuing this joyous tradition we're holding a charity auction &ndash; 100% of the profits shall help funding Polish healthcare.</p>

        <p>Apart from helping The Great Orchestra of Christmas Charity, participating in this auction is also a one-of-a-kind opportunity to get a personalized Conundrum kit (see <b-link to="/getconundrum">available options</b-link>). Assembly included.</p>
      </b-col>
    </b-row>

    <b-row align-h="center" class="my-5">
      <b-col cols="auto">
        <div class="bid w-100 px-3 pt-4">
          <b-row align-h="center">
            <b-col cols="auto" class="text-center">
              <h4>Auction has ended</h4>
              <h5 class="mb-0"><em>{{ bid }} USD</em></h5>
              <small>Thank you for participating</small>
            </b-col>
          </b-row>

          <b-row class="pb-2 mb-3" align-h="center">
            <b-col cols="auto">
              <small class="text-muted small">Charity auction ended at 11:59pm UTC on Feb 8th 2021</small>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <b-row align-h="center" class="mt-5">
      <b-col sm="10">
        <h3 class="text-center">Learn more about The Great Orchestra of Christmas Charity</h3>
      </b-col>
    </b-row>

    <b-row align-h="center" class="my-4">
      <b-col sm="9" md="8">
        <p>
          The Orchestra is systematically supporting public healthcare in Poland. So far, GOCC has donated over 65 200 pieces of medical equipment to Polish hospitals and clincs, as well as initiated several nationwide medical programmes.</p>

        <p>The vast majority of the financial means to purchase the equipment and finance the running of medical and educational programmes are raised during a one-day public fundraiser. The fundraiser, known as The Grand Finale, is traditionally held on a Sunday in January. The drive is organised locally, and the entire country joins in to 'play' - as in to raise funds - in support of a particular branch of medicine. The objective of each Grand Finale fundraiser is consulted with experts in the field.</p>

        <p>Some of the objectives of the Grand Finales so far include, among others: 
          <ul>
            <li>Children's cardiac surgery</li>
            <li>Traumatology & saving lives of children hurt in accidents </li>
            <li>Saving the lives of newborns and very young children</li>
            <li>Children's Nephrology</li>
            <li>Saving the lives of children with congenital disabilities</li>
            <li>Introducing modern methods of diagnosis and treatment in neonatology and paediatrics </li>
            <li>Children's oncology</li>
            <li>Providing equipment for adequate and dignified care of elderly patients</li>
          </ul>
        </p>
      </b-col>
    </b-row>

    <b-row align-h="center" class="my-5">
      <b-col sm="9" md="8">
        <div class="video-container">
          <iframe class="video" src="https://www.youtube.com/embed/qKPb1Mk2V7I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </b-col>
    </b-row>
  </section>
</div>
</template>
<script>
export default {
  head: {
    script: [
      { src: '/drift.js' }
    ],
    title: "Bid for charity & win a personalized keyboard - Conundrum by Thock.co"
  },
  data() {
    return {
      bid: 500,
      offer: null,
      email: null,
      error: null,
      success: null
    };
  },
  computed: {
    minBid() {
      return Math.ceil(1.05 * this.bid);
    }
  },
  methods: {
    async placeBid() {}
  }
}
</script>
<style>
.wosp-main {
    min-height: 25vh;
}

.bid {
    box-shadow: 0 0 8px rgba(200, 200, 200, 0.5);
    z-index: 14;
    border-radius: 8px;
}
</style>
