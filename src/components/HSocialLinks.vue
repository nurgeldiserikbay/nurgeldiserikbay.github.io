<script setup lang="ts">
const SOCIALS = [
  { name: 'twitter', href: '#', icon: 'bi bi-twitter', class: 'twitter' },
  { name: 'facebook', href: '#', icon: 'bi bi-facebook', class: 'facebook' },
  { name: 'instagram', href: '#', icon: 'bi bi-instagram', class: 'instagram' },
  { name: 'linkedin', href: '#', icon: 'bi bi-linkedin', class: 'linkedin' },
]
</script>

<template>
  <div class="h-social-links">
    <a v-for="social in SOCIALS" :key="social.name" :href="social.href" :class="social.class"><i :class="social.icon"></i></a>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/_variables' as var;
@use '@/assets/styles/_mixins' as mixin;

.h-social-links {
  margin-top: 40px;
  display: flex;

  @include mixin.tablet {
    margin-top: 15px;
  }

  a {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    line-height: 1;
    margin-right: 8px;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:hover {
      background: #18d26e;
    }
  }
}

.header-top {
  .h-social-links {
    display: none;
  }
}
</style>
