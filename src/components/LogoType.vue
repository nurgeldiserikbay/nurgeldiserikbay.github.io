<script setup lang="ts">
</script>

<template>
  <a href="/" class="h1-custom logotype">
    Emily Jones
  </a>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/_variables' as var;
@use '@/assets/styles/_mixins' as mixin;

.logotype {
  color: #fff;
  line-height: 1;
  display: inline-block;

  &:hover {
    color: #fff;
  }

  @include mixin.tablet {
    font-size: 36px;
  }

  img {
    padding: 0;
    margin: 0;
  }
}

.header-top {
  .logotype {
    margin-right: auto;
    font-size: 36px;

    @include mixin.small-tablet {
      font-size: 26px;
    }

    img {
      max-height: 60px;
      margin-right: 20px !important;
    }
  }
}
</style>
