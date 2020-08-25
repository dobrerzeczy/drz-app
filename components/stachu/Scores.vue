<template>
    <div>
        
        <table class="table table-striped table-dark table-hover">
        <thead>
            <tr>
            <th scope="col" class="column" @click="sortTable('numer')">#</th>
            <th scope="col" class="column" @click="sortTable('imie')">Imię</th>
            <th scope="col" class="column" @click="sortTable('nazwisko')">Nazwisko</th>
            <th scope="col" class="column" @click="sortTable('samochod')">Samochód</th>
            <th scope="col" class="column" @click="sortTable('czas')">Czas</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="uczestnik in uczestnicy">
                <td>{{uczestnik.numer}}</td>
                <td>{{uczestnik.imie}}</td>
                <td>{{uczestnik.nazwisko}}</td>
                <td>{{uczestnik.samochod}}</td>
                <td>{{uczestnik.czas}}</td>
                <td><button @click="deleteValue()">Usun</button></td>
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
            sorttableby: "default",
            sortnumberby: "asc",
            sortnameby: "",
            sortlastnameby: "",
            sortcarby: "",
            sorttimeby: "",

        }
    },
    methods:
    {

        deleteValue()
        {
            this.uczestnik = ""
        },
        sortTable(column){
            if(this.sorttableby == "asc" || this.sorttableby == "default")
            {
                this.uczestnicy.sort(function(a,b){
                if(a[column] > b[column])return 1
                if(a[column] < b[column])return -1
                else return 0
                })
                this.sorttableby = "desc";
            }
            else
            {
                this.uczestnicy.sort(function(a,b){
                if(a[column] > b[column])return -1
                if(a[column] < b[column])return 1
                else return 0
                })
                this.sorttableby = "asc";

            }
      }







        
        // async sortnumber(column)
        // {
        //     if(this.sortnumberby == "asc")
        //     {   
                        
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return 1
        //             if(a[column] < b[column])return -1
        //             else return 0
        //             })
        //         // uczestnik.sort((a,b) => a.numer.localeCompare(b.numery))
        //         this.sortnumberby = "desc"
        //     }
        //     else
        //     {
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return -1
        //             if(a[column] < b[column])return 1
        //             else return 0
        //             })
        //         this.sortnumberby = "asc"
        //     }

        //     // await alert(this.sortnumberby)
        // },

        // async sortname(column)
        // {
        //     if(this.sortnameby == "A-Z")
        //     {
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return 1
        //             if(a[column] < b[column])return -1
        //             else return 0
        //             })
        //         this.sortnameby = "Z-A"
        //     }
        //     else
        //     {
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return -1
        //             if(a[column] < b[column])return 1
        //             else return 0
        //             })
        //         this.sortnameby = "A-Z"
        //     }
        //     // await alert(this.sortnameby)
            
        // },

        // async sortlastname(column)
        // {
        //     if(this.sortlastnameby == "A-Z")
        //     {
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return 1
        //             if(a[column] < b[column])return -1
        //             else return 0
        //             })
        //         this.sortlastnameby = "Z-A"
        //     }
        //     else
        //     {
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return -1
        //             if(a[column] < b[column])return 1
        //             else return 0
        //             })
        //         this.sortlastnameby = "A-Z"
        //     }
        //     // await alert(this.sortlastnameby)
        // },

        // async sortcar(column)
        // {
        //     if(this.sortcarby == "A-Z")
        //     {
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return 1
        //             if(a[column] < b[column])return -1
        //             else return 0
        //             })
        //         this.sortcarby = "Z-A"
        //     }
        //     else
        //     {
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return -1
        //             if(a[column] < b[column])return 1
        //             else return 0
        //             })
        //         this.sortcarby = "A-Z"
        //     }
        //     // await alert(this.sortcarby)
        // },
        
        // async sorttime(column)
        // {
        //     if(this.sorttimeby == "asc")
        //     {
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return 1
        //             if(a[column] < b[column])return -1
        //             else return 0
        //             })
        //         this.sorttimeby = "desc"
        //     }
        //     else
        //     {
        //             this.uczestnicy.sort(function(a,b){
        //             if(a[column] > b[column])return -1
        //             if(a[column] < b[column])return 1
        //             else return 0
        //             })
        //         this.sorttimeby = "asc"
        //     }
        //     // await alert(this.sorttimeby)
        // },
    },
}
</script>

<style scoped>
.column:hover
{
    background-color: rgba(0, 0, 0, 0.507);
    cursor: pointer;
    
}
.column:active
{
    background-color: gray;

}

.table
{
    text-align: center;
}
</style>


