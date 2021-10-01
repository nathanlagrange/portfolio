<template>
  <div>
    <section id="reverb-top">
      <div id="theeye">
        <img id="eye-l" src="~/assets/img/tsc/eye-l.webp" alt="eye">
        <img id="eye-r" src="~/assets/img/tsc/eye-r.webp" alt="eye">
      </div>
      <div id="reverb-titles">
        <a href="https://bit.ly/3sKUCnB"><img class="reverb-link" src="~/assets/img/icon/download2.svg" alt="télécharger rêverb"></a>
        <div id="reverb-titles__credits">
          <img src="~/assets/img/tsc/logo_tsc.svg" alt="the solace comes">
          <img src="~/assets/img/tsc/olow.svg" alt="o'low">
          <img id="reverbtitle" src="~/assets/img/tsc/RÊVERB.svg" alt="RÊVERB">
        </div>
        <a href="http://smarturl.it/reverb-release/" target="_blank"><img class="reverb-link" src="~/assets/img/icon/play.svg" alt="streamer rêverb"></a>
      </div>
      <div id="reverb-link-mobile">
        <a href="https://bit.ly/3sKUCnB" target="_blank"><img class="reverb-link" src="~/assets/img/icon/download2.svg" alt="télécharger rêverb"></a>
        <a href="http://smarturl.it/reverb-release/" target="_blank"><img class="reverb-link" src="~/assets/img/icon/play.svg" alt="streamer rêverb"></a>
      </div>
      <img id="redvision" src="~/assets/img/icon/eye.webp" alt="red vision">
    </section>
    <section id="video-reverb">
      <a href="https://www.youtube.com/watch?v=6jxo0qom5fw" target="_blank">
        <video src="~/assets/video/video-reverb.webm" autoplay="autoplay" loop />
      </a>
    </section>
    <section id="amorce">
      <div id="mic">
        <img src="~/assets/img/tsc/micro-amorce.webp" alt="the solace comes amorce">
      </div>
      <div id="amorce-titles">
        <img src="~/assets/img/tsc/amorce-title.webp" alt="the solace comes amorce">
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
    justify-content: space-between;
    flex-direction: column;
    @include padding-section;
    padding-top: 15vh;
    padding-bottom: 10vh;
    background: $dark-color;
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
      width: 50px;
      height: auto;
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
  #video-reverb{
    display: flex;
    flex-direction: row;
    height: auto;
    a{
      height: auto;
      video{
        width: 100%;
        height: auto;
        padding: 0;
        margin: 0;
        margin-bottom: -5px;
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
