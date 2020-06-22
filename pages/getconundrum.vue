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
  
  <section class="buy container mb-5 pb-5 ">
    <b-row class="my-4">
      <b-col cols="12" lg="5" class="my-3">
        <img class="img-fluid" src="/img/conundrum-main.jpg" />
      </b-col>
      <b-col cols="12" lg="7" class="my-3">
        <div class="d-sm-none position-fixed" style="height: 0px;" v-b-visible="handleVisible"/>
        <b-tabs :vertical="!isXs" pills v-model="activeTab" @changed="tabsChanged" nav-class="text-danger">
          <b-tab :active="index == activeTab" :title="(index+1).toString()" v-for="(variant, index) in variants" :title-link-class="tabClass(index)" :key="index">
            <b-container class="mx-auto mt-3 mt-sm-0">
              <b-row>
                <b-col>
                  <h4>Top piece:</h4>
                </b-col>
                <b-col>
                  <b-button-close v-if="variants.length > 1" @click="deleteTab" class="close"/>
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
                  <b-button variant="light-accent" @click="goToSummary">Reserve</b-button>
                </b-col>
              </b-row>

              <b-row v-if="errors.length > 0">
                <b-col>
                  <b-alert show v-for="error in errors" variant="danger">Please select all options in Conundrum #{{error+1}}.</b-alert>
                </b-col>
              </b-row>
              
            </b-container>
          </b-tab>
          <template v-slot:tabs-end>
            <b-nav-item v-if="variants.length < 9" link-classes="text-dark" role="presentation" @click.prevent="newTab" href="#">+</b-nav-item>
          </template>
        </b-tabs>
                
      </b-col>
    </b-row>
    
    <b-row>
      <b-col>
        <Features/>
      </b-col>
    </b-row>

    <hr/>

    <b-row>
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
//      { src: '/drift.js' }
    ]
  },
  data () {
    return {
      isXs: null,
      errors: [],
      variants: this.$store.state.variants.map(o => Object.assign({}, o)),
      activeTab: 0,
      topVariants: [
        { text: "Pure white", value: "white" },
        { text: "Classy black", value: "black" },
        { text: "Sunny yellow", value: "yellow" },
      ],
      plateVariants: [
        { text: "Gold PVD brass", value: "gold" },
      ],
      bottomVariants: [
        { text: "Pure white", value: "white" },
        { text: "Classy black", value: "black" },
        { text: "Sunny yellow", value: "yellow" },
      ],
      weightVariants: [
        { text: "Gold PVD brass", value: "gold" },
      ],
      domeVariants: [
        { text: "35g", value: "35g" },
        { text: "45g", value: "45g" },
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
      for (let i = 0; i < this.variants.length; ++i) {
        let variant = this.variants[i];

        if (!(variant.top && variant.bottom && variant.domes))
          this.errors.push(i);

        variant.plate = "gold";
        variant.weight = "gold";
      }

      if (this.errors.length > 0)
        return;

      this.$store.commit('setVariants', this.variants);
      this.$router.push({ path: '/summary' });
    },
    tabsChanged(curr, prev) {
        if (curr.length > prev.length)
            this.activeTab = curr.length - 1;
    },
    newTab() {
      this.variants.push({});
    },
    deleteTab() {
      this.variants.splice(this.activeTab, 1);
    },
    tabClass(index) {
      if (this.activeTab === index)
        return ['bg-dark', 'text-light']
      else
        return ['text-dark']
    }
  }
}
</script>

<style lang="scss">
.buy .row {
    margin-bottom: 8px;
}

.details {
    .row {
        align-items: center;
    }
}
</style>
