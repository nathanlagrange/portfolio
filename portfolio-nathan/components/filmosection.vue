<template>
  <div id="filmographie-section">
    <div id="filmographie-section__content">
      <span id="filmo-period" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-out-cubic" data-aos-delay="500">2011-2018</span>
      <span id="filmo-title" data-aos="fade" data-aos-duration="2000" data-aos-easing="ease-out-cubic">Filmographie</span>
      <div class="sep-20" />
      <div id="filmo-description" data-aos="fade-up" data-aos-duration="1500">
        <span>
          L’Audiovisuel m’a permis de capturer une période de ma vie : <strong>l’adolescence.</strong>
        </span>
        <br><br>
        <span>
          Mon intention était de mettre en avant le travail de mes rencontres que j'admirai de la façon la plus juste qu’il soit.
        </span>
        <br>
        <span>
          Merci pour les souvenirs. Et ces prises ratées 🎬.
        </span>
        <br><br>
        <span>
          Nathan.
        </span>
      </div>
      <div class="sep-30" />
      <div id="buttons">
        <nuxt-link to="/filmographie">
          <button-1 title="LECTURE" />
        </nuxt-link>
      </div>
    </div>
    <video id="video-filmo" autoplay loop poster="https://ucarecdn.com/210fd8bf-d988-4d50-9f71-c00dbe016210/-/preview/1900x1900/">
      <source src="~/assets/video/randommemories.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  mounted () {
    this.hideVideo()
  },
  methods: {
    hideVideo () {
      const video = document.getElementById('video-filmo')
      const myScrollFunc = function () {
        const y = window.scrollY
        if (y >= 4000) {
          video.style.display = 'block'
        } else {
          video.style.display = 'none'
        }
      }
      window.addEventListener('scroll', myScrollFunc)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
#filmographie-section{
  video{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  #filmographie-section__content{
    padding: 10vw;
    width: 70%;
    max-width: 1500px;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    #filmo-period{
      font-size: 20px;
      font-weight: normal;
    }
    #filmo-title{
      font-size: 50px;
      font-weight: normal;
    }
    #filmo-description{
      background: rgba(61, 135, 224, 0.6);
      @include border-radius;
      padding: 20px;
    }
    #buttons{
      button{
        margin: 5px;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  #filmographie-section{
    background: url('https://ucarecdn.com/210fd8bf-d988-4d50-9f71-c00dbe016210/-/preview/1900x1900/');
    background-position-x: 85%;
    background-size: cover;
    background-repeat: no-repeat;
    video{
      display: none;
    }
    #filmographie-section__content{
      max-width: 100%;
    }
  }
}

</style>
