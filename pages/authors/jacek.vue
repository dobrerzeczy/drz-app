<template>
    <div>
        {{ title }}
        <input type="text" v-model="title">
        </div>
    
</template>

<script>
import pagination from "~/components/jacek/Scores.vue"
export default {
    data() {
        return {
            title: 'v-model'
        };
    }
}
</script>