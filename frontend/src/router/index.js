import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import AddSupervisor from "../views/AddSupervisor.vue";
import SupervisorDashboard from "../views/SupervisorDashboard.vue"; // Import the SupervisorDashboard component

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, // Default page when the user accesses the root URL
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/add-supervisor",
    name: "AddSupervisor",
    component: AddSupervisor,
  },
  {
    path: "/supervisor-dashboard",
    name: "SupervisorDashboard",
    component: SupervisorDashboard, // Add the route for SupervisorDashboard
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
