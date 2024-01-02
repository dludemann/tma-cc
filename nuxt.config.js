export default defineNuxtConfig({
  app: {
    head: {
      title: 'The Match Artist',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@300;400;700&family=Source+Sans+3:wght@300;400;700&display=swap',
        },
      ],
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-swiper',
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  content: {
    documentDriven: true,
  },
  tailwindcss: {
    viewer: false,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/style/main.scss', '@/assets/css/editor.css'],
});
