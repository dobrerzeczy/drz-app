<template>
    <div>
        <form method="POST" action="http://localhost:3001/addPost">

            <input type="text" name="newPost" v-model="Text" />
            <button type="submit">Wyslij</button>
            {{Text}}
        </form>

        <author-posts :posts-to-show="posts" />

        <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
</nav>

    </div>
</template>

<script>
import app from '~/service/stachu/api'
import AuthorPosts from '~/components/stachu/AuthorPosts';
export default {
    components: {
        AuthorPosts,
    },
    data() {
        return {
            Text: '',
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
    methods:
    {
        mounted()
        {
            
        }
    }
}
</script>

<style>

</style>