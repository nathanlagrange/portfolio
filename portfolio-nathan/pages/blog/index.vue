<template>
  <div>
    <titlepage title="Blog 📝" />
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
        <button2 title="Tout" />
      </nuxt-link>
      <nuxt-link to="/blog/webdesign">
        <button1 title="Web design" />
      </nuxt-link>
      <nuxt-link to="/blog/musique">
        <button1 title="Musique" />
      </nuxt-link>
      <nuxt-link to="/blog/autre">
        <button1 title="Autre" />
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
      <div class="sep-50" />
      <div class="sep-20" />
      <div id="seemore" @click="nolimit()">
        <button1 title="Afficher plus" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $content, params }) {
    const blog = await $content('blog', params.slug)
      .only(['title', 'date', 'extrait', 'slug', 'id', 'img', 'alt'])
      .limit(12)
      .sortBy('id', 'desc')
      .fetch()
    return { blog }
  },
  data () {
    return {
      searchQuery: ''
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      this.blog = await this.$content('blog')
        .search(searchQuery)
        .sortBy('id', 'desc')
        .fetch()
    }
  },
  methods: {
    reload () {
      location.reload()
    },
    async nolimit () {
      this.blog = await this.$content('blog')
        .sortBy('id', 'desc')
        .limit()
        .fetch()
      document.getElementById('seemore').style.display = 'none'
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
@import "~/assets/css/_blog.scss";
</style>
