<template>
  <div>
    <table style="width:100%">
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
table {
  margin: 10px;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>