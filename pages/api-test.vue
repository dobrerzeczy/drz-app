<template>
    <div>odpowiedź z serwera: {{ response }}</div>
</template>

<script>
import api from '~/api';

export default {
  data() {
    return {
      response: ''
    }
  },

  async beforeMount() {
    const { data } = await api.get('/test');

    this.response = data;
  }
}
</script>