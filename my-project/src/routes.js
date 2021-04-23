import Home from './components/Home.vue'
import User from './components/user/User.vue'
import Weather from './components/Weather.vue'
import FormVue from './components/FormVue.vue'

export const routes = [
    { path: '/', name: 'homePage', component: Home },
    { path: '/user', name: 'user', component: User },
    { path: '/weather', name: 'weather', component: Weather },
    { path: '/login', name: 'login', component: FormVue}
]