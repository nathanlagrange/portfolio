<template>
  <section id="prev-site">
    <div
      id="prev-site-box__1"
      class="prev-site__box"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
    >
      <h3>
        helpnfiesta.fr
      </h3>
      <div class="sep-10" />
      <span>dev. front-end et web designer</span>
      <br>
      <span>2021</span>
      <br>
      <div class="sep-40" />
      <a href="https://helpnfiesta.fr" target="_blank"><button1 title="Découvrir" /></a>
    </div>
    <div
      id="prev-site-box__2"
      class="prev-site__box"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="400"
    >
      <h3>
        flouvaps.fr
      </h3>
      <div class="sep-10" />
      <span>intégrateur  et web designer</span>
      <br>
      <span>2021</span>
      <br>
      <div class="sep-40" />
      <a href="https://flouvaps.fr" target="_blank"><button2 title="Découvrir" /></a>
    </div>
    <div
      id="prev-site-box__3"
      class="prev-site__box"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="800"
    >
      <h3>
        helene-boyer.com
      </h3>
      <div class="sep-10" />
      <span>dev. front-end Vue JS</span>
      <br>
      <span>2021</span>
      <br>
      <div class="sep-40" />
      <a href="https://helene-boyer.com" target="_blank"><button3 title="Découvrir" /></a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
  #prev-site{
    background: $dark-color;
    display: flex;
    max-width: 100%;
    .prev-site__box{
      width: 33.34%;
      height: 400px;
      padding: 5%;
      color: white;
      h3{
        font-size: 30px;
        font-weight: 700;
      }
    }
    #prev-site-box__1{
      background: linear-gradient(0deg, rgba(61, 135, 224, 0.9), rgba(61, 135, 224, 0.9)), url('../assets/img/photo/hnf-screen-miniature.webp');
      background-size: cover;
      background-repeat: no-repeat;
    }
    #prev-site-box__2{
      background: linear-gradient(0deg, rgba(30, 30, 30, 0.9), rgba(30, 30, 30, 0.9)), url('../assets/img/photo/flouvaps-screen-miniature.webp');
      background-size: cover;
      background-repeat: no-repeat;
    }
    #prev-site-box__3{
      background: linear-gradient(0deg, rgba(101, 37, 175, 0.9), rgba(101, 37, 175, 0.9)), url('../assets/img/photo/hb-screen-miniature.webp');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  @media screen and (max-width: 850px) {
    #prev-site{
      flex-direction: column;
      .prev-site__box{
        width: 100%;
        padding:25px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        .sep-40{
          display: none;
        }
      }
    }
  }
</style>
