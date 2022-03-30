export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontdemo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { "http-equiv":"x-ua-compatible",content:"IE=edge, chrome=1" },
      { "http-equiv":"Content-Type", content:"text/html; charset=utf-8" },
      { name:"format-detection", content:"telephone=no" },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no,minimal-ui' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/shared/styles/common.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
