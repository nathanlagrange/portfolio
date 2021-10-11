const axios = require('axios')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nathan Lagrange - Développeur front-end',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Je m\'appelle Nathan Lagrange et je vous souhaite la bienvenue sur mon portfolio dédié à la présentation de mes compétences en développement front-end, web design et production musicale...' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/main.css',
    '@assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@/modules/generator',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap' // toujours en dernier dans la liste des modules
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/mentionslegales',
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  googleFonts: {
    families: {
      Manrope: [300, 400, 500, 600, 700, 800]
    },
    display: 'swap'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'animejs'
    ]
  },
  
  sitemap: {
    hostname: 'https://nathanlagrange.dev',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  loading: {
    color: '#C7CF00',
    height: '2px',
    duration: 5000,
    continuous: true,
    failedColor: 'red'
  },
  
  googleAnalytics: {
    id: 'G-WX4Y787MBD'
  }
}
