<template>
    <button class="button2">
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
    .button2{
        background: linear-gradient(96.41deg, #3D87E0 0%, #70ABF3 100%);
    }
</style>