<template>
  <div id="global-web">
    <titlepage title="Web 💻" />
    <section id="top-web">
      <div id="top-web__box">
        <p>Cette page est en construction...</p>
        <div class="sep-10" />
        <p><strong>Patience ⏳ !</strong></p>
      </div>
      <div id="top-web__img">
        <a href="#" target="_self">
          <img src="~/assets/img/icon/next.svg" alt="flèche bas">
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
export default {
  layout: 'default',
  data () {
    return {
      title: 'Web | Nathan Lagrange - Développeur front-end',
      description: 'Cette page regroupe l\'ensemble des sites que j\'ai conçu et développé.',
      ogimage: 'https://ucarecdn.com/eb4d88f8-221e-45b6-b2dc-300c468af139/ogimageweb.webp'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        { property: 'og:site_name', content: 'Nathan Lagrange - Développeur front-end' },
        { hid: 'og:type', property: 'og:type', content: 'page' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://nathanlagrange.dev/web'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.ogimage
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:site', content: '@nathanlagrange' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://nathanlagrange.dev'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.ogimage
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://nathanlagrange.dev'
        }
      ]
    }
  },
  mounted () {
    this.animateNEXT()
  },
  methods: {
    animateNEXT () {
      anime({
        targets: '#top-web__img',
        translateY: 10,
        loop: true,
        direction: 'alternate',
        duration: 600,
        easing: 'easeInOutQuad'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
  #global-web{
    background: linear-gradient(0deg, rgba(101, 37, 175, 0.85), rgba(101, 37, 175, 0.85)), url('~/assets/img/bg/bg-code.webp');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
    #top-web{
      min-height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 30vh;
      @include padding-section;
      #top-web__box{
        max-width: 442px;
        height: auto;
        filter: drop-shadow(0px 0px 13px rgba(255, 254, 254, 0.3));
        background: white;
        padding: 25px;
        @include border-radius;
        margin-right: 50px;
      }
      #top-web__img{
        display: none;
        max-width: 442px;
        height: auto;
        margin-left: 50px;
        img{
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 999px) {
    #global-web{
      @include padding-section-mobile;
    }
  }

  @media screen and (max-width: 850px) {
    #global-web{
      #top-web{
        flex-direction: column;
        padding-bottom: 20vh;
        #top-web__box{
          margin-right: 0;
          margin-bottom: 25px;
        }
        #top-web__img{
          margin-left: 0;
          margin-top: 25px;
        }
      }
    }
  }
</style>
