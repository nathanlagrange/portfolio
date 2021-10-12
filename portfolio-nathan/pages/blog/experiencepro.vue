<template>
  <div>
    <titlepage title="Catégorie : 'Expérience professionelle'" />
    <div class="sep-20" />
    <section id="inputsearch">
      <input
        id="inputsearch__input"
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="🔍  Rechercher un post"
      >
    </section>
    <div class="sep-40" />
    <div id="categorie">
      <nuxt-link to="/blog">
        <button1 title="Tout" />
      </nuxt-link>
      <nuxt-link to="/blog/webdesign">
        <button1 title="Web design" />
      </nuxt-link>
      <nuxt-link to="/blog/musique">
        <button1 title="Musique" />
      </nuxt-link>
      <nuxt-link to="/blog/experiencepro">
        <button2 title="Expérience pro" />
      </nuxt-link>
    </div>
    <section id="blog">
      <div v-if="!blog.length" id="result" @click="reload()">
        <h2>Aucun résultat pour cette recherche 😟</h2>
        <div class="sep-20" />
        <button2 title="Retour" />
      </div>
      <div id="blog-grid">
        <div v-for="article of blog" :key="article.slug" class="blog-grid-block">
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img class="blog-grid-block-img" :src="article.img" :alt="article.alt">
            <span class="date">{{ article.date }}</span>
            <h3>{{ article.title }}</h3>
            <p>{{ article.extrait }}</p>
            <open-article />
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $content, params }) {
    const blog = await $content('blog', params.slug)
      .only(['title', 'date', 'createdAt', 'extrait', 'slug', 'id', 'img', 'alt'])
      .where({ categorie: 'experiencepro' })
      .sortBy('id', 'desc')
      .fetch()
    return { blog }
  },
  data () {
    return {
      searchQuery: '',
      title: 'Catégorie : Expérience professionnelle | Nathan Lagrange - Développeur front-end',
      description: 'Ce blog regroupe mes productions en webdesign, musique et autres inclassables...',
      ogimage: 'https://ucarecdn.com/aecefba6-372d-4a80-87c2-ee0c96bb54dc/ogimageblog.webp'
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
          content: 'https://nathanlagrange.dev/blog/experiencepro'
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
          content: this.ogimage
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
          content: this.ogimage
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
  watch: {
    async searchQuery (searchQuery) {
      this.blog = await this.$content('blog')
        .search(searchQuery)
        .where({ categorie: 'experience professionnelle' })
        .sortBy('id', 'desc')
        .fetch()
    }
  },
  methods: {
    reload () {
      location.reload()
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
@import "~/assets/css/_blog.scss";
</style>
