<template>
  <div>
    <ul v-for="trivia in trivias" :key="trivia.id">
      <hr />
      <h4>{{trivia.question}}</h4>
      <button @click="showAnswer(trivia.id)">Odgovor</button>
      <h6 v-if="trivia.id === visibileTrivia">{{trivia.answer}}</h6>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      visibileTrivia: null
    };
  },
  methods: {
    ...mapActions("TriviaStoreModule", {
      fetchTrivias: "fetchTrivias"
    }),
    showAnswer(id) {
      this.visibileTrivia = id;
    }
  },
  created() {
    this.fetchTrivias();
  },
  computed: {
    ...mapGetters("TriviaStoreModule", {
      trivias: "getTrivias"
    })
  }
};
</script>
