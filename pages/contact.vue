<template>
   

    <div class="container">
        <div class="row">

            <div class="col-sm">
                <input type="text" v-model="name" id="name" name="name" class="form-control">
                            <label for="name" class="">Twoje imię</label>
                <textarea type="text"  v-model="message" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Twoja wiadomość</label>
            </div>
          
        </div>

        <button @click="addComment" type="button" class="btn btn-primary">Wyślij</button>

           

        <div :key="index" v-for="(comment, index) in comments">
          <br><br> {{comment.name}}
          <br>  {{comment.message}}
        </div>

    </div>


   

</template>

<script>
import api from '~/api';

    export default {
    
      data () {
        return{
          name: '',
          message: '',
          comments: []
        }
      },

      mounted() {
        this.getComments();
      },

      methods: {
        async addComment() {
           const {name, message} = this;
          const { data } = await api.post('/addComment', {name, message});

          console.log(data);
          this.getComments();
        },
        async getComments() {
          const { data } = await api.get('/comments', {name, message});

          this.comments = data;

        }
      }
        
    }
</script>


