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
    data() {
        return {
            posts:[
                {
                title: 'Flat earth',
                content: 'Yesterday, the Flat Earth movement has lost a dear friend.',
                created: '5 czerwca',
                
                title: 'Earth',
                content: 'earth is big',
                created:'6 czerwca',
                
                title: 'other planets',
                content: 'lots of other palnets',
                created: '7 czerwca',



                }

            ]
        };
    }

}
</script>