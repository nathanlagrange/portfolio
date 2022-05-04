<template>
  <div>
    <section id="hero">
      <div id="hero-titre">
        <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
          nathan<b>lagrange</b>
        </h1>
      </div>
      <div class="sep-20" />
      <div id="hero-bandeau">
        <div id="hero-bandeau-meta">
          <p data-aos="fade" data-aos-duration="2000" data-aos-delay="500">
            { Webmaster <a href="https://hermione.co" target="_blank">@hermione.co</a>
            <br>
            Bachelor 3 Web Design }
          </p>
          <blockquote>
            <div class="sep-30" />
            <span>
              <b>“What do you talk for ? You'll never make us stop”</b>
            </span>
            <br>
            <div class="sep-10" />
            <cite>
              - Madeon
            </cite>
          </blockquote>
          <div class="sep-20" />
          <p data-aos="fade" data-aos-duration="1500" data-aos-delay="1500">
            👋 Bienvenue sur mon portfolio dédié à la présentation de mes compétences en développement front-end, web design et production musicale.
          </p>
          <div class="sep-20" />
          <p id="cv-dl">
            <nuxt-link to="/cv">
              <span><b><u>Afficher mon CV</u></b> ⬇️</span>
            </nuxt-link>
          </p>
        </div>
      </div>
    </section>
    <section id="hero-2">
      <div id="hero-2-bandeau">
        <p>
          Je m’appelle Nathan Lagrange et j’ai 24 ans. Très jeune, je me suis passioné par le domaine du numérique et du multimédia en réalisant mes premiers films, en composant, mixant ma propre musique et bien plus tard en développant de façon autonome des sites internets.
        </p>
        <p>
          En 2019, j’ai commencé des études pour obtenir un DUT MMI m’ayant fait découvrir l’univers de la programmation web. 2 ans après, j’ai commencé à m’intéresser à l’ergonomie en intégrant un bachelor 3 spécialisation web design que je compte finir cette année.
        </p>
        <p>
          Pour la rentrée 2022, je prévois d’intégrer un Master Expert Marketing Digital dans l’objectif d’élargir mon champ de compétences et être LE profil évident qu’une entreprise choisira. Je souhaite par cette occasion poursuivre ma relation professionnelle avec Hermione Médecine, la startup Montpelliéraine où je réalise mon alternance depuis août 2021.
        </p>
        <p>
          En ce qui concerne mon profil, j’ai toujours été un touche-à-tout : excellent nul part mais bon dans la plupart des domaines. Au fil des années il est devenu pour moi une évidence de me professionaliser dans le domaine du digital pour devenir webmaster, un métier correspondant tout à fait à ma personnalité et mon profil. Ce qui était pour moi qu’un simple échappatoire et un moyen de me valoriser socialement dans la cours de récréation est devenu le métier de mes rêves grâce à de nombreuses années de détermination.
        </p>
        <p>
          🎓 <b>DUT MMI / Bachelor 3 web design</b>
          <br>
          🎯 <b>Webmaster</b>
          <br>
          🌟 <b>SEO / Vue / React / Figma / Wordpress</b>
        </p>
      </div>
      <div id="hero-2-img">
        <figure
          data-aos="flip-left"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          <img src="https://ucarecdn.com/26143775-5662-4cf7-8eb8-3ab3e962e734/-/preview/300x300/" alt="nathan lagrange 2003">
          <figcaption>
            Bretagne, 2003
          </figcaption>
        </figure>
        <figure
          data-aos="flip-left"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-easing="ease-out-cubic"
        >
          <img src="https://ucarecdn.com/c2f5d19b-f3d7-4329-ba6c-0944aa89457d/-/preview/300x300/" alt="nathan lagrange 2011">
          <figcaption>
            Gers, 2011
          </figcaption>
        </figure>
        <figure
          data-aos="flip-left"
          data-aos-duration="800"
          data-aos-delay="400"
          data-aos-easing="ease-out-cubic"
        >
          <img src="https://ucarecdn.com/7140cb19-ead0-4de8-8b38-d44a31a0a191/-/preview/300x300/" alt="nathan lagrange 2003">
          <figcaption>
            Gard, 2019
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date().getFullYear() - 1998
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/_mixins.scss";
  @import "~/assets/css/_colors.scss";
  #hero{
    width: 100%;
    min-height: 100vh;
    background: url("~/assets/img/hero/hero-1.webp");
    background-position: 50% 15%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    #hero-titre{
      display: flex;
      justify-content: flex-end;
      @include padding-section;
      h1{
        color: white;
        font-weight: 400;
        letter-spacing: 0.18em;
        text-shadow: rgba(0, 0, 0, 0.5) 1px 0 18px;
      }
    }
    #hero-bandeau{
      @include padding-section;
      background: linear-gradient(90deg, rgba(255,255,255,0) 42%, rgba(101,37,175,1) 100%);
      min-height: 40vh;
      height: auto;
      padding-top: 2%;
      padding-bottom: 2%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      #hero-bandeau-meta{
        width: 45%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        p{
          color: white;
          font-weight: 300;
          a{
            color: inherit;
            text-decoration: none;
            font-weight: 700;
          }
        }
        blockquote{
          color: white;
          font-weight: 400;
          font-style: italic;
          width: 100%;
          cite{
            font-style: normal;
          }
          b{
            width: 100%;
          }
          span{
            color: $light-color;
            padding: 2px;
            width: 100%;
          }
        }
        p{
          color: white;
          font-weight: 300;
          text-align: left;
        }
        #cv-dl{
          a{
            display: flex;
            align-items: center;
            color: white;
          }
        }
      }
    }
  }
  #hero-2{
    width: 100%;
    min-height: 100vh;
    height: auto;
    background: url("~/assets/img/hero/hero-2.webp");
    background-position: 50% 15%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: row-reverse;
    @include padding-section;
    padding-top: 2%;
    padding-bottom: 2%;
    #hero-2-bandeau{
      margin: auto 0;
      width: 50%;
      color: white;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p{
        width: 85%;
        float: left;
        padding-bottom: 20px;
      }
    }
    #hero-2-img{
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: center;
      justify-content: center;
      figure{
        margin: 0 15px;
        text-align: left;
        margin-bottom: 2%;
        color: white;
        figcaption{
          padding-top: 1%;
          width: 100%;
          text-shadow: black 2px 0 9px;
          font-weight: 500;
        }
        img{
          height: 180px;
          width: 180px;
          @include border-radius;
          filter: drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.3));
        }
      }
    }
  }
  @media screen and (max-width: 799px) {
    #hero{
      justify-content: flex-end;
      background-position: 45%;
      background-size: 1500px;
      #hero-titre{
        display: flex;
        justify-content: flex-start!important;
        @include padding-section-mobile;
      }
      #hero-bandeau{
        @include padding-section-mobile;
        height: auto;
        padding-top: 5%!important;
        padding-bottom: 5%!important;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(101,37,175,0.6) 80%);
        #hero-bandeau-meta{
          width: 100%!important;
          justify-content: center;
          flex-direction: column;
          p{
            color: white;
            font-weight: 300;
            a{
              color: inherit;
              text-decoration: none;
              font-weight: 700;
            }
          }
          blockquote{
            display: none;
          }
        }
      }
    }
    #hero-2{
      @include padding-section-mobile;
      background: url("~/assets/img/hero/hero-2.webp"), linear-gradient( rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5)50%);
      background-position: 45%;
      background-size: 1500px;
      background-attachment: fixed;
      #hero-2-bandeau{
          margin-top: auto;
          padding: 5%;
          width: 100%;
          height: 50%;
          background-color: rgba(0, 0, 0, 0.6);
          @include border-radius;
        p{
          width: 100%;
        }
      }
      #hero-2-img{
        display: none;
      }
    }
  }
  @media screen and (max-width: 479px) {
    h1{
      font-size: 30px;
    }
}
</style>
