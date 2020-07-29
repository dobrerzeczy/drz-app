<template>
    <div>
      <div class="registerForm">
        <register-form @registerData='handleRegister($event)' :logging-in="loggingIn"/>
        {{username}}
        {{password}}
      </div>
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
      username: '',
      password: '',
      lastName: '',
      firstName: '',
      age: ''
    }
  },
  methods: {
    async handleRegister({ username, password, firstName, lastName, age }) {
        this.loggingIn = true

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
<style scoped>
  .registerForm{
    text-align: center;
    float: left;
    margin-left: 40%;
    padding: 40px;
    width: 100% + 30px;
  }
</style>