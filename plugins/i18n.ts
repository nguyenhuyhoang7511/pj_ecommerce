import { createI18n } from 'vue-i18n'
import en from '../locales/en/index'
import jp from '../locales/jp/index'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: useCookie("language").value?.toString() || 'jp',
    messages: {
      en,
      jp
    }
  })

  vueApp.use(i18n)
})