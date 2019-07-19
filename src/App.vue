<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Trivia App</router-link>

      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <router-link class="navbar-brand" to="/chuck">Chuck</router-link>
          </a>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
