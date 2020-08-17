<template>
  <div class="wrapper">
    <table >
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Delete</th>
      </tr>
      <tr v-for="user in users">
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.age}}</td>
        <td><button @click="deleteUser(user.username)"> Skasuj </button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import api from '~/api';

export default {
  data() {
    return {
      users: []
    }
  },

  beforeMount() {
    this.getUsers();
  },
  methods: {
    deleteUser(username) {
      api.delete('/users', username)

      this.getUsers()
    },

    async getUsers() {
      const { data } = await api.get('/users');

      this.users = data;
    }
  }
  
}
</script>

<style scoped>
@import '~/styles/usersStyle.css'
</style>