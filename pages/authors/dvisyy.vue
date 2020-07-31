<template>
    <div>
        hej
            <author-posts :posts-to-show="posts" />
    </div>
</template>

<style scoped>
.post {
    margin: 10px;
    padding: 10px;
    border: 1px dashed green;
}
</style>

<script>
import AuthorPosts from '~/components/dvisyy/AuthorPosts';

export default {
    components: {
        AuthorPosts
    },

    data() {
        return {
            posts: [
                {
                    title: 'Gdzie w Polsce szukano złota?',
                    content: 'Hasło “kopalnia złota” większości z nas nie kojarzy się z Polską, a raczej z Dzikim Zachodem i ludźmi w zakurzonych dżinsach dynamitem i kilofem próbujących w obłędzie zdobyć cenny kruszec.',
                    created: '23. lipca',
                }, { 
                    title: 'Kopalnia Złota w Złotym Stoku',
                    content: 'Historia miasta Złoty Stok nierozerwalnie związana jest z rozwojem górnictwa złota i arsenu na Dolnym Śląsku.',
                    created:'24. lipca',
                }, {
                    title: 'Kopalnia Złota "Aurelia" Złotoryi',
                    content: 'Górnictwo złota w okolicach Złotoryi rozwinęło się głównie na złożach osadowych.',
                    created: '25. lipca',
                },

                
            ]
        };
    }
}

</script>