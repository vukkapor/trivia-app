<template>
  <div>
    <!-- <button @click="fetchJoke">Display joke</button> -->
    {{joke}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  // created() {
  //   this.fetchJoke();
  // },
  methods: {
    ...mapActions("ChuckStoreModule", {
      fetchJoke: "fetchJoke"
    })
  },
  computed: {
    ...mapGetters("ChuckStoreModule", {
      joke: "getJoke"
    })
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("ChuckStoreModule/fetchJoke");
    });
  }
};
</script>

