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
                    {{Title}}
                    {{Content}}
                </div>
            </div>

        <author-posts :posts-to-show="posts" />

        <pagination />

    </div>
</template>

<script>
import app from '~/service/stachu/api'
import Pagination from '~/components/stachu/pagination'
import AuthorPosts from '~/components/stachu/AuthorPosts';

export default {
    components: {
        AuthorPosts,
        Pagination,
    },
    data() {
        return {

            showed: false,
            addingpost: false,
            Title: '',
            Content: '',
            posts: [
                {
                    title: `Pierwszy tytuł ;p`,
                    content: `No dzien dobry.`,
                    created: `1. Czerwca 2020`,
                },
                {
                    title: `Drugi tytuł ;p`,
                    content: `Siema`,
                    created: `2. Czerwca 2020`,
                },
                {
                    title: `Trzeci tytuł ;p`,
                    content: `Czesc, dzien dobry, czolem, hah, tekst, pisze content postu`,
                    created: `3. Czerwca 2020`,
                },


            ]
            


        };
        
    },

    methods: {
        mounted()
        {
            
        },
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