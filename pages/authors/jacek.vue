<template>
    <div>
        {{ title }}
        <input type="text" v-model="title">
        <scores :scores="scores" />
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
            scores: [
                {
                    index: '1',
                    first: 'Jan',
                    last: 'Kowalski',
                    auto: 'BMW',
                    time: '2min 5s'
                }, {
                    index: '2',
                    first: 'Adrian',
                    last: 'Kowalski',
                    auto: 'AUDI',
                    time: '2min 10s',
                }, {
                    index: '3',
                    first: 'Wincenty',
                    last: 'Kowalski',
                    auto: 'CITROEN',
                    time: '1min 5s',
                }
                
            ]
        }
    }
}
</script>