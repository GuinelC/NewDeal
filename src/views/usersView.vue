<template>
  <div class="userList">
    <div class="titleList">
      <h1>Voici la liste des USERS</h1>
    </div>

    <div class="listItem">
      <div class="userItem" v-for="user in users" :key="user.id">
        <router-link v-bind:to="'/users/' + user.id">
          <h2>{{ user.name }}</h2>
        </router-link>
      </div>
    </div>
    <!-- <router-link v-bind:to="'/getUser/'"><button>ADD USER</button></router-link> -->
  </div>
</template>
  
  <script>
import axios from 'axios'

export default {
  data() {
    return {
      users: null
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => this.users = response.data)
  }
}
</script>
  
  <style scoped>
  .userList {
    width: 90%;
    height: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .titleList {
    width: 100%;
    padding-top: 20px;
    height: auto;
  }
  
  .listItem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .userItem {
    width: 40%;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    border-radius: 10px;
    background: #0F2027;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  }
  
  .userItem a {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
  
  h1 {
    color: cadetblue;
  }

@media (max-width: 500px) {
  .listItem{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .userItem {
    width: 45%;
    padding: 5px;
    margin: 5px;
    margin-bottom: 20px;
  }
}
  </style>