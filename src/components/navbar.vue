<template>
  <div class="navbar has-shadow" :class="{ isInfo: isActive }">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <span class="icon">
            <i class="fa fa-home"></i>
          </span>
          <span><strong>Home</strong></span>
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to='random'>
            <span class="icon">
              <i class="fa fa-random"></i>
            </span>
            <span>Get a random movie</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    isActive: false
  }
}
</script>

<style lang="sass">
  .isInfo
    background-color: #209cee
    .navbar-item
      color: white
</style>
