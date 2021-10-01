<template>
  <div>
    <titlepage title="Blog" />
    <section id="inputsearch">
      <input
        id="inputsearch__input"
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="🔍  Rechercher un post"
      >
    </section>
    <section id="blog">
      <div v-if="!blog.length" id="result" @click="reload()">
        <h2>Aucun résultat pour cette recherche 😟</h2>
        <div class="sep-20" />
        <button1 title="Retour" />
      </div>
      <div id="blog-grid">
        <div v-for="article of blog" :key="article.slug" class="blog-grid-block">
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img :src="article.img" :alt="article.alt">
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
      .only(['title', 'date', 'extrait', 'slug', 'id', 'img', 'alt'])
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
    #inputsearch{
        width: 100%;
        display: flex;
        justify-content: center;
        background: $dark-color;
        @include padding-section;
        padding-top: 20px;
        padding-bottom: 20px;
        input{
            height: 50px;
            width: 390px;
            @include border-radius;
            outline: none;
            border: 0;
            padding: 15px;
            font-family: 'Manrope';
            color: black;
            transition: background 0.4s ease;
            font-weight: 400;
            &::placeholder{
              font-size: 16px;
            }
            &:focus{
              color: white;
              background: black;
              transition: background 0.2s ease;
            }
        }
    }
    #blog{
        min-height: 70vh;
        height: auto;
        background: $dark-color;
        @include padding-section-short;
        padding-top: 50px;
        padding-bottom: 50px;
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
                    img{
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
        #result{
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            h2{
                color: white;
                text-align: center;
            }
        }
    }
    @media screen and (max-width: 850px) {
        #inputsearch{
            @include padding-section-mobile;
        }
        #blog{
            @include padding-section-mobile;
        }
    }
    @media screen and (max-width: 499px) {
        #inputsearch{
            input{
                width: 100%;
            }
        }
        #blog{
            #blog-grid{
                grid-template-columns: repeat(auto-fit, 100%);
                .blog-grid-block{
                    width: 100%!important;
                    height: auto;
                    margin-bottom: 0;
                    a{
                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>
