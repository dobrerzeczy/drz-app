<template>
    <div>
        <login-form @loginData='addLoginData($event)' />
        {{username}}
        {{password}}
     </div>
</template>

<script>
import LoginForm from   '~/components/LoginForm.vue'

export default {
  components: {
    LoginForm
  },
  
  data() {
    return {
      loggingIn: false,
      username: "",
      password: ""
    }
  },
 
  methods: {
    addLoginData({username, password}) {
      /*
      1. button disabled
      2. sign in -> signing in
       */
    }
  }
}
</script>
