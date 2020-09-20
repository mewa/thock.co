import Vue from 'vue';

Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    return `USD ${(Math.ceil(value * 100) / 100).toFixed(2).toLocaleString()}`;
});
