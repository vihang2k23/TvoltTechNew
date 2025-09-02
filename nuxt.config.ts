export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image'],
  app: {
    head: {
      title: 'TVOLTTECH - Instrument Transformers',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Manufacturer of high-quality low and medium voltage instrument transformers, current transformers, and voltage transformers.' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})