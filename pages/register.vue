<template>
    <div class="container">
        <register-form />
     </div>
</template>

<script>
import RegisterForm from   '~/components/RegisterForm.vue'

export default {
 components: {
     RegisterForm
 }
}
</script>

<style scoped>
register-form{

}
.container{
    text-align: center;
}

</style>