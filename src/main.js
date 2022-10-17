import App from './app.svelte'
import './styles/global.less'

const app = new App({
    target: document.querySelector('body'),
})

export default app
