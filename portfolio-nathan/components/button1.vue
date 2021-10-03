<template>
  <button class="button1">
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
    .button1{
        background: linear-gradient(96.41deg, #6525AF 0%, #8A5EBE 100%);
    }
</style>
