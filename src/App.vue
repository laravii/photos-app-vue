<template>
<div class="container">
<div class="load" v-if="isLoading">
<loader></loader>
</div>
<div v-if="!isLoading && !isAlbum">
<h3 class="page-title">Selecione um nome para ver seus álbuns</h3>
<ul class="usersContainer" v-for="(user, index) in users" :key="index">
  <li class="users" @click="selecUser(user.id)">{{user.name}}</li>
</ul>
</div>
<router-view></router-view>
</div>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {UsersApi} from './services/services-api'

export default {
  name: 'App',
  setup(){
    const users = ref([])
    const isLoading = ref(false)
    const isAlbum = ref(false)
    const router = useRouter()

    onMounted(() => {
    isLoading.value = true
    UsersApi().then(resp => {
     users.value = resp;
    }).finally(() => isLoading.value = false)
  })
    const selecUser = id => {
      isAlbum.value = true
      router.push({name: 'user album', params: {id}})}
    return{users, isLoading, selecUser, isAlbum }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');
body, html{
  margin: 0;
  padding:0;
  font-family: 'Quicksand', sans-serif;
}
.page-title{
  border-bottom: 1px solid lightgray;
  padding: 5px;
}

.container{
  padding: 1rem;
}
.load{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.usersContainer{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 5px;

}
.users{
  padding: 5px;
  cursor: pointer;
  list-style: none;
  font-weight: 600;
}
.btn-back{
    background-color: lightslategray;
    border: none;
    border-radius: 10px;
    padding: 15px 32px;
    margin-top: 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    font-family: 'Quicksand', sans-serif;
}
</style>
