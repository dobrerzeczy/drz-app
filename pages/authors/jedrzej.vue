<template>
   <div>

       <posts />

       <pagination />
   </div>
</template>
<script>
import pagination from "~/components/jedrzej/pagination.vue"
import posts from "~/components/jedrzej/posts.vue"
export default {
    components:{
        pagination,
        posts
    },
    data() {
        return{

        }
    }
}
</script>