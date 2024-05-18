<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'

const SITE_LIST = [
  {
    type: 'Игры',
    list: [
      {
        url: 'https://nurgeldiserikbay.github.io/stonefall/',
        name: 'Stone Fall',
      },
      {
        url: 'https://nurgeldiserikbay.github.io/chessknightpuzzles/',
        name: 'Chess Knight Puzzles',
      },
    ]
  },
  {
    type: 'Сайты',
    list: [
      {
        url: 'https://nurgeldiserikbay.github.io/cargo/ru/auth/login',
        name: 'Cargo',
      },
      {
        url: 'https://nurgeldiserikbay.github.io/cacg/',
        name: 'CACG',
      },
      {
        url: 'https://nurgeldiserikbay.github.io/erg/',
        name: 'ERG',
      },
      {
        url: 'https://nurgeldiserikbay.github.io/jobtron/',
        name: 'JOBTron',
      },
      {
        url: 'https://nurgeldiserikbay.github.io/private_equity_list/',
        name: 'Private Equity List',
      },
      {
        url: 'https://nurgeldiserikbay.github.io/medtour/',
        name: 'MEDTOUR',
      },
      {
        url: 'https://nurgeldiserikbay.github.io/garage/',
        name: 'LIVAN',
      },
      {
        url: 'https://nurgeldiserikbay.github.io/enbek-kz/',
        name: 'ENBEK-KZ',
      },
      {
        url: 'https://nurgeldiserikbay.github.io/aemz/',
        name: 'AEMZ',
      },
    ]
  }
]
</script>

<template>
  <div class="page">
    <MainHeader />

    <div class="resourceses">
      <div v-for="resource in SITE_LIST" :key="resource.type" class="resource">
        <div class="resource__type">{{ resource.type }}</div>
        <div class="resource__list">
          <a v-for="item in resource.list" :key="item.name" :href="item.url" class="resource__item" target="_blank">{{ item.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resourceses {
  padding: 0 15px;
  padding-bottom: 35px;

  .resource {
    margin-bottom: 25px;

    &__type {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 15px;
    }

    &__item {
      color: #020202;
      font-size: 1.6rem;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
