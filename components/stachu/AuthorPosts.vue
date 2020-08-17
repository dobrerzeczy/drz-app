<template>
    <div>
        <div class="post" v-for="post in postsToShow">
            <h1>{{post.Title}}</h1>
            <h4>{{post.Date}}</h4>
            <div>{{post.Content}}</div>
        </div>    
    </div>
</template>

<script>
import app from '~/service/stachu/api'
export default {
    props:
    {
        postsToShow: {
            type: Array,
            required: true,
        }
    },
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