<template>
    <div>
        <button id="addPost" @click="showCreate()">Utwórz posta!</button>
            <div id="postcreate">
                <div class="inputs">

                    <label for="title">Tytuł posta</label>
                    <input type="text" name="titlePost" v-model="Title" />

                    <label for="content">Zawartość posta</label>
                    <input type="text" name="contentPost" v-model="Content" />

                    <button id="sendPost" @click="addPost()" :disabled="addingpost">Wyslij</button>

                </div>
            </div>

        <author-posts :posts-to-show="posts" />

        <pagination />
        <scores />
    </div>
</template>

<script>
import app from '~/service/stachu/api';
import Scores from '~/components/stachu/Scores';
import Pagination from '~/components/stachu/pagination';
import AuthorPosts from '~/components/stachu/AuthorPosts';

export default {
    components: {
        AuthorPosts,
        Pagination,
        Scores,
    },
    data() {
        return {

            showed: false,
            addingpost: false,
            Title: '',
            Content: '',
            posts: [],
            
        };
        
    },
    mounted()
        {
            app.get("/Posts").then((response) => {


                this.posts = response.data

            }).catch((error) => {

                console.log(error);

            })

        },
    methods: {
        showCreate()
        {
            
            if(this.showed)
            {
                document.getElementById("postcreate").style.display = "none";
                document.getElementById("addPost").innerHTML = "Utwórz posta!";
                this.showed = false;
            }
            else if(!this.showed)
            {
                document.getElementById("postcreate").style.display = "inline";
                document.getElementById("addPost").innerHTML = "Ukryj";
                this.showed = true;
            }
        },
        async addPost()
        {
            location.reload();
            const {Title, Content} = this;

            this.addingpost = true;
            await app.post("/addPost", {Title, Content});
        },
    }
}
</script>

<style>
#postcreate
{
    display: none;
    z-index: 10000;
    width: 1110px;
    height: 500px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.849);
    border: black solid 1px;
    position: absolute;
    word-break: break-all;
}
.inputs
{
    margin-top: 20%;
    margin-right: 2%;
}
</style>