<template>
<table class="table table-striped">
  <thead>
    <tr>
      <th  @click="sortTable('index')" scope="col">Pos</th>
      <th @click="sortTable('first name')" scope="col">First Name</th>
      <th @click="sortTable('last name')" scope="col">Last Name</th>
      <th @click="sortTable('car')" scope="col">Car</th>
      <th @click="sortTable('time')" scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(score) in scores">
      <th scope="row">{{score.index}}</th>
      <td> {{score.first}} </td>
      <td> {{score.last}} </td>
      <td> {{score.car}} </td>
      <td> {{score.time}} </td> 
    </tr>
    
  </tbody>
</table>
</template>
<script>
export default {
    props: {
        scores:{
            type: Array,
        }
    },
    methods: {
        sortTable(column) {
            this.scores.sort((a, b) => a[column].localeCompare(b[column]));
        }
    }
}
</script>