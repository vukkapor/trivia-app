<template>
  <div>
    <select v-model="selectedCategory" @click="fetchTriviaByCategory(selectedCategory)">
      <option
        v-for="category in triviaCategories"
        :key="category.id"
        :value="category.id"
      >{{category.title}}</option>
    </select>
    <label for="input">Search trivia</label>
    <input type="text" v-model="input" />
    <ul v-for="trivia in filteredList" :key="trivia.id">
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
      visibileTrivia: null,
      selectedCategory: null,
      input: ""
    };
  },
  methods: {
    ...mapActions("TriviaStoreModule", {
      fetchTrivias: "fetchTrivias",
      fetchTriviaCategories: "fetchTriviaCategories",
      fetchTriviaByCategory: "fetchTriviaByCategory"
    }),
    showAnswer(id) {
      this.visibileTrivia = id;
    }
  },
  created() {
    this.fetchTrivias();
    this.fetchTriviaCategories();
  },
  computed: {
    ...mapGetters("TriviaStoreModule", {
      trivias: "getTrivias",
      triviaCategories: "getTriviaCategories"
    }),
    filteredList() {
      return this.trivias.filter(trivia =>
        trivia.question.toLowerCase().includes(this.input.toLowerCase())
      );
    }
  }
};
</script>
