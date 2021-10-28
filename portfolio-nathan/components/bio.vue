<template>
  <section>
    <div class="sep-50" />
    <div class="sep-50" />
    <div id="bio-img">
      <figure>
        <img src="https://ucarecdn.com/26143775-5662-4cf7-8eb8-3ab3e962e734/-/preview/300x300/" alt="nathan lagrange enfance">
        <figcaption>
          Ille-et-Vilaine, 2003
        </figcaption>
      </figure>
      <figure id="nathan-arcachon">
        <img src="https://ucarecdn.com/6f6e262b-62d4-4757-bc0f-460b41e58244/-/preview/300x300/" alt="nathan lagrange arcachon">
        <figcaption>
          Gironde, 2016
        </figcaption>
      </figure>
      <figure>
        <img src="https://ucarecdn.com/7140cb19-ead0-4de8-8b38-d44a31a0a191/-/preview/300x300/" alt="nathan lagrange chien">
        <figcaption>
          Hérault, 2019
        </figcaption>
      </figure>
    </div>
    <div class="sep-50" />
    <div id="bio-p-1">
      <p>
        Je m’appelle Nathan Lagrange et je suis un étudiant alternant en développement web
        (front-end) agé de 23 ans. Passionné par la dance musique et le cyclisme depuis
        mon enfance, ma région préférée est la Bretagne et je ne reviendrai pour rien au monde
        dans le sud de la France où j’ai grandi.
        <br>
        <br>
        Au fil des années, j’ai développé des atouts me permettant d’anticiper les difficultés et
        les contraintes de temps et à proposer des idées là où ne m’attend pas toujours.
        Si je prend mon temps, c’est pour éviter d’en perdre sur le long terme !
      </p>
      <figure>
        <img src="https://ucarecdn.com/b8e60eb9-8ca2-4b5e-85fe-4e5c18de0aa0/-/preview/220x220/" alt="Music Sounds Better With You">
        <figcaption><b>Mon disque préféré</b></figcaption>
      </figure>
    </div>
    <div class="sep-50" />
    <div id="bio-p-2">
      <p>
        Je suis <strong>diplômé d’un DUT MMI</strong> (métiers du multimédia et de l’internet) et je suis actuellement en
        <strong>Bachelor 3 spécialisation web design</strong> à l'école My Digital School de Rennes.
        <br><br>
        Cette dernière année d'étude devrait me permettre de diversifier mes aptitudes en design d'interface et
        d'expérience utilisateur. Il ne m'était pas imaginable de simplement développer des interfaces web
        mais de pouvoir agir sur la phase de conception pour comprendre le monde numérique qui m'entoure et ses enjeux.
        <br><br>
        Après mes études, j’aspire à <strong>devenir un développeur front-end</strong>
        confirmé en continuant à me former parrallèlement aux évolutions technologiques de mon métier.
      </p>
    </div>
    <div class="sep-50" />
    <div class="sep-50" />
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/css/_mixins.scss";
@import "../assets/css/_colors.scss";
  section{
    width: 100%;
    min-height: 100vh;
    background: $dark-color;
    background-size: cover;
    background-position: center;
    @include padding-section;
    #bio-img{
      max-width: 900px;
      display: flex;
      justify-content:space-between;
      margin-left: auto;
      margin-right: auto;
      figure{
        color: white;
        figcaption{
          padding-top: 10px;
        }
        img{
          width: 220px;
          height: 220px;
          @include border-radius;
          filter: drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.3));
        }
      }
      #nathan-arcachon{
        margin-left: 20px;
        margin-right: 20px;
      }
    }
    #bio-p-1{
      display: flex;
      max-width: 900px;
      color: white;
      margin-left: auto;
      margin-right: auto;
      text-align: justify;
      p{
        width: 62%;
      }
      figure{
        margin-left: auto;
        text-align: center;
        figcaption{
          padding-top: 10px;
        }
        img{
          height: 220px;
          width: 220px;
          @include border-radius;
          filter: drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.3));
        }
      }
    }
    #bio-p-2{
      display: flex;
      max-width: 900px;
      color: white;
      margin-left: auto;
      margin-right: auto;
      text-align: justify;
    }
  }
  @media screen and (max-width: 850px) {
    section{
      @include padding-section-mobile;
      #bio-img{
        width: 100%;
        figure{
          img{
            width: 150px;
            height: 150px;
          }
        }
      }
      #bio-p-1{
        flex-direction: column;
        p{
          width: 100%;
        }
        figure{
          margin-top: 50px;
          margin-right: auto;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    section{
      @include padding-section-mobile;
      #bio-img{
        flex-direction: column;
        align-items: center;
        text-align: center;
        figure{
          margin-top: 10px;
          margin-bottom: 10px;
          img{
            width: 250px;
            height: 250px;
          }
        }
      }
    }
  }
</style>
