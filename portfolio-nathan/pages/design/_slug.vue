<template>
  <main>
    <TheHeader />
    <section id="article-section">
      <article>
        <a href="javascript:history.back()"><button1 title="Retour" /></a>
        <div class="sep-30" />
        <h1>{{ article.title }}</h1>
        <div class="sep-20" />
        <span id="date">{{ article.date }}</span>
        <div class="sep-40" />
        <p id="description">
          {{ article.description }}
        </p>
        <nuxt-content class="nuxt-content" :document="article" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  }
}
</script>

<style lang="scss">
@import "../../assets/css/_mixins.scss";
@import "../../assets/css/_colors.scss";
#article-section{
  @include padding-section;
  padding-top: 70px;
  background-color: $dark-color;
  display: flex;
  justify-content: center;
  height: auto;
  article{
    margin-top: 50px;
    margin-bottom: 50px;
    padding-bottom: 50px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
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
      img{
        max-width: 750px;
        height: auto;
        @include border-radius;
        margin-bottom: 10px;
        margin-top: 50px;
        filter: drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.3));
      }
      p{
        max-width: 750px;
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
    }
  }
}

@media screen and (max-width: 450px) {
  #article-section{
    padding-left: 0;
    padding-right: 0;
    article{
      border-radius: 0;
      width: 100%;
    }
  }
}
</style>
