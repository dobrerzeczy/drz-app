<template>
    <div class="container">
  <h2>Striped Rows</h2>
  <p>The .table-striped class adds zebra-stripes to a table:</p>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th><button @click="sortTable('name')">Imię i nazwisko</button></th>
        <th><button @click="sortTable('car')">Samochód</button></th>
        <th><button @click="sortTable('time')">Czas</button></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in people">
        <td>{{person.name}}</td>
        <td>{{person.car}}</td>
        <td>{{person.time}}</td>
      </tr>
      <!-- <tr v-for="person in persons">
        <td>{{person.name}}</td>
        <td>{{person.car}}</td>
        <td>{{person.time}}</td>
      </tr> -->

    
    </tbody>
  </table>
</div>
</template>
<script>
export default {
  data(){
    return{
      people:[
        {
          name: 'Jan Kowalski',
          car: 'BMW',
          time: '180s',            
        },
        {
          name: 'Alfred asd',
          car: 'Gungaisf',
          time: '280s',            
        },
        {
          name: 'Belfred Kowalski',
          car: 'Audi',
          time: '380s',            
        },
        {
          name: 'Celfred Kowalski',
          car: 'Toyota',
          time: '480s',            
        },
      ]
    }
  },
  methods:{
      sortTable(column){
        this.people.sort(function(a,b){
          if(a[column] > b[column])return 1
          if(a[column] < b[column])return -1
          else return 0
        })
      }
  }
}
</script>
<style scoped>
  button{
    background-color: blue;
  }
</style>