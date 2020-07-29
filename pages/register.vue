<template>
    <div>
        <register-form @registerData='addRegisterData($event)' :logging-in="loggingIn"/>
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
    async addRegisterData({username, password}) {
      this.loggingIn = true;
      /*
      1. button disabled
      2. sign in -> signing in
       */
      /*const { data } = await api.post('/register', {username, password});

      console.log(data);

      this.loggingIn = false;
*/
    }
  },

  
}
</script>
