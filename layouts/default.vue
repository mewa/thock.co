<template>
  <div>
    <nuxt />
    <footer class="d-flex small justify-content-center py-5 text-secondary" style="opacity: 60%;">
      <span class="mx-3">Conundrum keyboard & <a class="text-dark-accent" href="https://thock.co">thock.co</a> are trademarks of PMC Marcin Chmiel &copy; 2020</span>
      <a class="mx-3 text-dark-accent" href="mailto:marcin@thock.co">Contact</a>
      <a class="mx-3 text-dark-accent" href="/privacy">Privacy</a>
    </footer>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.thock {
    font-weight: 100;
}
</style>
