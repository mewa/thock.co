<template>
<div class="pb-5">
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
  
  <section class="intro my-3">
    <transition name="fade2" appear>
      <div class="container">
        <div class="row">
          <h1 class="section-title display-4 w-100 text-center">Summary</h1>
        </div>
      </div>
    </transition>
  </section>
  
  <b-container class="w-sm-75">
    <b-table-simple>
      <b-tr>
        <b-th>Item</b-th>
        <b-th>Price</b-th>
        <b-th>Quantity</b-th>
        <b-th>Tax</b-th>
        <b-th>Total</b-th>
      </b-tr>
      
      <b-tr>
        <b-td>
          Conundrum kit:
          <br/>
          <span class="ml-2">- {{ variant.top }} top</span>
          <br/>
          <span class="ml-2">- {{ variant.plate }} plate</span>
          <br/>
          <span class="ml-2">- {{ variant.bottom }} bottom</span>
          <br/>
          <span class="ml-2">- {{ variant.weight }} weight</span>
          <br/>
          <span class="ml-2">- {{ variant.domes }} domes</span>
          <br v-if="!variant.cable.fancy"/>
          <span v-if="!variant.cable.fancy" class="ml-2">- {{ variant.cable.text }} USB-C cable</span>
        </b-td>
        <b-td>{{ price | toCurrency(currency) }}</b-td>
        <b-td>1</b-td>
        <b-td>{{ taxRate }}</b-td>
        <b-td>{{ priceWithTax(price) | toCurrency(currency) }}</b-td>
      </b-tr>

      <b-tr v-if="variant.cable && variant.cable.fancy">
        <b-td>
          {{ variant.cable.text }} USB-C cable
        </b-td>
        <b-td>{{ cable | toCurrency(currency) }}</b-td>
        <b-td>1</b-td>
        <b-td>{{ taxRate }}</b-td>
        <b-td>{{ priceWithTax(cable) | toCurrency(currency) }}</b-td>
      </b-tr>

      <b-tr v-if="variant.assembly">
        <b-td>
          Assembly service
        </b-td>
        <b-td>{{ assembly | toCurrency(currency) }}</b-td>
        <b-td>1</b-td>
        <b-td>{{ taxRate }}</b-td>
        <b-td>{{ priceWithTax(assembly) | toCurrency(currency) }}</b-td>
      </b-tr>
      
      <b-tr>
        <b-td>
          Express shipping
        </b-td>
        <b-td>{{ shippingPrice() | toCurrency(currency) }}</b-td>
        <b-td>1</b-td>
        <b-td>{{ taxRate }}</b-td>
        <b-td>{{ priceWithTax(shippingPrice()) | toCurrency(currency) }}</b-td>
      </b-tr>

      <b-tr>
        <b-td>
        </b-td>
        <b-td></b-td>
        <b-td></b-td>
        <b-td>Total:</b-td>
        <b-td>{{ total | toCurrency(currency) }}</b-td>
      </b-tr>
    </b-table-simple>
  </b-container>
  
  <b-container class="w-sm-75">
    <hr/>
    <b-row align-h="end" align-v="center">
      <b-col cols="auto">
        Pay in
      </b-col>
      <b-col cols="2">
        <b-form-select variant="light-accent" v-model="currency">
          <b-form-select-option key="USD" value="USD">USD</b-form-select-option>
          <b-form-select-option key="EUR" value="EUR">EUR</b-form-select-option>
        </b-form-select>
      </b-col>
      <b-col cols="auto">
        Ship to
      </b-col>
      <b-col cols="2">
        <b-form-select variant="light-accent" :disabled="nomad" v-model="shipping">
          <b-form-select-option v-for="country in countries" :key="country.code" :value="country">{{ country.name }}</b-form-select-option>
        </b-form-select>
      </b-col>
      <b-col cols="auto">
        <b-form-checkbox v-model="nomad" name="is-nomad"
                         v-b-tooltip.hover.top="'We will ask you to supply a shipping address when we\'re about to ship'"
                         @change="setNomad">I'm a digital nomad</b-form-checkbox>
      </b-col>

      <b-col cols="1" />

      <b-col cols="auto">
        <b-button variant="light-accent" :disabled="shipping == null && !nomad">Checkout</b-button>
      </b-col>
    </b-row>
  </b-container>
  
</div>
</template>

<script>
import Features from '~/components/Features.vue'
import FAQ from '~/components/FAQ.vue'
import Subscribe from '~/components/Subscribe.vue'
import Carousel from '~/components/Carousel.vue'

import Countries from "i18n-iso-countries";
Countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const tax = 0.23;
const tntCountries = ["al", "ad", "at", "be", "by", "ba", "bg", "hr", "cy", "me", "cz", "dk", "ee", "fi", "fr", "gi", "gr", "es", "nl", "ie", "is", "xk", "li", "lt", "lu", "lv", "mk", "mt", "md", "mc", "de", "no", "pt", "ru", "ro", "sm", "rs", "sk", "si", "ch", "se", "tr", "ua", "hu", "gb", "it", "dz", "ai", "ag", "sa", "ar", "aw", "au", "bs", "bh", "bd", "bb", "bz", "bm", "bt", "bo", "br", "bn", "cl", "cn", "cw", "dm", "do", "eg", "ec", "ph", "gd", "gy", "gf", "gp", "gt", "ht", "hn", "hk", "in", "id", "il", "jm", "jp", "jo", "ky", "ca", "qa", "co", "kr", "cr", "kw", "la", "lb", "ly", "mo", "my", "ma", "mq", "mx", "mm", "ms", "np", "ni", "nz", "om", "pk", "ps", "pa", "py", "pe", "za", "pr", "bl", "kn", "lc", "mf", "pm", "vc", "sv", "sg", "sx", "lk", "us", "sr", "th", "tw", "tl", "tt", "tn", "uy", "ve", "vn", "vi", "vg", "tc", "ae", "pl"];
const isEU = (country) => {
  return ["at", "be", "bg", "hr", "cy", "cz", "dk", "ee", "fi", "fr", "de", "gr", "hu", "ie", "it", "lv", "lt", "lu", "mt", "nl", "pl", "pt", "ro", "sk", "es", "si", "se", "gb", "im", "mc"]
    .includes(country.code.toLowerCase());
}

export default {
  computed: {
    taxRate() {
      if (this.nomad)
        return 'TBD';
      if (this.shipping) {
        if (isEU(this.shipping)) {
          return `${tax * 100}%`;
        } else {
          return '0%';
        }
      }
      return null;
    },
    price() {
      return this.prices[this.currency].kit;
    },
    assembly() {
      return this.prices[this.currency].assembly;
    },
    cable() {
      return this.prices[this.currency]['craftcables-cable'];
    },
    total() {
      let price = this.priceWithTax(this.price);
      if (this.variant.assembly) {
        price += this.priceWithTax(this.assembly);
      }
      if (this.variant.cable.fancy) {
        price += this.priceWithTax(this.cable);
      }
      if (this.shipping && this.shipping.code && !this.nomad)
        price += this.priceWithTax(this.shippingPrice())
      return price;
    },
  },
  data () {
    return {
      nomad: false,
      prices: {},
      currency: 'USD',
      variants: this.$store.state.variants,
      variant: this.$store.state.variants[0],
      shipping: { code: 'us', name: Countries.getName('us', "en") },
      countries: []
    }
  },
  async asyncData({ app }) {
    let prices = app.$axios.$get(process.env.API_URL + '/prices');

    let countries = tntCountries.map(e => {
      let name = Countries.getName(e, "en");
      return { code: e, name };
    });
    countries = countries.sort((a, b) => {
      a = a.name;
      b = b.name;
      if (a < b)
        return -1;
      else if (b < a)
        return 1;
      return 0;
    });

    prices = await prices;
    let shipping = { code: prices.defaultCountry.toLowerCase(), name: Countries.getName(prices.defaultCountry, "en") };
    return { countries, prices: await prices, shipping, currency: prices.defaultCurrency };
  },
  methods: {
    setNomad(yes) {
      if (yes)
        this.shipping = { code: 'NONE', name: 'Nomad', price: 'TBD' };
      else
        this.shipping = null;
    },
    priceWithTax(price) {
      if (this.shipping && isEU(this.shipping))
        return price + price * tax;
      return price
    },
    selectShipping(country) {
      this.shipping = country;
    },
    shippingText() {
      if (this.shipping) {
        return this.shipping.name;
      }
      return 'Select';
    },
    shippingPrice() {
      if (this.shipping) {
        if (this.nomad) {
          return 'TBD';
        } else if (isEU(this.shipping)) {
          return this.prices[this.currency]['shipping-eu'];
        } else {
          return this.prices[this.currency]['shipping-global'];
        }
      }
      return null;
    }
  }
}
</script>

<style lang="scss">
</style>
