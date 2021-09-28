<template>
    <button class="button3">
        {{ title }}
    </button>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'BOUTON'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button3{
        background: linear-gradient(96.41deg, #000000 0%, #1E1E1E 100%);
    }
</style>