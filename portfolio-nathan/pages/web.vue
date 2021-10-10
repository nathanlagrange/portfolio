<template>
  <div id="global-web">
    <titlepage title="Web 💻" />
    <section id="top-web">
      <div id="top-web__box">
        <p>Vous découvrirez ici  l’ensemble des sites web que j’ai développé.</p>
        <p><strong>Bonne navigation 🌊 !</strong></p>
      </div>
      <div id="top-web__img">
        <a href="#web-1" target="_self">
          <img src="~/assets/img/icon/next.svg" alt="flèche bas">
        </a>
      </div>
    </section>
    <a href="https://helpnfiesta.fr" target="_blank">
      <section id="web-1" class="container-web">
        <div class="web-blockimg" />
        <div class="web-blockmeta">
          <span>helpnfiesta.fr</span>
          <h2>site vitrine associatif</h2>
          <div class="sep-20" />
          <div class="web-blockmeta__p">
            <p>
              Ce site à été réalisé durant ma 2ème année d’étude en IUT MMI à l’occasion des projets tutorés.
              J’avais pour mission de <strong>réaliser la conception et l’intégration front-end complète du site</strong> à partir du cahier des
              charges défini avec l’association Help’n Fiesta.
            </p>
            <br>
            <p>
              Le site dispose d’un blog, un système complexe
              d’adhésion, une interface de donation et diverses pages.
            </p>
          </div>
          <div class="sep-20" />
          <div class="web-blockmeta__icons">
            <img src="~/assets/img/icon/js-white.svg" alt="javascript">
            <img src="~/assets/img/icon/figma-white.svg" alt="figma">
            <img src="~/assets/img/icon/wordpress-white.svg" alt="wordpress">
          </div>
        </div>
      </section>
    </a>
    <a href="https://flouvaps.fr" target="_blank">
      <section id="web-2" class="container-web">
        <div class="web-blockimg" />
        <div class="web-blockmeta">
          <span>flouvaps.fr</span>
          <h2>site de e-commerce sportif</h2>
          <div class="sep-20" />
          <div class="web-blockmeta__p">
            <p>
              Ce projet est le fruit d’une partie de mon stage de fin d’IUT en développement web.
              <strong>
                Je me suis chargé de la critique de l’existant, de la création de l’expérience utilisateur
                et du développement du site.
              </strong>
            </p>
            <br>
            <p>
              J’ai intégré un système de gestion d’utilisateur et d’abonnement entièrement sécurisé avec
              la possibilité de publier du contenu restreint sur certaines pages.
            </p>
          </div>
          <div class="sep-20" />
          <div class="web-blockmeta__icons">
            <img src="~/assets/img/icon/figma-white.svg" alt="figma">
            <img src="~/assets/img/icon/wordpress-white.svg" alt="wordpress">
          </div>
        </div>
      </section>
    </a>
    <a href="https://helene-boyer.com" target="_blank">
      <section id="web-3" class="container-web">
        <div class="web-blockimg" />
        <div class="web-blockmeta">
          <span>helene-boyer.com</span>
          <h2>site vitrine astrologie</h2>
          <div class="sep-20" />
          <div class="web-blockmeta__p">
            <p>
              Je souhaitais me faire la main sur <strong>le framework Vue JS (Nuxt)</strong> et malgré un processus
              laborieux pour maitriser cette technologie, j’ai pu mieux
              <strong>
                appréhender l’environnement de Node JS
              </strong>
              et découvrir mon potentiel avec cet outil.
            </p>
            <br>
            <p>
              J’ai intégré un système de gestion d’utilisateur et d’abonnement entièrement sécurisé avec
              la possibilité de publier du contenu restreint sur certaines pages.
            </p>
          </div>
          <div class="sep-20" />
          <div class="web-blockmeta__icons">
            <img src="~/assets/img/icon/figma-white.svg" alt="figma">
            <img src="~/assets/img/icon/wordpress-white.svg" alt="wordpress">
          </div>
        </div>
      </section>
    </a>
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
    min-height: 300vh;
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
        max-width: 442px;
        height: auto;
        margin-left: 50px;
        img{
          cursor: pointer;
        }
      }
    }
    a{
      text-decoration: none;
      cursor: default;
    }
    .container-web{
      width: 100%;
      min-height: 100vh;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 6%;
      padding-right: 6%;
    }
    .web-blockimg{
      background-size: cover;
      background-position: top;
      @include border-radius;
      height: 400px;
      width: 50%;
      cursor: pointer;
    }
    .web-blockmeta{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      height: 400px;
      width: 50%;
      padding-left: 50px;
      span{
        color: $light-color;
        cursor: pointer;
        font-size: 20px;
        transition: opacity 0.3s ease;
        &:hover{
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
      }
      h2{
        color: white;
        text-align: right;
        width: 100%;
      }
      .web-blockmeta__p{
        @include border-radius;
        padding-top: 35px;
        padding-bottom: 35px;
        padding-right: 20px;
        padding-left: 20px;
        width: 120%;
        p{
          color: white;
          text-align: right;
          width: 100%;
        }
      }
      .web-blockmeta__icons{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: auto;
        img{
          margin-left: 10px;
          height: 30px;
          width: 30px;
        }
      }
    }
    #web-1{
      padding-top: 15vh!important;
      .web-blockimg{
        background-image: url('https://ucarecdn.com/ff1b728c-27af-4e5f-bea8-52f85e953ad4/hnfblockimg.webp');
      }
      .web-blockmeta__p{
        background: rgba(61, 135, 224, 0.8);
      }
    }
    #web-2{
      .web-blockimg{
        background-image: url('https://ucarecdn.com/5b6b1643-26b6-45ba-b54b-8960000d677d/flouvapsblockimg.webp');
      }
      .web-blockmeta__p{
        background: rgba(30, 30, 30, 0.8);
      }
    }
    #web-3{
      .web-blockimg{
        background-image: url('https://ucarecdn.com/0a86e00f-d4c3-4ccd-932b-8173415ee30e/hbblockimg.webp');
      }
      .web-blockmeta__p{
        background: rgba(255, 255, 255, 0.8);
        p{
          color: black;
        }
      }
    }
  }

  @media screen and (max-width: 999px) {
    #global-web{
      @include padding-section-mobile;
    }
    #web-1{
      .web-blockmeta__p{
        background: linear-gradient(0deg, rgba(61, 135, 224, 0.8), rgba(61, 135, 224, 0.8)), url('https://ucarecdn.com/ff1b728c-27af-4e5f-bea8-52f85e953ad4/hnfblockimg.webp')!important;
        background-size: cover!important;
        background-position: top!important;
      }
    }
    #web-2{
      .web-blockmeta__p{
        background: linear-gradient(0deg, rgba(30, 30, 30, 0.8), rgba(30, 30, 30, 0.8)), url('https://ucarecdn.com/5b6b1643-26b6-45ba-b54b-8960000d677d/flouvapsblockimg.webp')!important;
        background-size: cover!important;
        background-position: top!important;
      }
    }
    #web-3{
      .web-blockmeta__p{
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://ucarecdn.com/0a86e00f-d4c3-4ccd-932b-8173415ee30e/hbblockimg.webp')!important;
        background-size: cover!important;
        background-position: top!important;
      }
    }
    .container-web{
      flex-direction: column !important;
      padding: 0!important;
      margin-bottom: 50px;
    }
    .web-blockimg{
      display: none!important;
    }
    .web-blockmeta{
      height: auto!important;
      width: auto !important;
      padding: 0px!important;
      align-items: flex-start!important;
      h2{
        text-align: left!important;
      }
      .web-blockmeta__p{
        width: 100%!important;
        p{
          text-align: left!important;
        }
      }
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
