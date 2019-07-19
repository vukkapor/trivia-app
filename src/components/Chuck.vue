<template>
  <div>
    {{joke}}
    <br />
    <button @click="fetchNewJoke(category)">New joke</button>
    <br />Category:
    <input type="text" v-model="category" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "../store/";

export default {
  data() {
    return {
      category: ""
    };
  },
  // created() {
  //   this.fetchJoke();
  // },
  methods: {
    ...mapActions("ChuckStoreModule", {
      fetchJoke: "fetchJoke"
    }),

    fetchNewJoke(category) {
      this.fetchJoke(category);
    }
  },
  computed: {
    ...mapGetters("ChuckStoreModule", {
      joke: "getJoke"
    })
  },

  beforeRouteEnter(to, from, next) {
    return store
      .dispatch("ChuckStoreModule/fetchJoke")
      .then(() => {
        next();
      })
      .catch(e => {
        alert(e);
      });
  }
};
</script>

