<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import LogoType from '@/components/LogoType.vue'
import NavBar from '@/components/NavBar.vue'
import HSocialLinks from '@/components/HSocialLinks.vue'

const route = useRoute()

const isHeaderTop = computed(() => {
  console.log(route.path)
  return route.matched && route.path !== '/'
})
</script>

<template>
  <header class="header" :class="{ 'header-top': isHeaderTop }">
    <div class="container">

      <LogoType />

      <h2 class="header__slogan">I'm a passionate <span>graphic designer</span> from New York</h2>

      <!-- .navbar -->
      <NavBar />

      <HSocialLinks />

    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/_variables' as var;
@use '@/assets/styles/_mixins' as mixin;

.header {
  transition: ease-in-out 0.3s;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 997;
  overflow-y: auto;

  &.header-top {
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);

    @include mixin.small-tablet {
      height: 60px;
    }
  }

  & > * {
    transition: ease-in-out 0.3s;
  }

  .container {
    @include mixin.tablet {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &.header-top .container {
    display: flex;
    align-items: center;
  }

  &__slogan {
    font-size: 24px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.8);

    @include mixin.tablet {
      font-size: 20px;
      line-height: 30px;
    }

    span {
      color: #fff;
      border-bottom: 2px solid #18d26e;
      padding-bottom: 6px;
    }
  }

  &.header-top &__slogan {
    display: none;
  }
}
</style>
