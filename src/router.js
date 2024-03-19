import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Registration from './components/Registration.vue'
import Login from './components/Login.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'

const routes = [
    {path: '/', name:"Home", component: Home, },
    {path: '/registration', name: "Registration", component: Registration},
    {path: '/login', name: "Login", component: Login},
    {path: '/add-restaurant', name: "AddRestaurant", component: AddRestaurant},
    {path: '/update-restaurant/:id', name: "UpdateRestaurant", component: UpdateRestaurant}
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;

