<template>
  <div>
    <section id="landing">
      <div id="description">
        <div id="description__text">
          <img id="nate-mobile" src="../assets/img/photo/rednate.webp" alt="nathan lagrange">
          <h1>nathan<b>lagrange</b></h1>
          <div class="sep-20"></div>
          <h2>
            Développeur front-end
            <br>
            Webmaster <a href="https://hermione.co" target="_blank">@hermione.co</a>
            <br>
            Bachelor 3 Web Design @MyDigitalSchool
          </h2>
          <div class="sep-30"></div>
          <blockquote>
            "La simplicité se démarque, la complexité se perd inexorablement dans la masse."
            <br>
            K. Barnett
          </blockquote>
          <div class="sep-30"></div>
          <p>
            <b>Bienvenue sur mon portfolio 👋</b>
            <br>
          </p>
          <div class="sep-20"></div>
          <p>
            Ce support web est dédié à la présentation de mes compétences en développement front-end, web design et production musicale.
            Ce site a été entièrement pensé et développé par moi-même avec le framework Nuxt (basé sur Vue).
          </p>
          <div class="sep-20"></div>
          <p id="cv-dl"><a href="../assets/files/cv-lagrange.pdf" download><img src="../assets/img/icon/download.svg" alt="télécharger"><u><b>Télécharger mon CV</b></u></a></p>
        </div>
      </div>
      <div id="profil">
        <div id="profil__pic"></div>
      </div>
    </section>
    <prev-site />
    <competences />
    <section id="miniblog">
        <h2>Blog de web design</h2>
        <div class="sep-50"></div>
        <div id="container-article">
            <div class="article-preview" v-for="article of articles" :key="article.slug">
                <nuxt-link :to="{ name: 'design-slug', params: { slug: article.slug } }">
                    <h3>{{ article.title }}</h3>
                    <span>{{ article.date }}</span>
                </nuxt-link>
            </div>
        </div>
        <div class="sep-10"></div>
        <nuxt-link to="/design">
          <button2 title="En voir plus" />
        </nuxt-link>
    </section>
    <tschome />
  </div>
</template>

<script>
export default {
    layout: 'default',
    async asyncData({ $content, params }) {
        const articles = await $content('blog', params.slug)
        .only(['title', 'date', 'slug', 'id'])
        .sortBy('id', 'desc')
        .limit(3)
        .fetch()
        
        return{ articles: articles }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_mixins.scss";
@import "../assets/css/_colors.scss";
//landing section
#landing{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  #description{
    min-height: 100vh;
    width: 60%;
    background: $dark-color;
    @include padding-section;
    padding-top: 100px;
    padding-bottom: 5px;
    box-sizing: border-box;
    #description__text{
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      blockquote{
        color: white;
        font-style: italic;
      }
      #nate-mobile{
        display: none;
        height: 100px;
        width: 100px;
        border-radius: 5px;
        margin-bottom: 20px;
        filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3));
      }
      h1{
        color: white;
        font-weight: 400;
        letter-spacing: 0.18em;
      }
      h2{
        color: $light-color;
        font-size: 20px;
        font-weight: 300;
        a{
          color: inherit;
          text-decoration: none;
          font-weight: 700;
        }
      }
      p{
        color: white;
        font-size: 20px;
        font-weight: 300;
        text-align: left;
        line-height: 30px;
      }
      #cv-dl{
        width: 220px;
        a{
          display: flex;
          align-items: center;
          color: white;
        }
        img{
          margin-right: 5px;
          height: 19px;
          cursor: pointer;
        }
      }
    }
  }
  #profil{
    min-height: 100vh;
    width: 40%;
    background-image: url('../assets/img/banner/banner-nl.webp');
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-left: 50px;
    padding-right: 50px;
    #profil__pic{
      background-image: url('../assets/img/photo/rednate.webp');
      background-position: center;
      background-size: cover;
      width: 200px;
      height: 200px;
      border-radius: 5px;
      filter: drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.3));
      opacity: 1;
      transition: border-radius 2s ease;
    }
  }
}
// responsive landing section
@media screen and (max-width: 850px) {
  #landing{
    #description{
      width: 100%;
      background-image: url('../assets/img/banner/banner-nl.webp');
      @include padding-section-mobile;
      #nate-mobile{
        display: block!important;
      }
      h1{
        font-size: 30px;
      }
      p{
        font-size: 18px!important;
      }
      blockquote{
        font-size: 18px;
      }
      #cv-dl{
        display: none!important;
      }
    }
    #profil{
      display: none;
    }
  }
}
@media screen and (max-width: 350px) {
  #landing{
    #description{
      #nate-mobile{
        height: 75px!important;
        width: 75px!important;
      }
      h1{
        font-size: 20px;
      }
      h2{
        font-size: 16px!important;
      }
      p{
        font-size: 14px!important;
      }
    }
  }
}

// mini blog
#miniblog{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @include padding-section;
  height: auto;
  background: linear-gradient(180deg, #000000 0%, #000000 100%);
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: -1px;
  h2{
      color: white;
  }
  #container-article{
    width: auto;
    height: auto;
    .article-preview{
      padding-left: 20px;
      padding-right: 20px;
      height: 100px;
      width: 750px;
      background-image: url('../assets/img/banner/banner-nl.webp');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 5px;
      margin-bottom: 25px;
      a{
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transition: opacity 0.3s ease;
        &:hover{
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        h3{
          font-size: 24px;
        }
        span{
          font-size: 16px;
          right: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 850px) {
  #miniblog{
    @include padding-section-mobile;
    #container-article{
      width: 100%;
      .article-preview{
        width: 100%;
      }
    }  
  }
}

@media screen and (max-width: 420px) {
  #miniblog{
    @include padding-section-mobile;
    #container-article{
      width: 100%;
      .article-preview{
        width: 100%;
        a{
          flex-direction: column;
          justify-content: center;
          h3{
            text-align: center;
            font-size: 20px;
          }
        }
      }
    }  
  }
}

</style>