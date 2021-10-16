<template>
  <footer>
    <div id="name">
      <img src="../assets/img/logo/logo-nl-white.svg" alt="logo nathan lagrange">
      <h6>nathan<strong>lagrange</strong></h6>
    </div>
    <div id="footer-nav">
      <ul>
        <nuxt-link to="/">
          <li>accueil</li>
        </nuxt-link>
        <nuxt-link to="/blog">
          <li>blog</li>
        </nuxt-link>
        <nuxt-link to="/musique">
          <li>musique</li>
        </nuxt-link>
        <nuxt-link to="/mentionslegales">
          <li>mentions légales</li>
        </nuxt-link>
      </ul>
    </div>
    <div id="footer-icon">
      <a href="https://www.linkedin.com/in/nathanlagrange/" target="_blank"><img src="../assets/img/icon/linkedin.svg" alt="linkedin nathan lagrange"></a>
      <a href="https://github.com/nathanlagrange" target="_blank"><img src="../assets/img/icon/github-logo.svg" alt="github"></a>
      <a href="mailto:nathanlagrange98@gmail.com" target="_blank">
        <img src="../assets/img/icon/envelope.svg" alt="contact nathan lagrange">
      </a>
    </div>
    <div id="footer-meta">
      <span>{{ date }} - Tout droits réservés - <b>nathanlagrange.dev</b></span>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      date: new Date().getUTCFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_mixins.scss";
@import "../assets/css/_colors.scss";
    footer{
        width: 100%;
        min-height: 392px;
        background-image: url('../assets/img/banner/banner-nl.webp');
        background-repeat: repeat;
        background-size: auto;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        @include padding-section;
        padding-top: 30px;
        padding-bottom: 30px;
        #name{
            display: flex;
            flex-direction: row;
            align-items: baseline;
            justify-content: center;
            width: 100%;
            img{
                height: 23px;
                widows: 23px;
                margin-right: 6px;
            }
            h6{
                color: white;
                font-size: 30px;
                margin-left: 6px;
                font-weight: 400;
                letter-spacing: 0.18em;
            }
        }
        #footer-nav{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: baseline;
            justify-content: center;
            ul{
                text-align: center;
                list-style-type: none;
                display: inline;
                a{
                    text-decoration: none;
                    color: white;
                    li{
                        list-style-type: none;
                        display: inline;
                        padding-left: 8px;
                        padding-right: 8px;
                        font-size: 20px;
                    }
                }
            }
        }
        #footer-icon{
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: baseline;
            justify-content: center;
            a{
                img{
                    margin-left: 5px;
                    margin-right: 5px;
                    height: 25px;
                    width: auto;
                }
            }
        }
        #footer-meta{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                font-weight: 400;
                font-size: 20px;
                color: white;
                text-align: center;
            }
        }
    }

    @media screen and (max-width: 850px) {
        footer{
            @include padding-section-mobile;
        }
    }

    @media screen and (max-width: 499px) {
        footer{
            #name{
                h6{
                    display: none;
                }
                img{
                    margin-right: 0;
                    height: 40px;
                }
            }
            #footer-nav{
                ul{
                    display: block!important;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    li{
                        display: block!important;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        text-transform: uppercase;
                    }
                }
            }
            #footer-meta{
                margin-top: 30px;
            }
        }
    }
</style>
