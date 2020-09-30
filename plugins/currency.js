import Vue from 'vue';

Vue.filter('toCurrency', function (value, currency) {
  if (typeof value !== "number") {
    return value;
  }

  return `${currency} ${(value / 100).toFixed(2).toLocaleString()}`;
});
