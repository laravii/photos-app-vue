<template>
<div class="load" v-if="isLoading">
<loader></loader>
</div>
<h3 class="page-title">Total de fotos: {{photos.length}}</h3>
<div class="card-container" v-if="!isLoading">
<div class="card" v-for="(photo, index) in photos" :key="index">
  <h3>{{photo.title}}</h3>
 <img :src="photo.thumbnailUrl">
</div>
</div>
 <button @click="back" class="btn-back">back</button>
</template>

<script>
import {PhotosApi} from '../services/services-api'
import {onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'

export default {
  name: 'Photos',
  setup(){
    const isLoading = ref(false);
    const photos = ref([]);
    const router = useRouter()
    const route = useRoute()
    onMounted(() => {
      isLoading.value = true;
      PhotosApi(route.params.id).then(res => {
        photos.value = res
        console.log(res)
      }).finally(() => isLoading.value = false)
    })
    const back = () => {
      router.replace(`/album/${route.params.id}`)
    }
    return{isLoading, photos, back}
  }
}
</script>

<style scoped>
.card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 2px solid gray;
  width: 250px;
  height: 300px;
  margin: 3px;
  border-radius: 10px;
}
.card h3{
  display: flex;
  flex-wrap: wrap;
}
</style>