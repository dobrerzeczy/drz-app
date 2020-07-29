<template>
    <div>
        <register-form @registerData='handleRegister($event)' :logging-in="loggingIn"/>
        {{username}}
        {{password}}
     </div>
</template>

<script>
import api from '~/api';

import RegisterForm from   '~/components/RegisterForm.vue'

export default {
  components: {
    RegisterForm
  },
  
  data() {
    return {
      loggingIn: false,
      username: "",
      password: "",
    }
  },
 
  methods: {
    async handleRegister() {
        this.loggingIn = true;
            const { 
                username,
                firstName,
                lastName,
                age,
                password
            } = this;
            await api.post('/users/', {
                username,
                password,
                age,
                firstName,
                lastName
            });
        this.loggingIn = false;
        this.$router.push('/users');
        }
    }

  
}
</script>
