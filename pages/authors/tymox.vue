<template>
    <div>
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