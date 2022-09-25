<template>
  <div id="app">
    <nav>
      <router-link to="/">ACCUEIL</router-link>
      <router-link to="/posts"> POSTS</router-link>
      <router-link to="/users"> USERS</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  height: 75px;
  width: 100%;
  background-color: #2c3e50;
  display: flex;
  align-items:center;
  justify-content: space-around;
}

nav a {
  display: flex;
  display: inline-block;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #1EAFD5;
}
</style>
