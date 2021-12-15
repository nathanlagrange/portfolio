<template>
  <div>
    <titlepage :title="article.title" />
    <div id="ariane">
      <nuxt-link to="/blog">
        blog
      </nuxt-link>
      <div class="separator-ariane">
        <b>></b>
      </div>
      <nuxt-link :to="article.categorie">
        {{ article.categorie }}
      </nuxt-link>
      <div class="separator-ariane">
        <b>></b>
      </div>
      <span>{{ article.slug }}</span>
    </div>
    <section id="article-section">
      <article>
        <a href="javascript:history.back()"><button1 title="Retour" /></a>
        <div class="sep-30" />
        <span id="date">{{ article.date }}</span>
        <div class="sep-30" />
        <p id="description">
          {{ article.description }}
        </p>
        <div class="sep-50" />
        <nuxt-content :document="article" />
      </article>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  },
  head () {
    return {
      title: this.article.title + ' | Nathan Lagrange - Développeur front-end',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.article.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.extrait
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://nathanlagrange.dev/blog/${this.$route.params.slug}`
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://nathanlagrange.dev/blog/${this.$route.params.slug}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.extrait
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.article.img
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.img
        },
        {
          property: 'article:published_time',
          content: this.article.date
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : ''
        },
        { name: 'twitter:label1', content: 'Publié par' },
        { name: 'twitter:data1', content: 'Nathan Lagrange' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : ''
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://nathanlagrange.dev/blog/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/css/_mixins.scss";
@import "../../assets/css/_colors.scss";
#ariane{
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  color: white;
  .separator-ariane{
    padding-left: 5px;
    padding-right: 5px;
  }
  a{
    text-decoration: none;
    color: white;
      font-weight: bold;
  }
}
#article-section{
  @include padding-section;
  background-color: $dark-color;
  display: flex;
  justify-content: center;
  height: auto;
  article{
    margin-bottom: 50px;
    margin-top: 50px;
    padding-bottom: 40px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    max-width: 1000px;
    width: 80%;
    border-radius: 5px;
    min-height: 120vh;
    @include padding-section;
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.3));
    h1{
      text-align: center;
    }
    #date{
      letter-spacing: 6px;
      font-size: 16px;
    }
    #description{
      font-size: 20px;
      font-weight: 400;
      max-width: 750px;
    }
    .nuxt-content{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2{
        text-align: center;
      }
      h3, h4, h5{
        margin-right: auto;
      }
      img{
        max-width: 750px;
        height: auto;
        @include border-radius;
        margin-bottom: 10px;
      }
      p{
        max-width: 750px;
        text-align: left;
      }
      blockquote{
        color: rgb(107, 107, 107);
        p{
          text-align: center;
          font-size: 16px;
        }
      }
      ul{
        max-width: 500px;
        list-style-type: '-  ';
      }
      li{
        margin-bottom: 15px;
        font-size: 16px;
      }
      iframe{
        width: 750px;
        max-width: 100%;
        min-height: 421px;
        @include border-radius;
      }
    }
  }
}

@media screen and (max-width: 1199px) {
  #article-section{
    article{
      .nuxt-content{
        img{
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 850px) {
  #article-section{
    @include padding-section-mobile;
    article{
      @include padding-section-mobile;
      width: 100%;
      ul{
        width: 85%;
      }
    }
  }
}

@media screen and (max-width: 599px) {
  #ariane{
    flex-direction: column;
    text-align: center;
    .separator-ariane{
      transform: rotate(90deg);
    }
  }
}

@media screen and (max-width: 450px) {
  #article-section{
    padding-left: 0!important;
    padding-right: 0!important;
    article{
      border-radius: 0;
      width: 100%;
    }
  }
}
</style>
