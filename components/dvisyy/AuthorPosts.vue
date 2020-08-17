<template>
    <div>
         <div class="post" v-for="post in postsToShow">
            <h1> {{ post.title }} </h1>
            <h4> {{ post.content }} </h4>
            <div> {{ post.created }} </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        postsToShow: {
            type: Array,
            required: true
        }
    }
}
</script>