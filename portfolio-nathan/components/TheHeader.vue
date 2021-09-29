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
      <nuxt-link to="/web">
        <li>Web</li>
      </nuxt-link>
      <nuxt-link to="/design">
        <li>Design</li>
      </nuxt-link>
      <nuxt-link to="/musique">
        <li>Musique</li>
      </nuxt-link>
      <nuxt-link to="/contact">
        <li>Contact</li>
      </nuxt-link>
    </ul>
    <div id="nav-social">
      <a href="https://www.linkedin.com/in/nathan-l-584085111/" target="_blank"><img id="linkedin" src="../assets/img/icon/linkedin.svg" alt="linkedin"></a>
      <nuxt-link to="/contact">
        <img id="envelope" src="../assets/img/icon/envelope.svg" alt="envelope">
      </nuxt-link>
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
        <nuxt-link to="/web">
          <li>Web</li>
        </nuxt-link>
        <nuxt-link to="/design">
          <li>Design</li>
        </nuxt-link>
        <nuxt-link to="/musique">
          <li>Musique</li>
        </nuxt-link>
        <nuxt-link to="/contact">
          <li>Contact</li>
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
    height: 100px;
    width: 100%;
    position: fixed;
    box-sizing: border-box;
    @include padding-section;
    transition: all 0.3s ease-out;
    &.onScroll{
      background-color: rgba($color: #000000, $alpha: 0.4);
      transition: all 0.5s ease-out;
      height: 75px;
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
        width: 25px;
        height: 25px;
        cursor: pointer;
        transition: opacity 0.3s ease;
        &:hover{
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
      }
      #linkedin{
        margin-right: 10px;
      }
    }
    #burger{
      z-index: 2;
      display: none;
      .line{
        height: 1.2px;
        width: 35px;
        background-color: white;
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
          font-size: 30px;
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
