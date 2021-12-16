<template>
  <section>
    <div class="sep-50" />
    <h2>Mon stack technique</h2>
    <div class="sep-50" />
    <div id="grid">
      <div class="grid-assets">
        <div
          v-for="asset in assets"
          :key="asset"
          class="grid-assets-block"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <img :src="asset.img" :alt="asset.alt">
          <div class="sep-10" />
          <h3>{{ asset.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      assets: [
        { name: 'Vue', img: 'https://ucarecdn.com/a2e8d652-e9aa-48ab-9121-bd863c0fb95b/vue.webp', alt: 'Vue JS' },
        { name: 'Nuxt', img: 'https://ucarecdn.com/3a4b0ef2-c0b6-4243-b6ec-bfb5830a46c0/Nuxt.webp', alt: 'Nuxt' },
        { name: 'Node JS', img: 'https://ucarecdn.com/4073ccb4-9ff3-4f62-a6a3-fb3c445da579/nodejs.webp', alt: 'Node JS' },
        { name: 'Wordpress', img: 'https://ucarecdn.com/36c9c611-514b-4cd0-aac0-e37200bd24c9/wordpress.webp', alt: 'Wordpress' },
        { name: 'Github', img: 'https://ucarecdn.com/e114257d-fef4-49aa-a825-c4eb4b672137/github.webp', alt: 'Github' },
        { name: 'Sass', img: 'https://ucarecdn.com/a7c78a20-3b88-4b8e-b433-017c83237977/sass.webp', alt: 'Sass' },
        { name: 'Tailwind', img: 'https://ucarecdn.com/10e6af29-638e-4b15-a91c-195669a3b26c/-/preview/-/quality/smart/', alt: 'Tailwind' },
        { name: 'Elementor', img: 'https://ucarecdn.com/cae12cd0-8b61-48bb-aa6b-86ded855be78/elementor.webp', alt: 'Elementor' },
        { name: 'Oxygen Builder', img: 'https://ucarecdn.com/7b40c91d-5c4c-4883-94a9-382ceff87636/oxygen.webp', alt: 'Oxygen Builder' },
        { name: 'Figma', img: 'https://ucarecdn.com/f7624559-e4c4-48f4-86d7-71dd7aa54f1f/figma.webp', alt: 'Figma' },
        { name: 'Photoshop', img: 'https://ucarecdn.com/d6ecffa4-2096-4016-9b57-39e31ff2be68/photoshop.webp', alt: 'Photoshop' },
        { name: 'Illustrator', img: 'https://ucarecdn.com/b5808c02-091d-4f9b-9d84-2de36b9dba4d/illustrator.webp', alt: 'Illustrator' },
        { name: 'Adobe XD', img: 'https://ucarecdn.com/ab07b78d-1bc9-44bb-a94d-2412680a737a/xd.webp', alt: 'Adobe XD' },
        { name: 'Premiere Pro', img: 'https://ucarecdn.com/2a518045-92dd-4ac8-87cf-d76f906c20c9/premierepro.webp', alt: 'Premiere Pro' },
        { name: 'After Effect', img: 'https://ucarecdn.com/6955f833-1451-4274-8b49-99568bdc03ea/aftereffect.webp', alt: 'After Effect' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_mixins.scss";
    section{
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background: linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, #000000 100%), url(~/assets/img/banner/banner-nl.webp);
      background-position: center;
      background-size: cover;
      @include padding-section;
      padding-top: 50px;
      padding-bottom: 50px;
      h2{
          color: white;
          text-align: center;
      }
      #grid{
        @include padding-section;
        width: 100%;
        .grid-assets{
          width: 100%;
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(4, 160px);
          column-gap: 30px;
          row-gap: 30px;
          grid-auto-rows: minmax(128px, auto);
          .grid-assets-block{
            background: white;
            width: 160px;
            height: 128px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            @include border-radius;
            img{
              width: 50px;
              height: 50px;
            }
            h3{
              color: black;
              font-size: 20px;
            }
          }
        }
      }
    }

    @media screen and (max-width: 850px) {
      section{
        @include padding-section-mobile;
        #grid{
          .grid-assets{
            grid-template-columns: repeat(auto-fit, 160px) !important;
          }
        }
      }
    }
    @media screen and (max-width: 500px) {
      section{
        display: none;
      }
    }
</style>
