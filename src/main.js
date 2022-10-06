import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'

const store = createStore({
    state(){
        return{
            line1:"This is Vuex page",
            line2:"This is Vuex page two",
        };
    }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
