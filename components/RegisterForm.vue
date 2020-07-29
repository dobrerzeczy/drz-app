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
        <label for="inputConfirmPassword">Confirm password</label>
        <br>
        <input type="password" id="inputConfirmPassword" name="inputConfirmPassword" placeholder="Confirm password" v-model="confirmPassword">
        <br>
    <button @click="handleRegister" :disabled= 'loggingIn || password != confirmPassword || password == "" || username ==""' ><p v-if="!loggingIn" >Sign In</p><p v-if="loggingIn">Signing In</p></button>
        {{wrongPassword}}
    </div>
    
</template>
<script>
export default {
    data() {
        return  {
          username: "",
          password: "",
          confirmPassword: "",
          wrongPassword: '',

        }
    },
    props:{
      loggingIn: {
        type: Boolean,
        required: true
      }
    },
    methods:{
        handleRegister()
        {
            if(this.password === this.confirmPassword){
            const { username, password } = this;
            //this.$router.push("/")
            this.$emit('registerData', { username, password })
            }
            else{
            this.wrongPassword = 'Passwords do not match'
            }
        }
    }
}
</script>