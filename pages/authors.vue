<template>
  <div>
    <div class="btn-group" role="group" aria-label="Basic example">
      <a href="/authors/stachu" class="btn btn-primary">stachu</a>
      <a href="/authors/tymox" class="btn btn-primary">tymox</a>
      <a href="/authors/dvisyy" class="btn btn-primary">dvisyy</a>
      <a href="/authors/chmura" class="btn btn-primary">chmura</a>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  computed: {
    subpage() {
      return this.$route.path;
    }
  }
}
</script>