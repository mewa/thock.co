<template>
<div class="pb-5">
  <header>
    <div style="height: 6vw;">
    </div>
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

  <div class="mx-auto" style="max-width: 800px;">
  <b-container fluid="md">
    <b-table-simple small class="mb-0">
      <b-thead>
      <b-tr>
        <b-th class="w-100" style="border-top: 0px;">Item</b-th>
        <b-th style="border-top: 0px;"></b-th>
        <b-th style="border-top: 0px;">Qty</b-th>
        <b-th style="border-top: 0px;">Price</b-th>
      </b-tr>
      </b-thead>
      <b-tbody>
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
        <b-td><n-link to="/getconundrum">Edit</n-link></b-td>
        <b-td class="text-center">1</b-td>
        <b-td class="text-right"><span>{{ price | toCurrency(currency) }}</span></b-td>
      </b-tr>

      <b-tr v-if="variant.cable && variant.cable.fancy">
        <b-td>
          {{ variant.cable.text }} USB-C cable
        </b-td>
        <b-td><n-link to="/getconundrum">Edit</n-link></b-td>
        <b-td class="text-center">1</b-td>
        <b-td class="text-right">{{ cable | toCurrency(currency) }}</b-td>
      </b-tr>

      <b-tr v-if="variant.assembly">
        <b-td>
          Assembly service
        </b-td>
        <b-td><n-link to="/getconundrum">Edit</n-link></b-td>
        <b-td class="text-center">1</b-td>
        <b-td class="text-right">{{ assembly | toCurrency(currency) }}</b-td>
      </b-tr>
      
      <b-tr>
        <b-td>
          Express shipping
        </b-td>
        <b-td/>
        <b-td  class="text-center">1</b-td>
        <b-td class="text-right" v-if="shippingPrice() != 0.0">{{ shippingPrice() | toCurrency(currency) }}</b-td>
        <b-td class="text-right" v-if="shippingPrice() == 0.0">FREE</b-td>
      </b-tr>
      </b-tbody>
    </b-table-simple>

    <hr class="my-0"/>

    <b-table-simple class="text-right" borderless small>
      <b-tr>
        <b-td class="w-100">Subtotal</b-td>
        <b-td>{{ total | toCurrency(currency) }}</b-td>
      </b-tr>

      <b-tr>
        <b-td class="w-100">VAT {{ taxRate }}</b-td>
        <b-td>{{ totalWithTax - total | toCurrency(currency) }}</b-td>
      </b-tr>

      <b-tr class="font-weight-bold">
        <b-td>Total</b-td>
        <b-td>{{ totalWithTax | toCurrency(currency) }}</b-td>
      </b-tr>
    </b-table-simple>
  </b-container>
  
  <b-container fluid="md">
    <hr/>
    <b-row align-h="end" align-v="center" no-gutters>
      <b-col cols="2" sm="auto" class="mr-auto">
        <b-form-radio-group
          buttons
          size="sm"
          button-variant="outline-secondary"
          v-model="currency"
          :options="currencies">
        </b-form-radio-group>
      </b-col>
      <b-col cols="auto" class="text-right mr-3">
        Ship to
      </b-col>
      <b-col cols="4" sm="4" class="mr-4">
        <b-form-select variant="light-accent" v-model="shipping">
          <b-form-select-option v-for="country in countries" :key="country.code" :value="country">{{ country.name }}</b-form-select-option>
        </b-form-select>
      </b-col>
      <b-col cols="auto">
        <b-button variant="light-accent" :disabled="shipping == null" @click="checkout">Checkout</b-button>
      </b-col>
    </b-row>
  </b-container>
  </div>
  
</div>
</template>

<script>
import Features from '~/components/Features.vue'
import FAQ from '~/components/FAQ.vue'
import Subscribe from '~/components/Subscribe.vue'
import Carousel from '~/components/Carousel.vue'

import Countries from "i18n-iso-countries";
Countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const CART = 'thock-cart';
const saveCart = (item) => {
  sessionStorage.setItem(CART, JSON.stringify(item));
};

const tax = 0.23;
const specialCountries = ["fo", "ax", "gl"];
const tntCountries = ["al", "ad", "at", "be", "by", "ba", "bg", "hr", "cy", "me", "cz", "dk", "ee", "fi", "fr", "gi", "gr", "es", "nl", "ie", "is", "xk", "li", "lt", "lu", "lv", "mk", "mt", "md", "mc", "de", "no", "pt", "ru", "ro", "sm", "rs", "sk", "si", "ch", "se", "tr", "ua", "hu", "gb", "it", "dz", "ai", "ag", "sa", "ar", "aw", "au", "bs", "bh", "bd", "bb", "bz", "bm", "bt", "bo", "br", "bn", "cl", "cn", "cw", "dm", "do", "eg", "ec", "ph", "gd", "gy", "gf", "gp", "gt", "ht", "hn", "hk", "in", "id", "il", "jm", "jp", "jo", "ky", "ca", "qa", "co", "kr", "cr", "kw", "la", "lb", "ly", "mo", "my", "ma", "mq", "mx", "mm", "ms", "np", "ni", "nz", "om", "pk", "ps", "pa", "py", "pe", "za", "pr", "bl", "kn", "lc", "mf", "pm", "vc", "sv", "sg", "sx", "lk", "us", "sr", "th", "tw", "tl", "tt", "tn", "uy", "ve", "vn", "vi", "vg", "tc", "ae", "pl"]
      .concat(specialCountries);
const isEU = (country) => {
  return ["at", "be", "bg", "hr", "cy", "cz", "dk", "ee", "fi", "fr", "de", "gr", "hu", "ie", "it", "lv", "lt", "lu", "mt", "nl", "pl", "pt", "ro", "sk", "es", "si", "se", "gb", "im", "mc"]
    .includes(country.code.toLowerCase());
}

export default {
  computed: {
    taxRate() {
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
      let price = this.price;
      if (this.variant.assembly) {
        price += this.assembly;
      }
      if (this.variant.cable.fancy) {
        price += this.cable;
      }
      if (this.shipping && this.shipping.code)
        price += this.shippingPrice()
      return price;
    },
    totalWithTax() {
      let price = this.priceWithTax(this.price);
      if (this.variant.assembly) {
        price += this.priceWithTax(this.assembly);
      }
      if (this.variant.cable.fancy) {
        price += this.priceWithTax(this.cable);
      }
      if (this.shipping && this.shipping.code)
        price += this.priceWithTax(this.shippingPrice())
      return price;
    },
  },
  data() {
    return {
      variant: this.$store.state.variant,
      currencies: [
        'USD', 'EUR'
      ],
      currency: 'USD'
    };
  },
  async asyncData({ app, store, route }) {
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

    let currency = prices.defaultCurrency;
    let shipping = { code: prices.defaultCountry.toLowerCase(), name: Countries.getName(prices.defaultCountry, "en") };

    if (process.browser) {
      let item = sessionStorage.getItem(CART);
      if (item) {
        item = JSON.parse(item);
        currency = item.currency;
        shipping = item.shipping;

        if (!store.state.variant) {
          store.commit('setVariant', item.variant);
        }
      }

      if (store.state.variant) {
        item = {
          variant: store.state.variant,
          shipping: shipping,
          currency: currency
        };
        saveCart(item);
      }
    }

    return { countries, prices, shipping, currency };
  },
  methods: {
    async checkout() {
      let stripe = Stripe(process.env.STRIPE_KEY);

      const item = {
        variant: this.variant,
        shipping: this.shipping.code,
        currency: this.currency
      };
      let { sessionId } = await this.$axios.$post(process.env.API_URL + '/buy', item);
      stripe.redirectToCheckout({ sessionId });
    },
    priceWithTax(price) {
      if (this.shipping && isEU(this.shipping))
        return Math.round(price * (1 + tax));
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
        if (isEU(this.shipping)) {
          return this.prices[this.currency]['shipping-eu'];
        } else {
          return this.prices[this.currency]['shipping-global'];
        }
      }
      return null;
    },
    saveVariant() {
      const item = {
        variant: this.variant,
        shipping: this.shipping,
        currency: this.currency
      };
      saveCart(item);
    }
  },
  watch: {
    currency() {
      this.saveVariant();
    },
    shipping() {
      this.saveVariant();
    }
  }
}
</script>

<style lang="scss">
</style>
