<template>
    <div>
        <div class="post" v-for= "post in posts"> 
            <h1>{{post.title}}</h1>
            <h4>{{post.created}}</h4>
            <div>{{post.content}}</div>
        </div>
    </div>
</template>

<style>
.post {
    padding: 10px;
    margin: 10px;
    border: 1px dashed green;
}
</style>

<script>
export default {
    props: {
        potsToShow: {
        type: Array,
        required: true
        }
    }
}
</script>