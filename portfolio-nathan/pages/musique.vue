<template>
    <div>
        <section id="reverb-top">
            <div id="theeye">
                <img id="eye-l" src="~/assets/img/tsc/eye-l.webp" alt="eye">
                <img id="eye-r" src="~/assets/img/tsc/eye-r.webp" alt="eye">
            </div>
            <div id="reverb-titles">
                <a href="https://bit.ly/3sKUCnB"><img class="reverb-link" src="~/assets/img/icon/download2.svg" alt="télécharger rêverb"></a>
                <div id="reverb-titles__credits">
                    <img src="~/assets/img/tsc/logo_tsc.svg" alt="the solace comes">
                    <img src="~/assets/img/tsc/olow.svg" alt="o'low">
                    <img id="reverbtitle" src="~/assets/img/tsc/RÊVERB.svg" alt="RÊVERB">
                </div>
                <a href="http://smarturl.it/reverb-release/" target="_blank"><img class="reverb-link" src="~/assets/img/icon/play.svg" alt="streamer rêverb"></a>
            </div>
            <div id="reverb-link-mobile">
                <a href="https://bit.ly/3sKUCnB" target="_blank"><img class="reverb-link" src="~/assets/img/icon/download2.svg" alt="télécharger rêverb"></a>
                <a href="http://smarturl.it/reverb-release/" target="_blank"><img class="reverb-link" src="~/assets/img/icon/play.svg" alt="streamer rêverb"></a>
            </div>
            <img id="redvision" src="~/assets/img/icon/eye.webp" alt="red vision">
        </section>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
    methods: {
        animateEYE1() {
            anime({
                targets: '#eye-l',
                translateY: function() {
                    return anime.random(-10, 50);
                },
                loop: true,
                direction: 'alternate',
                duration: 2000,
                easing: 'easeOutInCubic'
            });
        },
        animateEYE2() {
            anime({
                targets: '#eye-r',
                translateY: function() {
                    return anime.random(-40, 50);
                },
                delay: 500,
                loop: true,
                direction: 'alternate',
                duration: 2000,
                easing: 'easeOutInCubic'
            });
        },
        reverbTITLE() {
            anime({
                targets: '#reverbtitle',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 2000,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop: true
            });
        }
    },
    mounted() {
        this.animateEYE1()
        this.animateEYE2()
        this.reverbTITLE()
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/_mixins.scss";
    @import "../assets/css/_colors.scss";
    #reverb-top{
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        @include padding-section;
        padding-top: 15vh;
        padding-bottom: 10vh;
        background: $dark-color;
        #theeye{
            img{
                width: auto;
                height: 200px;
                margin: -1.5px;
            }
        }
        #reverb-titles{
            display: flex;
            flex-direction: row;
            justify-content:space-around;
            width: 100%;
            align-items: flex-end;
            margin-top: 25px;
            margin-bottom: 25px;
            .reverb-link{
                width: 45px;
                height: 45px;
                transition: transform 0.5s ease-out;
                &:hover{
                    transform: translateY(-5px);
                    transition: transform 0.3s ease-out;
                }
            }
            #reverb-titles__credits{
                display: flex;
                flex-direction: column; 
                justify-content: flex-end;
                color: white; 
                img{
                    max-width: 500px;
                    width: 100%;
                    margin-top: 10px;
                }
            }
        }
        #reverb-link-mobile{
            display: none;
        }
        #redvision{
            width: 50px;
            height: auto;
            margin-top: 10px;
        }
    }

    @media screen and (max-width: 850px) {
        #reverb-top{
            @include padding-section-mobile;
            #theeye{
                img{
                    height: auto;
                    width: 50%;
                }
                #eye-l{
                    transform: translateX(0)!important;
                }
                #eye-r{
                  transform: translateX(0)!important;  
                }
            }
            #reverb-titles{
                a{
                    display: none;
                }
            }
            #reverb-link-mobile{
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                margin-top: 30px;
                margin-bottom: 30px;
                .reverb-link{
                    height: 40px;
                    width: 40px;
                    margin-left: 10px;
                    margin-right: 10px;
                }
            }
        }
    }

    #reverb-img{
        img{
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
        }
    }
</style>