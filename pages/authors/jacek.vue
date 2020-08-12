<template>
    <div>
        {{ title }}
        <input type="text" v-model="title">
        </div>
    
</template>

<script>
export default {
    data() {
        return {
            title: 'v-model'
        };
    }
}
</script>