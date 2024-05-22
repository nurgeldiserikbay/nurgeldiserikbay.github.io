import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/HomeView.vue'
import AboutView from '@/pages/AboutView.vue'
import ResumeView from '@/pages/ResumeView.vue'
import ServicesView from '@/pages/ServicesView.vue'
import PortfolioView from '@/pages/PortfolioView.vue'
import ContactView from '@/pages/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/resume', component: ResumeView },
  { path: '/services', component: ServicesView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/contact', component: ContactView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
