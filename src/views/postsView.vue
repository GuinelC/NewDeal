<template>
  <div class="listPost">
    <div class="postTitle">
      <h1>Voici la page avec les posts disponible</h1>
    </div>

    <div class="Post">
      <div class="itemPost" v-for="post in posts" :key="post.id">
        <router-link v-bind:to="'/post/' + post.id">
          <div class="itemID">
            <h3>ID: {{ post.id }}</h3>
          </div>

          <div class="itemTitle">
            <h2>{{ post.title }}</h2><br>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: null
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.posts = response.data)
  }
}
</script>

<style scoped>
.listPost {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: left;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}

.Post{
  width: 90%;
  height: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.itemPost {
  width: 40%;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 25px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: inline-block;
}

.itemID {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.174);
  background-image: repeating-linear-gradient(135deg, hsla(210, 79%, 75%, 0.05) 0px, hsla(210, 79%, 75%, 0.05) 1px, transparent 1px, transparent 11px, hsla(210, 79%, 75%, 0.05) 11px, hsla(210, 79%, 75%, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(45deg, hsla(210, 79%, 75%, 0.05) 0px, hsla(210, 79%, 75%, 0.05) 1px, transparent 1px, transparent 11px, hsla(210, 79%, 75%, 0.05) 11px, hsla(210, 79%, 75%, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(90deg, hsla(210, 79%, 75%, 0.05) 0px, hsla(210, 79%, 75%, 0.05) 1px, transparent 1px, transparent 11px, hsla(210, 79%, 75%, 0.05) 11px, hsla(210, 79%, 75%, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(0deg, hsla(210, 79%, 75%, 0.05) 0px, hsla(210, 79%, 75%, 0.05) 1px, transparent 1px, transparent 11px, hsla(210, 79%, 75%, 0.05) 11px, hsla(210, 79%, 75%, 0.05) 12px, transparent 12px, transparent 32px), linear-gradient(90deg, rgb(83, 220, 200), rgb(58, 78, 174));
}

.itemID h3 {
  color: rgb(255, 255, 255);
  margin-top: 0px;
  padding: 5px;
}

h1 {
  color: cadetblue;
}


a {
  text-decoration: none;
  color: black;
}

@media (max-width: 500px) {
  .itemPost {
    width: 90%;
  }

  .Post{
  width: 100%;
}
}
</style>