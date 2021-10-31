<template>
  <div>
    <section id="landing">
      <div id="description">
        <div id="description__text">
          <img id="nate-mobile" src="../assets/img/photo/rednate.webp" alt="nathan lagrange">
          <h1>nathan<b>lagrange</b></h1>
          <div class="sep-30" />
          <h2>
            { Développeur front-end (VueJS)
            <br>
            Webmaster <a href="https://hermione.co" target="_blank">@hermione.co</a>
            <br>
            Bachelor 3 Web Design @MyDigitalSchool }
          </h2>
          <div class="sep-30" />
          <blockquote>
            <span>
              <b>“When opportunity knocks, it’s too late to prepare.”</b>
            </span>
            <br>
            <div class="sep-10" />
            John Wooden
          </blockquote>
          <div class="sep-30" />
          <p>
            <b>Bienvenue sur mon portfolio 👋</b>
            <br>
          </p>
          <div class="sep-20" />
          <p>
            Ce support web est dédié à la présentation de mes compétences en développement front-end, web design et production musicale.
            Ce site a été entièrement pensé et développé par moi-même avec le framework Nuxt (basé sur Vue).
          </p>
          <div class="sep-20" />
          <p id="cv-dl">
            <nuxt-link to="/cv">
              <img src="../assets/img/icon/download.svg" alt="télécharger"><u><b>Afficher mon CV</b></u>
            </nuxt-link>
          </p>
        </div>
      </div>
      <div id="profil">
        <div id="profil__pic" />
      </div>
    </section>
    <bio />
    <prev-site />
    <competences />
    <section id="miniblog">
      <h2>Dernières réalisations</h2>
      <div class="sep-50" />
      <div id="blog-grid">
        <div v-for="article of articles" :key="article.slug" class="blog-grid-block">
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img class="blog-grid-block-img" :src="article.img" :alt="article.alt">
            <span class="date">{{ article.date }}</span>
            <h3>{{ article.title }}</h3>
            <p>{{ article.extrait }}</p>
            <open-article />
          </nuxt-link>
        </div>
      </div>
      <nuxt-link to="/blog">
        <button2 title="Visiter le blog" />
      </nuxt-link>
    </section>
    <tschome />
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'date', 'img', 'slug', 'id'])
      .sortBy('id', 'desc')
      .limit(3)
      .fetch()
    return { articles }
  },
  data () {
    return {
      title: 'Nathan Lagrange - Développeur front-end',
      description: 'Je m\'appelle Nathan Lagrange et je vous souhaite la bienvenue sur mon portfolio (dev, web design et musique).'
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
          content: 'https://ucarecdn.com/8f1d6f69-d3e4-41d1-b1d1-8f9e64322e49/ogimageindex.webp'
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
          content: 'https://ucarecdn.com/8f1d6f69-d3e4-41d1-b1d1-8f9e64322e49/ogimageindex.webp'
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
    this.rotateprofil()
  },
  methods: {
    rotateprofil () {
      document.getElementById('profil__pic').addEventListener('mouseover', function () {
        document.getElementById('profil__pic').style.transform = 'rotate(0deg)'
      })
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
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
        font-weight: 400;
        font-style: italic;
        span{
          color: $light-color;
        }
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
        color: white;
        font-size: 20px;
        font-weight: 300;
        background-color: $cold-color;
        @include border-radius;
        max-width: 420px;
        padding: 15px;
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
      transition: transform 0.3s ease-out;
      transform: rotate(4deg);
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
        font-size: 16px;
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

#miniblog{
  min-height: 70vh;
  height: auto;
  width: 100%;
  background: black;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include padding-section;
  h2{
    color: white;
    text-align: center;
  }
  #blog-grid{
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 390px);
    column-gap: 50px;
    row-gap: 50px;
    grid-auto-rows: minmax(390px, auto);
    width: 100%;
    height: auto;
    min-height: 500px;
    .blog-grid-block{
      width: 390px;
      height: 390px;
      color: white;
      margin-bottom: 35px;
      a{
        text-decoration: none;
        color: white;
        .blog-grid-block-img{
          @include border-radius;
          width: 100%;
          height: auto;
          margin-bottom: 10px;
          transition: opacity 0.3s ease;
          &:hover{
            opacity: 0.6;
            transition: opacity 0.3s ease;
          }
        }
        .date{
          font-size: 14px;
        }
        h3{
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 10px;
          margin-top: 10px;
        }
        p{
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 10px;
        }
      }
    }
  }
}
@media screen and (max-width: 850px) {
  #miniblog{
    @include padding-section-mobile;
  }
}

@media screen and (max-width: 499px) {
  #miniblog{
    #blog-grid{
      grid-template-columns: repeat(auto-fit, 100%);
      .blog-grid-block{
        width: 100%!important;
        height: auto;
        margin-bottom: 0;
        a{
          .blog-grid-block-img{
            width: 100%;
          }
        }
      }
    }
  }
}

</style>
