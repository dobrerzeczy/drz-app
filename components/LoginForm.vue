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
        <button @click="handleLogin" :disabled= 'loggingIn'><p v-if="!loggingIn">Sign In</p><p v-if="loggingIn">Signing In</p></button>
        
    </div>
    
</template>
<script>
export default {
    data() {
        return  {
        username: "",
        password: "",
        loggingIn: false
    }
    },
    methods:{
        handleLogin()
        {
            this.loggingIn = true;
            const { username, password } = this;
            //this.$router.push("/")
            this.$emit('loginData', { username, password })
        }
    }
}
</script>