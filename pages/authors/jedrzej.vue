<template>
   <div>

       <posts />
        <Scores/>
       <pagination />
   </div>
</template>
<script>
import pagination from "~/components/jedrzej/pagination.vue"
import posts from "~/components/jedrzej/posts.vue"
import Scores from "~/components/jedrzej/Scores.vue"
export default {
    components:{
        pagination,
        posts,
        Scores
    },
    data() {
        return{

        }
    }
}
</script>