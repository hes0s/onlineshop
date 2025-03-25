import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home.vue'
import LoginPage from '../features/auth/Login.vue'
import RegistrationPage from '../features/auth/Register.vue'

const routes = [
    {
        path: '/',            
        name: 'HomePage',
        component: HomePage,
    },
    { 
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    { 
        path: '/register',
        name: 'Register',
        component: RegistrationPage
    },
]; 

const router = createRouter({
    history: createWebHistory(),
    routes,
}); 

export default router
    
