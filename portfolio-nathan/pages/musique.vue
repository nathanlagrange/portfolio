<template>
  <div>
    <section id="reverb-top">
      <div id="theeye">
        <img id="eye-l" src="~/assets/img/tsc/eye-l.webp" alt="eye">
        <img id="eye-r" src="~/assets/img/tsc/eye-r.webp" alt="eye">
      </div>
      <div class="sep-40" />
      <div id="reverb-titles">
        <a href="https://bit.ly/3sKUCnB"><img class="reverb-link" src="~/assets/img/icon/download2.svg" alt="télécharger rêverb"></a>
        <div id="reverb-titles__credits">
          <img data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800" src="~/assets/img/tsc/logo_tsc.svg" alt="the solace comes">
          <img data-aos="fade" data-aos-duration="1000" data-aos-delay="1600" src="~/assets/img/tsc/olow.svg" alt="o'low">
          <img
            id="reverbtitle"
            data-aos="fade-up"
            data-aos-duration="1000"
            src="~/assets/img/tsc/RÊVERB.svg"
            alt="RÊVERB"
          >
        </div>
        <a href="http://smarturl.it/reverb-release/" target="_blank"><img class="reverb-link" src="~/assets/img/icon/play.svg" alt="streamer rêverb"></a>
      </div>
      <div id="reverb-link-mobile">
        <a href="http://smarturl.it/reverb-release/" target="_blank"><img class="reverb-link" src="~/assets/img/icon/play.svg" alt="streamer rêverb"></a>
      </div>
      <!-- <video
        id="redvision"
        autoplay
        loop
        src="~/assets/img/tsc/eye-loop.mp4"
        alt="red vision"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="2500"
      /> -->
      <img
        id="redvision-picture"
        src="~/assets/img/tsc/EYE.svg"
        alt="red vision"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-easing="ease-out-sine"
        data-aos-delay="2000"
      >
    </section>
    <section id="amorce">
      <div id="mic">
        <img src="~/assets/img/tsc/micro-amorce.webp" alt="the solace comes amorce">
      </div>
      <div id="amorce-titles">
        <img src="~/assets/img/tsc/amorce-title.webp" data-aos="fade" data-aos-duration="2000" alt="the solace comes amorce">
        <div class="sep-30" />
        <div id="platforms">
          <a href="https://open.spotify.com/artist/6aLE276JCRs6kclrdEeaGk" target="_blank"><img src="~/assets/img/icon/spotify.webp" alt="spotify"></a>
          <a href="https://music.apple.com/fr/artist/the-solace-comes/1486098277" target="_blank"><img src="~/assets/img/icon/apple-music.webp" alt="apple music"></a>
          <a href="https://www.deezer.com/fr/artist/77913822" target="_blank"><img src="~/assets/img/icon/deezer.webp" alt="deezer"></a>
          <a href="https://soundcloud.com/thesolacecomes" target="_blank"><img src="~/assets/img/icon/soundcloud.webp" alt="soundcloud"></a>
          <a href="https://www.youtube.com/channel/UCOl7NnwEt98cbrshNtCcxdw" target="_blank"><img src="~/assets/img/icon/youtube.webp" alt="youtube"></a>
          <a href="https://music.amazon.fr/artists/B0812B91FS/the-solace-comes?marketplaceId=A13V1IB3VIYZZH" target="_blank"><img src="~/assets/img/icon/amazon-music.webp" alt="amazon music"></a>
        </div>
      </div>
      <div id="soundcard">
        <img src="~/assets/img/tsc/soundcard-amorce.webp" alt="the solace comes amorce">
      </div>
    </section>
  </div>
</template>
<script>
import anime from 'animejs/lib/anime.es.js'
export default {
  data () {
    return {
      title: 'Musique | Nathan Lagrange - Développeur front-end',
      description: 'Je produis de la musique électronique sous le nom de The Solace Comes depuis mes 18 ans. Voici l\'ensemble de mes morceaux composés !'
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
          content: 'https://nathanlagrange.dev'
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
          content: 'https://ucarecdn.com/ef3c0424-626b-4624-a7b6-96348e9fcc8e/ogimagemusique.webp'
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
          content: 'https://ucarecdn.com/ef3c0424-626b-4624-a7b6-96348e9fcc8e/ogimagemusique.webp'
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
    this.animateEYE1()
    this.animateEYE2()
    this.reverbTITLE()
  },
  methods: {
    animateEYE1 () {
      anime({
        targets: '#eye-l',
        translateY () {
          return anime.random(-10, 50)
        },
        loop: true,
        direction: 'alternate',
        duration: 2000,
        easing: 'easeOutInCubic'
      })
    },
    animateEYE2 () {
      anime({
        targets: '#eye-r',
        translateY () {
          return anime.random(-40, 50)
        },
        delay: 500,
        loop: true,
        direction: 'alternate',
        duration: 2000,
        easing: 'easeOutInCubic'
      })
    },
    reverbTITLE () {
      anime({
        targets: '#reverbtitle',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay (el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/_mixins.scss";
  @import "../assets/css/_colors.scss";
  #reverb-top{
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @include padding-section;
    padding-top: 15vh;
    padding-bottom: 10vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('https://ucarecdn.com/48e0aace-f209-484b-9563-a10f6a40d3d5/-/preview/1800x1800/');
    background-position: 52%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    #theeye{
      img{
        width: auto;
        height: 200px;
        margin: -1.5px;
      }
    }
    #reverb-titles{
      display: flex;
      flex-direction: row;
      justify-content:space-around;
      width: 100%;
      align-items: flex-end;
      margin-top: 25px;
      margin-bottom: 25px;
      .reverb-link{
        width: 45px;
        height: 45px;
        transition: transform 0.5s ease-out;
        &:hover{
          transform: translateY(-5px);
          transition: transform 0.3s ease-out;
        }
      }
      #reverb-titles__credits{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: white;
        img{
          max-width: 500px;
          width: 100%;
          margin-top: 10px;
        }
      }
    }
    #reverb-link-mobile{
      display: none;
    }
    #redvision{
      width: 70px;
      height: 70px;
      margin-top: 10px;
    }
    #redvision-picture{
      width: 80px;
      height: 80px;
      margin-top: 10px;
    }
    #reverb-img{
      img{
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
      }
    }
  }
  @media screen and (max-width: 850px) {
    #reverb-top{
      @include padding-section-mobile;
      #theeye{
        img{
          height: auto;
          width: 50%;
        }
        #eye-l{
            transform: translateX(0)!important;
        }
        #eye-r{
          transform: translateX(0)!important;
        }
      }
      #reverb-titles{
          a{
              display: none;
          }
      }
      #redvision{
        display: none;
      }
      #reverb-link-mobile{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 30px;
        .reverb-link{
          height: 40px;
          width: 40px;
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 667px) {
    #video-reverb{
      display: none;
    }
  }
  #amorce {
    width: 100%;
    min-height: 100vh;
    height: auto;
    background: linear-gradient(180deg, #d61240, #c73c5d);
    background-size: 400% 400%;
    -webkit-animation: amorcegradient 5s ease infinite;
    -moz-animation: amorcegradient 5s ease infinite;
    animation: amorcegradient 5s ease infinite;
    display: flex;
    flex-direction: row;
    @include padding-section;
    #mic{
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 10%;
      padding-top: 10%;
      img{
        max-width: 100px;
        height: auto;
      }
    }
    #amorce-titles{
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img{
        width: 70%;
        height: auto;
      }
      #platforms{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        img{
          height: 35px;
          width: auto;
          margin-left: 10px;
          margin-right: 10px;
          margin-top: 5px;
          margin-bottom: 5px;
          cursor: pointer;
          transition: opacity 0.3s ease;
          &:hover{
            opacity: 0.6;
            transition: opacity 0.3s ease;
          }
        }
      }
    }
    #soundcard{
      width: 20%;
      display: flex;
      align-items: center;
      padding-top: 10%;
      padding-bottom: 10%;
      img{
        max-width: 300px;
        right: 0;
        position: absolute;
        height: auto;
      }
    }
  }
  @-webkit-keyframes amorcegradient {
    0%{background-position:50% 0%}
    50%{background-position:50% 100%}
    100%{background-position:50% 0%}
  }
  @-moz-keyframes amorcegradient {
    0%{background-position:50% 0%}
    50%{background-position:50% 100%}
    100%{background-position:50% 0%}
  }
  @keyframes amorcegradient {
    0%{background-position:50% 0%}
    50%{background-position:50% 100%}
    100%{background-position:50% 0%}
  }
  @media screen and (max-width: 1120px) {
    #amorce{
      padding: 0;
      #mic{
        display: none;
      }
      #amorce-titles{
        width: 100%;
        img{
          width: 75%;
        }
      }
      #soundcard{
        display: none;
      }
    }
  }
  @media screen and (max-width: 499px) {
    #amorce{
      #amorce-titles{
        img{
          width: 100%;
        }
        #platforms{
          img{
            height: 30px!important;
            margin-left: 5px;
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
