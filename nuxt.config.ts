// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui'],
  runtimeConfig: {
    astraDbId: '',
    astraDbRegion: '',
    astraDbKeyspace: '',
    astraDbApplicationToken: '',
    astraDbSecureConnectBundle: '',
    astraDbSecureConnectUsername: '',
    astraDbSecureConnectPassword: '',
    openaiApiKey: '',
  },
  ssr: false,
  tailwindcss: {
    config: {
      plugins: ['@tailwindcss/typography'],
    },
  },
});
