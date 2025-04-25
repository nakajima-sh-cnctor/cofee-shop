// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'coffeeTheme',
      themes: {
        coffeeTheme: {
          dark: false,
          colors: {
            primary: '#6F4E37', // 濃いコーヒー色
            secondary: '#A67B5B', // ラテ色
            accent: '#D2B48C', // カプチーノ色
            error: '#B00020',
            info: '#8D6E63', // 薄いコーヒー色
            success: '#4CAF50',
            warning: '#C9A66B', // ライトブラウン
            background: '#EFEBE9', // 明るいベージュ
          },
        },
      },
    },
    defaults: {
      VContainer: {
        style: 'max-width: 600px',
      },
      VCardTitle: {
        class: 'text-primary',
      },
      VTextField: {
        color: 'primary',
        variant: 'underlined',
      },
      VTextarea: {
        color: 'primary',
        variant: 'underlined',
      },
      VSelect: {
        color: 'primary',
        variant: 'underlined',
      },
      VBtn: {
        color: 'primary',
        style: 'min-width: 150px',
      },
    },
  })
  app.vueApp.use(vuetify)
})
