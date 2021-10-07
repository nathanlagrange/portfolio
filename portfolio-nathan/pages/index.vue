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
            J. Wooden
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
            <a href="../assets/files/cv-lagrange.pdf" download><img src="../assets/img/icon/download.svg" alt="télécharger"><u><b>Télécharger mon CV</b></u></a>
          </p>
        </div>
      </div>
      <div id="profil">
        <div id="profil__pic" />
      </div>
    </section>
    <prev-site />
    <competences />
    <section id="miniblog">
      <h2>Blog de web design</h2>
      <div class="sep-50" />
      <div id="container-article">
        <div v-for="article of articles" :key="article.slug" class="article-preview">
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <h3>{{ article.title }}</h3>
            <span>{{ article.date }}</span>
          </nuxt-link>
        </div>
      </div>
      <div class="sep-10" />
      <nuxt-link to="/blog">
        <button2 title="En voir plus" />
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
      .only(['title', 'date', 'slug', 'id'])
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
      &:hover{
        transform: rotate(0deg);
        transition: transform 0.3s ease-out;
      }
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
