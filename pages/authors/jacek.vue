<template>
    <div>
        {{ title }}
        <input type="text" v-model="title">
        <scores />
        </div>
    
</template>

<script>
import Scores from "~/components/jacek/Scores.vue"

export default {
    components: {
        Scores,
    },
    data() {
        return {
            title: 'v-model'
        };
    }
}
</script>