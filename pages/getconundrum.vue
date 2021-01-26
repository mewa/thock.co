<template>
<div>
  <header>
    <transition name="fade" appear>
      <div class="main container text-white">
        <h1 class="title">
          <router-link class="header-link" to="/">
            Conundrum
          </router-link>
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
  
  <section class="buy container mb-5 pb-5 ">
    <b-row class="my-4">
      <b-col cols="12" lg="5" class="my-3">
        <img class="img-fluid" src="/img/conundrum-main.jpg" />
      </b-col>
      <b-col cols="12" lg="7" class="my-3">
            <b-container class="mx-auto mt-3 mt-sm-0">
              <b-row>
                <b-col>
                  <h4>Top piece:</h4>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-radio-group
                      id="top"
                      v-model="variant.top"
                      :options="topVariants"
                      buttons button-variant="outline-dark"/>
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <h4>Plate:</h4>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-radio-group
                      id="plate"
                      v-model="variant.plate"
                      :options="plateVariants"
                      buttons button-variant="outline-dark"/>
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <h4>Bottom piece:</h4>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-radio-group
                      id="bottom"
                      v-model="variant.bottom"
                      :options="bottomVariants"
                      buttons button-variant="outline-dark"/>
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <h4>Weight:</h4>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-radio-group
                      id="weight"
                      v-model="variant.weight"
                      :options="weightVariants"
                      buttons button-variant="outline-dark"/>
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <h4>Rubber domes:</h4>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-radio-group
                      id="domes"
                      v-model="variant.domes"
                      :options="domeVariants"
                      buttons button-variant="outline-dark"/>
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row>
                <b-col>
                  <h4>Cable:</h4>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="6">
                  <b-form-group>
                    <b-form-select
                      id="cable"
                      v-model="variant.cable"
                      :options="cableVariants"
                      buttons button-variant="outline-dark"/>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <b-form-checkbox
                    id="assembly"
                    v-model="variant.assembly"
                    name="assembly"
                    :value="true"
                    :unchecked-value="false"
                    >
                    Include assembly service ($67)
                  </b-form-checkbox>
                </b-col>
              </b-row>

              <b-row class="mt-4">
                <b-col>
                  <b-button variant="light-accent" @click="goToSummary">Buy</b-button>
                </b-col>
              </b-row>

              <b-row v-if="errors.length > 0">
                <b-col>
                  <b-alert show v-for="error in errors" :key="error" variant="danger">Please select all options.</b-alert>
                </b-col>
              </b-row>
              
            </b-container>
                
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <Features/>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <Carousel id="img-sum" fade class="img-fluid my-4" :images="images" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="video-container">
<iframe class="video" src="https://www.youtube.com/embed/Ok1KSt52fak?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col>
        <FAQ/>
      </b-col>
    </b-row>

  </section>
</div>
</template>

<script>
import Features from '~/components/Features.vue'
import FAQ from '~/components/FAQ.vue'
import Subscribe from '~/components/Subscribe.vue'
import Carousel from '~/components/Carousel.vue'

export default {
  head: {
    script: [
      { src: '/drift.js' }
    ]
  },
  data() {
    return {
      isXs: null,
      errors: [],
      images: [
        '/img/ck/sum/001.jpg',
        '/img/ck/sum/002.jpg',
        '/img/ck/sum/003.jpg',
        '/img/ck/sum/004.jpg',
        '/img/ck/sum/005.jpg',
        '/img/ck/sum/006.jpg',
        '/img/ck/sum/007.jpg',
        '/img/colors-2.jpg',
        '/img/back-black.jpg',
        '/img/angle-3.jpg'
      ],
      variant: { cable: { text: "White" }, ...this.$store.state.variant },
      activeTab: 0,
      topVariants: [
        { text: "Pure white", value: "Pure white" },
        { text: "Classic black", value: "Classic black" },
        { text: "Sunny yellow", value: "Sunny yellow" },
      ],
      plateVariants: [
        { text: "Gold PVD brass", value: "Gold PVD brass" },
      ],
      bottomVariants: [
        { text: "Pure white", value: "Pure white" },
        { text: "Classic black", value: "Classic black" },
        { text: "Sunny yellow", value: "Sunny yellow" },
      ],
      weightVariants: [
        { text: "Gold PVD brass", value: "Gold PVD brass" },
      ],
      domeVariants: [
        { text: "45g", value: "45g" },
        { text: "55g", value: "55g" },
      ],
      cableVariants: [
        { text: "White", value: { text: "White" } },
        { text: "Black", value: { text: "Black" } },
      ]
    }
  },
  components: {
    FAQ,
    Features,
    Subscribe,
    Carousel
  },
  methods: {
    handleVisible(isVisible) {
      this.isXs = isVisible;
    },
    onLoaded () {
      this.loaded = true
    },
    goToSummary() {
      this.errors = [];

      if (!(this.variant.top && this.variant.bottom && this.variant.domes && this.variant.cable))
        this.errors.push({});

      this.variant.plate = this.plateVariants[0].value;
      this.variant.weight = this.weightVariants[0].value;

      if (this.errors.length > 0)
        return;

      this.$store.commit('setVariant', this.variant);
      this.$router.push({ path: '/summary' });
    },
  }
}
</script>

<style lang="scss">
.buy .row {
    margin-bottom: 8px;
}

.video-container {
    position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.header-link {
    color: rgba(255, 255, 255, 0.85);
    &:hover {
        color: #fff;
        text-decoration: none;
    }
}

.details {
    .row {
        align-items: center;
    }
}
</style>
