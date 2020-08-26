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
      asc: true,
      desc: false,
      people:[
        {
          name: 'Jan Kowalski',
          car: 'BMW',
          time: 120,     
          // time: toMinutes(this.timeInSec)       
        },
        {
          name: 'Alfred asd',
          car: 'Gungaisf',
          time: 180,            
        },
        {
          name: 'Belfred Kowalski',
          car: 'Audi',
          time: 380,            
        },
        {
          name: 'Celfred Kowalski',
          car: 'Toyota',
          time: 480,            
        },
      ]
    }
  },
  mounted(){
    for(let i = 0; i < this.people.length; i++)
    {
      let secondsTotal =  this.people[i].time
      let seconds = secondsTotal % 60
      let minutes = Math.floor(secondsTotal / 60)
      this.people[i].time = `${minutes}min ${seconds}sec`
    }
  },
  methods:{
    sortTable(column){
      if(this.asc == true){
        this.asc = false
        this.desc = true
        this.people.sort(function(a,b){
          if(a[column] > b[column])return 1
          if(a[column] < b[column])return -1
          else return 0
        })
      }
      else{
        this.desc = false
        this.asc = true
        this.people.sort(function(a,b){
          if(a[column] > b[column])return -1
          if(a[column] < b[column])return 1
          else return 0
        })
      }
    }
  }
}
</script>
<style scoped>
  button{
    background-color: blue;
  }
</style>
