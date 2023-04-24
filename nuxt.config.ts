import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  mode: 'static',
  router: {
     base: '/mock-app/'
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  ssr:false,
  
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
         
        },
      },
})
