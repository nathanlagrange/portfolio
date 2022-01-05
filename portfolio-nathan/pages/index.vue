<template>
  <div>
    <hero />
    <prev-site />
    <competences />
    <section id="miniblog">
      <h2>Dernières réalisations</h2>
      <div class="sep-50" />
      <div id="blog-grid">
        <div
          v-for="article of articles"
          :key="article.slug"
          class="blog-grid-block"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <nuxt-link :to="{ name: 'realisations-slug', params: { slug: article.slug } }">
            <img class="blog-grid-block-img" :src="article.img" :alt="article.alt">
            <span class="date">{{ article.date }}</span>
            <h3>{{ article.title }}</h3>
            <p>{{ article.extrait }}</p>
            <open-article />
          </nuxt-link>
        </div>
      </div>
<<<<<<< HEAD
=======
      <div class="sep-20" />
      <nuxt-link to="/blog">
        <button2 title="Visiter le blog" />
      </nuxt-link>
>>>>>>> parent of 4111327 (blog -> réalisations)
    </section>
    <tschome />
    <filmosection />
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
  }
}
</script>

<style lang="scss">
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
#miniblog{
  height: auto;
  width: 100%;
  background: black;
  padding-top: 10%;
  padding-bottom: 10%;
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
    grid-template-columns: repeat(auto-fit, clamp(250px, calc(15.625rem + ((1vw - 10px) * 12.5)), 500px));
    column-gap: 2%;
    row-gap: 2%;
    width: 100%;
    height: clamp(300px, calc(15.625rem + ((1vw - 10px) * 12.5)), 500px)!important;
    .blog-grid-block{
      width: clamp(250px, calc(15.625rem + ((1vw - 10px) * 12.5)), 500px);
      height: clamp(250px, calc(15.625rem + ((1vw - 10px) * 12.5)), 500px);
      margin-left: auto;
      margin-right: auto;
      color: white;
      margin-bottom: 15%;
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
