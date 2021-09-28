<template>
    <section id="prev-site">
      <div class="prev-site__box" id="prev-site-box__1">
        <h3>helpnfiesta.fr</h3>
        <div class="sep-10"></div>
        <span>dev. front-end et web designer</span>
        <br>
        <span>2021</span>
        <br>
        <div class="sep-40"></div>
        <a href="https://helpnfiesta.fr" target="_blank"><button1 title="Découvrir" /></a>
      </div>
      <div class="prev-site__box" id="prev-site-box__2">
        <h3>flouvaps.fr</h3>
        <div class="sep-10"></div>
        <span>intégrateur  et web designer</span>
        <br>
        <span>2021</span>
        <br>
        <div class="sep-40"></div>
        <a href="https://flouvaps.fr" target="_blank"><button2 title="Découvrir" /></a>
      </div>
      <div class="prev-site__box" id="prev-site-box__3">
        <h3>helene-boyer.com</h3>
        <div class="sep-10"></div>
        <span>dev. front-end Vue JS</span>
        <br>
        <span>2021</span>
        <br>
        <div class="sep-40"></div>
        <a href="https://helene-boyer.com" target="_blank"><button3 title="Découvrir" /></a>
      </div>
    </section>
</template>

<style lang="scss" scoped>
  #prev-site{
    display: flex;
    max-width: 100%;
    .prev-site__box{
      width: 33.34%;
      height: 380px;
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