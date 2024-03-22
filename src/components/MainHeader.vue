<script setup lang="ts">

</script>

<template>
  <header class="header">
    <a href="/" class="header__title">The Light Come</a>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  padding: 35px 15px;
  text-align: center;
  background-color: #020202;
  margin-bottom: 15px;

  &__title {
    text-decoration: none;
    font-size: 2rem;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    text-align: center;

    &:hover,
    &:visited {
      color: #fff;
    }
  }
}
</style>
