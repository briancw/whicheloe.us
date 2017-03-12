import Vue from 'vue'
import router from './routes.js'
import app from './components/app.vue'
import VueAnalytics from 'vue-analytics'

let id = process.env.NODE_ENV === 'production' ? 'UA-28431964-14' : 'UA-93531536-3'
Vue.use(VueAnalytics, {id, router})

new Vue({
    router,
    template: '<app />',
    components: {
        app,
    },
}).$mount('#app')
