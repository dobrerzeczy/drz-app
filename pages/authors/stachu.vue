<template>
    <div>
        <form method="POST" action="http://localhost:3001/addPost">

            <input type="text" name="newPost" v-model="Text" />
            <button type="submit">Wyslij</button>
        </form>

        <author-posts :posts-to-show="posts" />

        

    </div>
</template>

<script>
import AuthorPosts from '~/components/stachu/AuthorPosts';
export default {
    components: {
        AuthorPosts,
    },
    data() {
        return {
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
            fetch (`http://localhost:3001/Posts`)
        }
    }
}
</script>

<style>

</style>