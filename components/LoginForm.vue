<template>
    <div>
        <label for="inputLogin">Login</label>
        <br>
        <input type="text" id="inputLogin" name="inputLogin" placeholder="password" v-model="username">
        <br>
        <label for="inputPassword">Password</label>
        <br>
        <input type="password" id="inputPassword" name="inputPassword" placeholder="password" v-model="password">
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
            //this.$router.push("/")
            this.$emit('loginData' [this.username, this.password])
        }
    }
}
</script>