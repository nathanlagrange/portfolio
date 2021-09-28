<template>
<section>
    <div v-if="error.statusCode === 404">
        <h1>404</h1>
        <div class="sep-20"></div>
        <h2>La page demandée n'existe pas</h2>
    </div>
    <div v-else>
        <h2>Une erreur s'est produite</h2>
    </div>
    <div class="sep-20"></div>
    <a href="javascript:history.back()"><button3 title="Retour"/></a>
</section>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default'
  }
</script>

<style lang="scss" scoped>
    @import "../assets/css/_mixins.scss";
    @import "../assets/css/_colors.scss";
    section{
        @include padding-section;
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: white;
        background-image: url('~/assets/img/banner/bg-cloud.webp');
        background-position: center;
        background-size: cover;
        h1{
            font-size: 236px;
            font-weight: 700;
            line-height: 90%;
        }
        h2{
            font-weight: 400;
            font-size: 30px;
        }
    }
    @media screen and (max-width: 850px) {
        section{
            @include padding-section-mobile;
            h1{
                font-size: 50px;
            }
            h2{
                font-size: 15px;
            }
        }
    }
</style>