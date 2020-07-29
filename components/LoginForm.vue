<template>
    <div>
        <label for="inputLogin">Login</label>
        <br>
        <input type="text" id="inputLogin" name="inputLogin" placeholder="login" v-model="username">
        <br>
        <label for="inputPassword">Password</label>
        <br>
        <input type="password" id="inputPassword" name="inputPassword" placeholder="password" v-model="password">
        <br>
        <button @click="handleLogin(username, password)">Sign In</button>
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
        handleLogin(username, password)
        {
            //this.$router.push("/")
            this.$emit('login-data', [username, password])
        }
    }
}
</script>
<style scoped>
input{
    margin: 0px 0px 10px 0px;
}
</style>