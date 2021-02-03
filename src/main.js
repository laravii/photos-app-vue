import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Loader from './components/Loader';
import Albuns from './components/Albuns';
import Photos from './components/Photos';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/albums', name: 'albums', component: App },
    { path: '/album/:id', name: 'user album', component: Albuns },
    { path: '/photos/:id', name: 'user photos', component: Photos },
  ],
});

app.component('Loader', Loader);
app.use(router);
app.mount('#app');
