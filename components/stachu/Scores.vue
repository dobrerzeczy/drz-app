<template>
    <div>
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col" class="column" @click="sortnumber()">#</th>
      <th scope="col" class="column" @click="sortname()">Imię</th>
      <th scope="col" class="column" @click="sortlastname()">Nazwisko</th>
      <th scope="col" class="column" @click="sortcar()">Samochód</th>
      <th scope="col" class="column" @click="sorttime()">Czas</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="uczestnik in uczestnicy">
        <td>{{uczestnik.numer}}</td>
        <td>{{uczestnik.imie}}</td>
        <td>{{uczestnik.nazwisko}}</td>
        <td>{{uczestnik.samochod}}</td>
        <td>{{uczestnik.czas}}</td>
      </tr>
  </tbody>
</table>








    </div>
</template>
<script>
export default {
    data(){
        return{
            uczestnicy:
            [ 
                {
                    numer: "1",
                    imie: "Jan",
                    nazwisko: "Kowalski",
                    samochod: "BMW",
                    czas: "2min 5s",
                },
                {
                    numer: "2",
                    imie: "Adrian",
                    nazwisko: "Kowalski",
                    samochod: "AUDI",
                    czas: "2min 10s",
                },
                {
                    numer: "3",
                    imie: "Wincenty",
                    nazwisko: "Kowalski",
                    samochod: "CITROEN",
                    czas: "1min 5s",
                },
            ],
            sortnumberby: "asc",
            sortnameby: "",
            sortlastnameby: "",
            sortcarby: "",
            sorttimeby: "",

        }
    },
    methods:
    {


        
        async sortnumber(column)
        {
            if(this.sortnumberby == "asc")
            {   
                        
                        this.uczestnicy.sort(function(a,b){
                        if(a[column] > b[column])return 1
                        if(a[column] < b[column])return -1
                        else return 0
                        })
                // uczestnik.sort((a,b) => a.numer.localeCompare(b.numery))


                this.sortnumberby = "desc"
            }
            else
            {
                        this.uczestnicy.sort(function(a,b){
                        if(a[column] > b[column])return -1
                        if(a[column] < b[column])return 1
                        else return 0
                        })
                this.sortnumberby = "asc"
            }

            await alert(this.sortnumberby)
        },
        async sortname()
        {
            if(this.sortnameby == "A-Z")
            {
                this.sortnameby = "Z-A"
            }
            else
            {
                this.sortnameby = "A-Z"
            }
            await alert(this.sortnameby)
            
        },
        async sortlastname()
        {
            if(this.sortlastnameby == "A-Z")
            {
                this.sortlastnameby = "Z-A"
            }
            else
            {
                this.sortlastnameby = "A-Z"
            }
            await alert(this.sortlastnameby)
        },
        async sortcar()
        {
            if(this.sortcarby == "A-Z")
            {
                this.sortcarby = "Z-A"
            }
            else
            {
                this.sortcarby = "A-Z"
            }
            await alert(this.sortcarby)
        },
        async sorttime()
        {
            if(this.sorttimeby == "asc")
            {
                this.sorttimeby = "desc"
            }
            else
            {
                this.sorttimeby = "asc"
            }
            await alert(this.sorttimeby)
        },
    },
}
</script>

<style scoped>
.column:hover
{
    background-color: rgba(0, 0, 0, 0.507);
    cursor: pointer;
    
}

</style>


