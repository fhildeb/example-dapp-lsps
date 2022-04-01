import {
    createWebHistory,
    createRouter
} from "vue-router";

import Login from "./pages/Login.vue";
import Dashboard from "./pages/Dashboard.vue";
import TheWelcome from "./pages/TheWelcome.vue";

const history = createWebHistory();
const routes = [
    {
        path: "/",
        component: Dashboard
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/costumers",
        component: TheWelcome
    },
];
const router = createRouter({
    history,
    routes
});
export default router;