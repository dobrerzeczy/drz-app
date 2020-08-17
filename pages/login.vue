<template>
    <div class="loginForm">
        <login-form @loginData='addLoginData($event)' :logging-in="loggingIn"/>
        {{username}}
        {{password}}
     </div>
</template>

<script>
import api from '~/api';

import LoginForm from   '~/components/LoginForm.vue'

export default {
  components: {
    LoginForm
  },
  
  data() {
    return {
      loggingIn: false,
      username: "",
      password: "",
    }
  },
 
  methods: {
    async addLoginData({username, password}) {
      this.loggingIn = true;
      /*
      1. button disabled
      2. sign in -> signing in
       */
      const { data } = await api.post('/login', {username, password});

      console.log(data);

      this.loggingIn = false;

    }
  },

  
}
</script>
<style scoped>
  .loginForm{
    text-align: center;
    float: left;
    margin-left: 40%;
    padding: 40px;
    
  }
</style>