import Vue from 'vue';

Vue.filter('toCurrency', function (value, currency) {
  if (typeof value !== "number") {
    return value;
  }

  return `${currency} ${(Math.ceil(value * 100) / 100).toFixed(2).toLocaleString()}`;
});
