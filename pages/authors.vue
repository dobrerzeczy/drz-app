<template>
  <div class="container">
    <div class="btn-group" role="group" aria-label="Basic example">
      <a href="/authors/stachu" class="btn btn-secondary">stachu</a>
      <a href="/authors/tymox" class="btn btn-secondary">tymox</a>
      <a href="/authors/dvisyy" class="btn btn-secondary">dvisyy</a>
      <a href="/authors/chmura" class="btn btn-secondary">chmura</a>
      <a href="/authors/jedrzej" class="btn btn-secondary">jedrzej</a>
      <a href="/authors/jacek" class="btn btn-secondary">jacek</a>
      <a href="/authors/igor" class="btn btn-secondary">igor</a>
    </div>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>


    <nuxt-child />
  </div>
</template>

<script>
export default {

}

</script>