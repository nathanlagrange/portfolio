<template>
    <span class="link-article">OUVRIR L’ARTICLE<img src="~/assets/img/icon/arrow-article.svg"></span>
</template>

<style lang="scss">
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_colors.scss";
@import "~/assets/css/_blog.scss";
    .link-article{
        color: $cold-color;
        font-weight: 700;
        text-decoration: underline;
        display: flex;
        align-items: flex-end;
        cursor: pointer;
        transition: opacity 0.3s ease;
        &:hover{
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }
        img{
            height: 20px;
        }
    }
</style>
