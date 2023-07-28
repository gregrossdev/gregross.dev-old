// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  css: ['/assets/css/main.css'],
  plugins: [
    {
      src: '~/plugins/vue3-particles.ts',
      mode: 'client',
    },
  ],
})
