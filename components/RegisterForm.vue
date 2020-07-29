<template>
    <div>
        <label for="inputRegister">Choose username</label>
        <br>
        <input type="text" id="inputRegister" name="inputRegister" placeholder="login" v-model="username">
        <br>
        <label for="inputPassword">Password</label>
        <br>
        <input type="password" id="inputPassword" name="inputPassword" placeholder="password" v-model="password">
        <br>
        <label for="inputPasswordConfirm">Confirm password</label>
        <br>
        <input type="password" id="inputPassword" name="inputPasswordConfirm" placeholder="password" v-model="passwordConfirm">
        <br>
        <button @click="handleLogin">Sign In</button>
    </div>
</template>
<script>
export default {
    data() {
        return  {
        username: "",
        password: "",
    }
    },
    methods:{
        handleLogin()
        {
            this.$router.push("/")
        }
    }
}
</script>
<style scoped>
input{
    margin: 0px 0px 10px 0px;
}
</style>