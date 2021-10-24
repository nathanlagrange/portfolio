<template>
  <section>
    <h2>Créations musicales</h2>
    <div class="sep-50" />
    <img id="tsc-profil" src="~/assets/img/photo/tsc.webp" alt="the solace comes">
    <div class="sep-30" />
    <h3>The Solace Comes</h3>
    <div class="sep-10" />
    <span>écouter sur :</span>
    <div class="sep-20" />
    <div id="platforms">
      <a href="https://open.spotify.com/artist/6aLE276JCRs6kclrdEeaGk" target="_blank"><img src="../assets/img/icon/spotify.webp" alt="spotify"></a>
      <a href="https://music.apple.com/fr/artist/the-solace-comes/1486098277" target="_blank"><img src="../assets/img/icon/apple-music.webp" alt="apple music"></a>
      <a href="https://www.deezer.com/fr/artist/77913822" target="_blank"><img src="../assets/img/icon/deezer.webp" alt="deezer"></a>
      <a href="https://soundcloud.com/thesolacecomes" target="_blank"><img src="../assets/img/icon/soundcloud.webp" alt="soundcloud"></a>
      <a href="https://www.youtube.com/channel/UCOl7NnwEt98cbrshNtCcxdw" target="_blank"><img src="../assets/img/icon/youtube.webp" alt="youtube"></a>
      <a href="https://music.amazon.fr/artists/B0812B91FS/the-solace-comes?marketplaceId=A13V1IB3VIYZZH" target="_blank"><img src="../assets/img/icon/amazon-music.webp" alt="amazon music"></a>
    </div>
    <div class="sep-50" />
    <nuxt-link to="/musique">
      <button><img src="~/assets/img/icon/eye.webp" alt="eye"></button>
    </nuxt-link>
    <div class="sep-40" />
    <div id="container-music">
      <a href="https://li.sten.to/amorce" target="_blank">
        <div class="box-music">
          <img src="~/assets/img/tsc/amorce.webp" alt="The Solace Comes - Amorce">
          <div class="sep-10" />
          <h4>Amorce (ft. Gecko)</h4>
          <span>2019</span>
        </div>
      </a>
      <a href="http://smarturl.it/reverb-release/" target="_blank">
        <div class="box-music">
          <img src="~/assets/img/tsc/reverb.webp" alt="The Solace Comes / O'low - Rêverb">
          <div class="sep-10" />
          <h4>Rêverb</h4>
          <span>2021</span>
        </div>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
    @import "../assets/css/_mixins.scss";
    @import "../assets/css/_colors.scss";
    section{
        @include padding-section;
        padding-top: 50px;
        padding-bottom: 50px;
        width: 100%;
        min-height: 800px;
        background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 50%, rgba(61, 135, 224, 0.1) 100%), url('~/assets/img/photo/background-shelter.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        margin-top: -1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        #tsc-profil{
            height: 248px;
            width: 248px;
        }
        h2{
            color: white;
            font-weight: 700;
            text-align: center;
        }
        h3{
            color: white;
            font-weight: 400;
            font-size: 26px;
            text-align: center;
        }
        span{
            color: white;
            font-weight: 400;
            font-size: 20px;
        }
        #platforms{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            img{
                height: 35px;
                width: auto;
                margin-left: 10px;
                margin-right: 10px;
                margin-top: 5px;
                margin-bottom: 5px;
                cursor: pointer;
                transition: opacity 0.3s ease;
                &:hover{
                    opacity: 0.6;
                    transition: opacity 0.3s ease;
                }
            }
        }
        button{
            font-family: 'Manrope';
            @include border-radius;
            width: auto;
            min-height: 45px;
            max-height: 45px;
            outline: none;
            border: none;
            cursor: pointer;
            min-width: 154px;
            max-width: 154px;
            font-size: 16px;
            color: white;
            font-weight: 600;
            transition: all 0.2s ease;
            background: linear-gradient(100deg, #000000 0%, #1E1E1E 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover{
                img{
                    transform: scale(1.2) rotate(5deg);
                    transition: transform 0.3s ease-out;
                }
            }
            img{
                height: 20px;
                width: auto;
                transition: transform 0.3s ease-out;
            }
        }

        #container-music{
            display: flex;
            flex-direction: row;
            justify-content:center;
            width: 100%;
            a{
                text-decoration: none;
                .box-music{
                    text-align: center;
                    margin-left: 20px;
                    margin-right: 20px;
                    transition: transform 0.5s ease;
                        &:hover{
                            transform: scale(1.02);
                            transition: transform 0.3s ease;
                        }
                    img{
                        height: 233px;
                        width: 233px;
                        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
                        @include border-radius;
                    }
                    h4{
                        text-align: center;
                        color: white;
                        font-weight: 700;
                        font-size: 20px;
                        text-shadow: 0px 0px 14px rgba(0, 0, 0, 0.8);
                    }
                    span{
                        text-align: center;
                        color: white;
                        font-weight: 400;
                        font-size: 20px;
                        text-shadow: 0px 0px 14px rgba(0, 0, 0, 0.8);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 850px) {
        section{
            @include padding-section-mobile;
            #platforms{
                img{
                    height: 30px!important;
                    margin-left: 5px;
                    margin-right: 5px;
                }
            }
        }
    }

    @media screen and (max-width: 599px) {
        section{
            #tsc-profil{
                height: 200px;
                max-width: 200px;
            }
            #container-music{
                flex-direction: column;
                .box-music{
                    margin-top: 30px;
                    margin-bottom: 30px;
                    img{
                        max-width: 100%!important;
                        height: auto!important;
                    }
                }
            }
        }
    }
</style>
