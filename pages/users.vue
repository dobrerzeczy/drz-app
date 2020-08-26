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
<<<<<<< HEAD
        <td><button @click="deleteUser(user.username)"> Skasuj </button></td> 
        
=======
        <td><button>Delete</button></td>
>>>>>>> 6d7339880badf35bffe9d30028fc13a0fe584bb7
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
<<<<<<< HEAD
@import '~/styles/usersStyle.css'
=======
table {
  /* margin: 10px; */
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
>>>>>>> 6d7339880badf35bffe9d30028fc13a0fe584bb7
</style>