<template>
    <div class="mainPost">
        <h1>Voici les informations de ce POST:</h1>

        <div class="postInfo">
            <div class="postTitle">
                <h2>{{ post.title }} </h2>
            </div>
            <div class="postId">
                <h2>iD: {{ post.id }} </h2>
            </div>
            <div class="postBody">
                <p>{{ post.body }}</p>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            post: {},
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
            .then((response) => {
                this.post = response.data
                console.log(response.data);
            })
    }
};
</script>

<style scoped>
.mainPost{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
}

.postInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 40px;
    width: 75%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.postTitle{
    background-color: rgba(128, 128, 128, 0.508);
    width: 100%;
    text-transform: uppercase;
}

.postId{
    border-bottom: 2px solid  #27C2DF;
    min-width: 200px;
}

.postBody{
    width: 75%;
}


</style>