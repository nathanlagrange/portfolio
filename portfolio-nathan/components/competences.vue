<template>
    <section>
        <nuxt-link to="/web"><button3 title="Voir plus" /></nuxt-link>
        <div class="sep-50"></div>
        <h2>Mes compétences à votre service</h2>
        <div class="sep-50"></div>
        <div id="assets">
            <div class="assets__box">
                <img src="~/assets/img/icon/frontend.svg" alt="front end">
                <div class="sep-20"></div>
                <h3>Développement</h3>
                <div class="sep-20"></div>
                <div class="assets__icon">
                    <img src="~/assets/img/icon/javascript.webp" alt="javascript">
                    <img src="~/assets/img/icon/wordpress.webp" alt="wordpress">
                    <img src="~/assets/img/icon/vue.webp" alt="vue">
                    <img src="~/assets/img/icon/visualstudio.webp" alt="Visual Studio Code">
                    <img src="~/assets/img/icon/node.webp" alt="Node JS">
                    <img src="~/assets/img/icon/sass.webp" alt="Sass">
                    <img src="~/assets/img/icon/git.webp" alt="Github">
                    <img src="~/assets/img/icon/oxygen.webp" alt="Oxygen Builder">
                    <img src="~/assets/img/icon/elementor.webp" alt="Elementor">
                </div>
            </div>
            <div class="assets__box">
                <img src="~/assets/img/icon/webdesign.svg" alt="Web design">
                <div class="sep-20"></div>
                <h3>Web design</h3>
                <div class="sep-20"></div>
                <div class="assets__icon">
                    <img src="~/assets/img/icon/xd.webp" alt="Adobe XD">
                    <img src="~/assets/img/icon/photoshop.webp" alt="Indesign">
                    <img src="~/assets/img/icon/illustrator.webp" alt="Illustrator">
                    <img src="~/assets/img/icon/figma.webp" alt="Figma">

                </div>
            </div>
            <div class="assets__box">
                <img src="../assets/img/icon/videoaudio.svg" alt="vidéo et audio">
                <div class="sep-20"></div>
                <h3>Vidéo / audio</h3>
                <div class="sep-20"></div>
                <div class="assets__icon">
                    <img src="~/assets/img/icon/premiere.webp" alt="Premiere Pro">
                    <img src="~/assets/img/icon/after.webp" alt="After Effect">
                    <img src="~/assets/img/icon/davinci.webp" alt="DaVinci Resolve">
                    <img src="~/assets/img/icon/flstudio.webp" alt="FL Studio">
                </div>
            </div>
        </div>
    </section>
</template>

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
        #assets{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 850px;
            height: auto;
            min-height: 420px;
            background: #FFFFFF;
            box-shadow: 0px -4px 14px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-right: 10%;
            padding-left: 10%;
            .assets__box{
                width: 120px;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 20px;
                h3{
                    font-weight: 400;
                    font-size: 20px;
                }
                img{
                    height: 120px;
                    width: 120px;
                }
                .assets__icon{
                    width: 100%;
                    display: flex;
                    align-content: space-between;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    img{
                        margin-left: auto;
                        margin-right: auto;
                        height: 36px;
                        padding: 4px;
                        width: auto;
                    }
                }
            }
        }
    }

     @media screen and (max-width: 999px) {
        section{
            #assets{
                width: 100%;
            }
        }
     }

    @media screen and (max-width: 850px) {
        section{
            @include padding-section-mobile;
        }
    }

    @media screen and (max-width: 496px) {
        #assets{
            justify-content: center!important;

        }
    }

</style>
