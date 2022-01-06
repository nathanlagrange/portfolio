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
            { Développeur front-end (VueJS)
            <br>
            Webmaster <a href="https://hermione.co" target="_blank">@hermione.co</a>
            <br>
            Bachelor 3 Web Design @MyDigitalSchool }
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
              <span><b><u>Afficher mon CV</u></b>⬇️</span>
            </nuxt-link>
          </p>
        </div>
      </div>
    </section>
    <section id="hero-2">
      <div id="hero-2-bandeau">
        <p>
          Je m’appelle Nathan Lagrange et je suis un étudiant alternant en développement web (front-end) agé de {{ date }} ans. Passionné par la dance music et le sport depuis mon enfance, ma région préférée est la Bretagne et je ne reviendrai pour rien au monde dans le sud de la France où j’ai grandi ☀️.
        </p>
        <p>
          Au fil des années, j’ai développé des atouts me permettant de me différencier dans ma façon d'aborder mes projets et d'être là où ne m’attend pas toujours. J'accorde le plus d'importance possible à la rigeur et la technique tout en étant en phase avec mes collaborateurs.
        </p>
        <br>
        <p>
          🎓 <b>DUT MMI Toulon</b>
          <br>
          🎯 <b>Développeur Front-end</b>
          <br>
          🌟 <b>SEO / Nuxt / Figma / Oxygen Builder</b>
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
    background: url("https://ucarecdn.com/8753232b-7a21-4b27-9687-73132f5db12e/-/preview/-/quality/smart/");
    background-position: 50% 15%;
    background-repeat: repeat-y;
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
    background: url("https://ucarecdn.com/446802ba-0f66-42c1-a9ca-909bb5a13e27/-/preview/-/quality/smart/");
    background-position: 50% 15%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: row-reverse;
    @include padding-section;
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
      background: url("https://ucarecdn.com/446802ba-0f66-42c1-a9ca-909bb5a13e27/-/preview/-/quality/smart/"), linear-gradient( rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5)50%);
      background-position: 45%;
      background-size: 1500px;
      background-attachment: fixed;
      #hero-2-bandeau{
          margin-top: auto;
          padding: 2%;
          width: 100%;
          height: 50%;
          background-color: rgba(0, 0, 0, 0.3);
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
</style>
