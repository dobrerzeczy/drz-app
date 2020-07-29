<template>
    <div>
        <login-form @loginData='addLoginData($event)' />
        {{username}}
     </div>
</template>

<script>
import LoginForm from   '~/components/LoginForm.vue'

export default {
 components: {
     LoginForm
 },
data() {
    return{
        username: "",
        password: ""
    }
},
 methods:{
     addLoginData(loginData){
         this.username = loginData[0],
         this.password = loginData[1]
     }
 }

}
</script>
