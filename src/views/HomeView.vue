<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Newdeal-logo.png">

    <div class="headerHome">
      <div class="headerTitle">
        <h1>Manipulée des données via une:</h1>
        <h3>_API</h3>
        <p>Utilisation de la libraire {Json Placeholder}</p>
      </div>
      <img alt="API" src="../assets/api.jpg">
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
img {
  width: 50%;
  height: auto;
  margin-top: 40px;
}

.headerHome {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.headerHome img {
  width: 400px;
}

.headerHome h1 {
  text-transform: uppercase;
}

.headerTitle {
  display: flex;
  flex-direction: column;
}

.headerTitle h3 {
  color: #27C2DF;
  font-size: 75px;
  margin: 0;
}

.headerTitle p {
  font-size: 25px;
  font-weight: bold;
}

@media (max-width: 500px) {
  .home img {
    width: 90%;
    margin-top: 30px;
  }

  .headerHome {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin: auto;
}

.headerTitle h1{
  font-size: 25px;
  margin-top: 30;
}
.headerTitle h3 {
  font-size: 50px;
  margin: 0;
}

.headerHome img {
  width: 75%;
  margin-top: 0;
}
}
</style>
