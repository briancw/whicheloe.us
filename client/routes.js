import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**
 * Helper function for loading components
 * @param  {String} templateName    Name of the component to load
 * @return {Function<Promise>}       A Promise, in an function, in an enigma
 */
function loadPage(templateName) {
    // TODO switch to import when that's a bit more stable
    return () => import(`./pages/${templateName}.vue`)
}

const home = loadPage('home')

const routes = [
    {path: '/', component: home, meta: {title: 'Welcome'}},
]

let options = {
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return {x: 0, y: 0}
    },
}

export default () => new Router(options)
