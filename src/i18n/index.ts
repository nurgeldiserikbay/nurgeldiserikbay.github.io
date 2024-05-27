import { createI18n } from 'vue-i18n'

import kk from './kk'
import en from './en'
import ru from './ru'

export const i18n = createI18n({
  legacy: false,
	locale: 'ru',
	fallbackLocale: 'en',
	messages: {
		kk,
		en,
		ru,
	},
})
