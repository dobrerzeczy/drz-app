<template>
    <div>
        <label for="inputFirstname">Firstname</label>
        <br>
        <input type="text" id="inputFirstname" name="inputFirstname" placeholder="firstname" v-model="firstName">
        <br>
        <label for="inputLastname">Lastname</label>
        <br>
        <input type="text" id="inputLastname" name="inputLastname" placeholder="lastname" v-model="lastName">
        <br>
        <label for="inputAge">Age</label>
        <br>
        <input type="number" id="inputAge" name="inputAge" placeholder="age" v-model="age" >
        <br>
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
    <button @click="handleRegister" :disabled='loggingIn || 
    password != confirmPassword || password == "" || 
    username =="" || username == password ||
    !age || !firstName || !lastName' ><p v-if="!loggingIn" >Sign In</p><p v-if="loggingIn">Signing In</p></button>
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
          firstName: '',
          lastName:'',
          age: '',
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
            const { username, password, firstName, lastName, age } = this;
            //this.$router.push("/")
            this.$emit('registerData', { username, password, firstName, lastName, age })
            }
            else{
            this.wrongPassword = 'Passwords do not match'
            }
        }
    }
}
</script>