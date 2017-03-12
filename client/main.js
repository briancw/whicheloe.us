import Vue from 'vue'
import router from './routes.js'
import app from './components/app.vue'

new Vue({
    router,
    template: '<app />',
    components: {
        app,
    },
}).$mount('#app')
