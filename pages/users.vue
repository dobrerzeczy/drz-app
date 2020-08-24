<template>
  <div class="wrapper">
    <table class="table table-striped table-dark">
    <caption>lista użytkkowników</caption>
      <thead class="thead-dark">
      <tr>
         <th scope="row">#</th>
        <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
        <th>Age</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
        <tr>
       <th scope="row">1</th>
      <tr v-for="(user, index) in users">
       <td>{{index}}</td>
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.age}}</td>
        <td><button @click="deleteUser(user.username)"> Skasuj </button></td> 
        
      </tr>

      </tbody>
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