<template>
    <div class="container">
        <login-form v-on:loginData="login-data"/>
     </div>
</template>

<script>
import LoginForm from   '~/components/LoginForm.vue'

export default {
    data(){
        return{
            
        }
    },
 components: {
     LoginForm
 },

}

//database
/*
    const { MongoClient } = require('mongodb')
    const mongoClient = require('mongodb').MongoClient
    const url = 'mongodb://127.0.0.1:27017'
    const dbname = 'mongo-page'
    MongoClient.connect(url, {} , (error,client) =>{
        if(error){
            console.log("Couldn't connect to database")
        }
        else{
            console.log('Connected succesfully!')
        }
    
    const db = client.db(dbname);
    })
*/






</script>

<style scoped>
login-form{

}
.container{
    text-align: center;
}

</style>