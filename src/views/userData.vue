<template>
    <div class="userMain">
        <div class="titleCard">
            <h1>User Information:</h1>
        </div>

        <div class="userData">
            <h2> Prénom: {{ user.username }} </h2>
            <h2> Nom: {{ user.name }} </h2>
            <h2> iD: {{ user.id }} </h2>
            <h2> Email: {{ user.email }} </h2>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            user: {},
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
            .then((response) => {
                this.user = response.data
                console.log(response.data);
            })
    }
};
</script>

<style scoped>
.userMain {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: auto;
    margin: auto;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: rgb(232, 233, 233);
}

.titleCard {
    background-color: rgba(50, 50, 50, 0.891);
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.titleCard h1 {
    background-image: linear-gradient(90.52deg, #84CABF 0%, #7DA5D8 34.84%, #E7454B 67.09%, #FAB931 99.85%);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}

@media (max-width: 500px) {
    .listItem {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .userMain{
        width: 80%;
    }
}
</style>