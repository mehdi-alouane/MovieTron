<template>
  <div class="hero is-medium is-bold is-primary">
    <div class="hero-body has-text-centered">
      <h1 class="title">MovieTron</h1>
      <h1 class="subtitle">Let's Find you a good movie to watch</h1>

      <search-form />

    </div>
  </div>
</template>

<script>
import searchForm from './search-form'

export default {
  name: 'hero',
  components: { searchForm }
}
</script>

<style lang="sass" scoped>
  .hero
    background-image: linear-gradient(141deg,#00a16d 0,#0acaac 71%,#05e6e8 100%)
</style>
