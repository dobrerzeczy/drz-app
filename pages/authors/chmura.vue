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

<script>
import AuthorPosts from '~/components/chmura/AuthorPosts';

export default {
  components: {
    AuthorPosts
  },

  data() {
    return {
      posts: [
        {
          title: 'Platform currencies may soon be obsolete',
          content: 'Yes, I said it. Ether (both real and “classic”) may be entirely obsolete and so will Atoms, Tezzies, and all others whose use is to pay for transaction capacity in a single blockchain network.',
          created: '5. Maja'
        }, {
          title: 'CoinFund is celebrating #Juneteenth today and supporting #CryptoForBlackLives',
          content: '2020 should be a year in human history when this statement is not controversial and doesn’t need to be said, but unfortunately this is not the case. Black lives and livelihoods are threatened daily by discrimination and structural inequity across every facet of society. This should not be a reality in 21st century America or across the world but it is. Black Lives Matter.',
          created: '7. Maja'
        }, {
          title: 'New innovation and growth in decentralized exchange',
          content: 'It took a little longer than anticipated, but decentralized exchanges are finally seeing accelerating growth in volumes and serving certain assets more effectively and globally than centralized exchanges. Technological maturity, the proliferation of tokens, and a bullish outlook on the market are helping to drive volumes.',
          created: '10. Maja'
        }
      ]
    };
  }
}
</script>