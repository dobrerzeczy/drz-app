<template>
    <div>
        <input v-model="username" placeholder="username" />
        <input v-model="firstName" placeholder="firstName" />
        <input v-model="lastName" placeholder="lastName" />
        <input v-model="age" placeholder="age" />
        <input v-model="password" placeholder="password" />
        <button @click="handleRegister">register</button>
    </div>
</template>

<script>
import api from '~/api';

export default {
    data() {
        return {

        username: '',
        firstName: '',
        lastName: '',
        age: '',
        password: '',
        }
    },

    methods: {
        async handleRegister() {
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

            this.$router.push('/users');
        }
    }
}
</script>