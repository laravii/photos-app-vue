<template>
<div class="load" v-if="isLoading">
<loader></loader>
</div>
<div v-if="!isLoading && !isPhotos">
  <h3 class="page-title">Total de álbums: {{albums.length}}</h3>
<ul class="usersContainer" v-for="(album, index) in albums" :key="index">
  <li class="users" @click="selectedAlbum(album.id)">Álbum: {{album.title}}</li>
</ul>
</div>
 <button @click="back" class="btn-back">back</button>
</template>

<script>
import {onMounted, ref} from 'vue'
import {AlbumApi} from '../services/services-api'
import {useRouter, useRoute} from 'vue-router'

export default {
  name: 'Albuns',
  setup(){
    const isLoading = ref(false);
    const router = useRouter();
    const route = useRoute();
    const albums = ref([]);
    const isPhotos = ref(false)

    onMounted(() => {
      isLoading.value = true;
      AlbumApi(route.params.id).then(res => {
        albums.value = res
      }).finally(() => isLoading.value = false )
    })

    const selectedAlbum = (id) => {
      isPhotos.value = true;
      router.push({name: 'user photos', params: {id}})
    }
    const back = () =>{
      router.replace("/albums")
    }
    return{isLoading, albums, selectedAlbum, back}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
