<template>
  <header :class="{ 'onScroll' : !view.topOfPage }">
    <div id="logo-nav">
      <nuxt-link to="/">
        <img src="../assets/img/logo/logo-nl-white.svg" alt="logo">
      </nuxt-link>
    </div>
    <ul id="links">
      <nuxt-link to="/">
        <li>Accueil</li>
      </nuxt-link>
      <nuxt-link to="/realisations">
        <li>Réalisations</li>
      </nuxt-link>
      <nuxt-link to="/musique">
        <li>Musique</li>
      </nuxt-link>
    </ul>
    <div id="nav-social">
      <a href="https://www.linkedin.com/in/nathanlagrange/" target="_blank"><img src="../assets/img/icon/linkedin.svg" alt="linkedin"></a>
      <a href="https://github.com/nathanlagrange" target="_blank"><img src="../assets/img/icon/github-logo.svg" alt="github"></a>
      <a href="mailto:nathanlagrange98@gmail.com" target="_blank">
        <img id="envelope" src="../assets/img/icon/envelope.svg" alt="envelope">
      </a>
    </div>
    <div id="burger">
      <div id="line__1" class="line" />
      <div id="line__2" class="line" />
      <div id="line__3" class="line" />
    </div>
    <div id="menu-phone" class="on">
      <ul id="menu-phone__list" @click="closeNav()">
        <nuxt-link to="/">
          <li>Accueil</li>
        </nuxt-link>
        <nuxt-link to="/realisations">
          <li>Réalisations</li>
        </nuxt-link>
        <nuxt-link to="/musique">
          <li>Musique</li>
        </nuxt-link>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  scrollToTop: true,
  data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.toggleBurger()
  },
  methods: {
    handleScroll () {
      if (window.pageYOffset > 50) {
        if (this.view.topOfPage) { this.view.topOfPage = false }
      } else if (!this.view.topOfPage) { this.view.topOfPage = true }
    },
    toggleBurger () {
      document.getElementById('burger').addEventListener('click', () => {
        document.getElementById('burger').classList.toggle('toggle')
        document.getElementById('menu-phone').classList.toggle('on')
      })
    },
    closeNav () {
      document.getElementById('menu-phone').classList.add('on')
      document.getElementById('burger').classList.remove('toggle')
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/_mixins.scss";
  @import "../assets/css/_colors.scss";
  header{
    z-index: 1;
    display: flex;
    flex-direction: row;
    height: 10vh;
    width: 100%;
    position: fixed;
    box-sizing: border-box;
    @include padding-section;
    transition: height 0.3s ease-out, background-color 0.3s ease-out;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
    font-size: clamp(10px, calc(0.625rem + ((1vw - 10px) * 1.3)), 36px);
    a.nuxt-link-exact-active{
      font-weight: bold;
      color: $light-color!important;
    }
    &.onScroll{
      background-color: rgba($color: #000000, $alpha: 0.4);
      transition: height 0.5s ease-out, background-color 0.5s ease-out;
      height: 8vh;
      &:hover{
        background-color: rgba($color: #000000, $alpha: 1.0);
      }
    }
    #logo-nav{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      width: 20%;
      z-index: 2;
      img{
        height: 40px;
        width: 40px;
        cursor: pointer;
        transform-origin: center;
        transition: transform 0.6s ease;
        &:hover{
          transition: transform 0.3s ease;
          transform: rotate(-10deg);
        }
      }
    }
    #links{
      height: 100%;
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      a{
        list-style-type: none;
        color: white;
        display: inline;
        padding-left: 2%;
        padding-right: 2%;
        cursor: pointer;
        transition: color 0.3s ease;
        text-decoration: none;
        &:hover{
          color: $light-color;
          transition: color 0.3s ease;
        }
      }
    }
    #nav-social{
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content:flex-end;
      img{
        width: clamp(16px, calc(1rem + ((1vw - 4.8px) * 1.3492)), 50px);
        height:  clamp(16px, calc(1rem + ((1vw - 4.8px) * 1.3492)), 50px);
        margin-left: clamp(16px, calc(1rem + ((1vw - 4.8px) * 1.3492)), 50px);
        cursor: pointer;
        transition: opacity 0.3s ease;
        &:hover{
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
      }
    }
    #burger{
      z-index: 2;
      display: none;
      .line{
        height: 1.2px;
        width: 35px;
        background-color: rgb(255, 255, 255);
        margin-top: 3px;
        margin-bottom: 3px;
        border-radius: 80px;
        padding: 1px;
        transition: transform 0.2s ease, width 0.2s ease;
      }
    }
    .toggle{
      .line{
        width: 30px!important;
      }
      #line__1{
        transform: rotate(-45deg) translate(-5px, 7px);
      }
      #line__2{
        opacity: 0;
      }
      #line__3{
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
    #menu-phone{
      display: none;
    }
  }
  @media screen and (max-width: 999px) {
    header{
      justify-content: space-between;
      #nav-social{
        display: none;
      }
      #links{
        display: none;
      }
      #burger{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        cursor: pointer;
      }
      #menu-phone{
        display: block;
        width: 40%;
        height: 100vh;
        position: fixed;
        top:0;
        right: 0;
        transform: translateX(0%);
        transition: transform 0.6s ease-out;
        background: rgba(0, 0, 0, 1);
        #menu-phone__list{
          font-size: 30px!important;
          font-weight: 400;
          letter-spacing: 0.18em;
          line-height: 80px;
          list-style-type:none;
          color: white;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 50px;
          box-sizing: border-box;
          a{
            cursor: pointer;
            transition: color 0.3s ease;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            &:hover{
              color: $light-color;
              transition: color 0.3s ease;
            }
          }
        }
      }
      .on{
        transform: translateX(100%)!important;
        transition: transform 0.3s ease-out;
      }
    }
  }

  @media screen and (max-width: 850px) {
    header{
      @include padding-section-mobile;
      #menu-phone{
        width: 100%;
      }
    }
  }
</style>
