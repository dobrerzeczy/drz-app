<template>
    <div>
      <center>
        <label for="inputLogin">Login</label>
        <br>
        <input type="text" id="inputLogin" name="inputLogin" placeholder="login" v-model="username">
        <br>
        <label for="inputPassword">Password</label>
        <br>
        <input type="password" id="inputPassword" name="inputPassword" placeholder="password" v-model="password">
        <br>
        <button @click="handleLogin" :disabled= 'loggingIn'><p v-if="!loggingIn">Sign In</p><p v-if="loggingIn">Signing In</p></button>
        </center>
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
    props:{
      loggingIn: {
        type: Boolean,
        required: true
      }
    },
    methods:{
        handleLogin()
        {
            const { username, password } = this;
            //this.$router.push("/")
            this.$emit('loginData', { username, password })
        }
    }
}
</script>

<style scoped>
      div {
        background-color: rgb(212, 212, 212);
        width: 220px;
        height: 180px;
      }
      button {
        position: relative;
        top: 5px;
      }
</style>