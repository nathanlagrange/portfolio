<template>
  <section class="titlepage">
    <h1 data-aos="fade" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
      {{ title }}
    </h1>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Titre de la page'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
  .titlepage{
    display: flex;
    align-items: center;
    min-height: 30vh;
    width: 100%;
    padding-top: 120px;
    display: flex;
    justify-content: center;
    @include padding-section;
    margin-bottom: 15px;
    h1{
      color: white;
      font-weight: 400;
      text-align: center;
    }
  }

  @media screen and (max-width: 850px) {
    .titlepage{
      @include padding-section-mobile;
    }
  }
</style>
