<template>
    <div>
      <div class="post" v-for="post in posts">
        <h1>{{ post.title }}</h1>
        <h4>{{ post.date }}</h4>
        <div>{{ post.content }}</div>
      </div>
      <div class="user-article">
        Napisz swój własny artykuł
        <label for="title">Tytuł</label>
        <input type="text" v-model="articleTitle" id="title">
        <label for="content">Tekst</label>
        <input type="text" v-model="articleContent" id="content">
        <button type="submit" @click="pushArticle(articleTitle, articleContent)">Wyślij</button>
      </div>    
    </div>


    

</template>
<script>
export default {
    data(){
        return{
            posts: [        {
          title: 'Platform currencies may soon be obsolete',
          content: 'Yes, I said it. Ether (both real and “classic”) may be entirely obsolete and so will Atoms, Tezzies, and all others whose use is to pay for transaction capacity in a single blockchain network.',
          date: '5. Maja'
        }, {
          title: 'CoinFund is celebrating #Juneteenth today and supporting #CryptoForBlackLives',
          content: '2020 should be a year in human history when this statement is not controversial and doesn’t need to be said, but unfortunately this is not the case. Black lives and livelihoods are threatened daily by discrimination and structural inequity across every facet of society. This should not be a reality in 21st century America or across the world but it is. Black Lives Matter.',
          date: '7. Maja'
        }, {
          title: 'New innovation and growth in decentralized exchange',
          content: 'It took a little longer than anticipated, but decentralized exchanges are finally seeing accelerating growth in volumes and serving certain assets more effectively and globally than centralized exchanges. Technological maturity, the proliferation of tokens, and a bullish outlook on the market are helping to drive volumes.',
          date: '10. Maja'
        }],
            articleTitle: '',
            articleDate: '',
            articleContent: ''
        }
      },
          methods:{
        pushArticle(title, content){
            //title = this.articleTitle
            let date = new Date().toLocaleString()
            //content = this.articleContent

            this.posts.push({title, date, content})

            //this.articleTitle = ''
            //this.articleContent = ''
        }
    }

}
</script>

<style>
.post {
  margin: 10px;
  padding: 10px;
  text-transform: uppercase;
  border: 1px dashed green;
}
</style>