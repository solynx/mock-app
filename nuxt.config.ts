import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: "/mock-app/"
  },
  app: {
    baseURL: '/mock-app/' // baseURL: '/<repository>/'
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1600,
      },
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
