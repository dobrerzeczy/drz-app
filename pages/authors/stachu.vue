<template>
    <div>
        <div class="post" v-for="post in posts">
            <h1>{{post.title}}</h1>
            <h4>{{post.created}}</h4>
            <div>{{post.content}}</div>
        </div>
    </div>
</template>

<script>
export default {
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
    }
}
</script>

<style>
.post
{
    padding: 10px;
    margin: 10px;
    border: 1px dashed green;
}
</style>