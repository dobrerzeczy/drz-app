<template>
    <div>
        <author-posts :posts-to-show="posts" />    
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
import AuthorPosts from '~/components/tymox/AuthorPosts';

export default {
    components: {
        AuthorPosts
    },

      data() {
        return {
            posts: [
                {
                
                    title: 'Flat earth',
                    content: 'Yesterday, the Flat Earth movement has lost a dear friend.',
                    created: '5 czerwca',
                },{
                    title: 'Earth',
                    content: 'earth is big',
                    created:'6 czerwca',
                },{
                    title: 'other planets',
                    content: 'lots of other palnets',
                    created: '7 czerwca',
                }

            ]
        };
    }

}
</script>