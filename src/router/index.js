import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/project",
		name: "Github Projects",
		component: () => import("../views/Project.vue")
	}
	// {
	// 	path: '/links',
	// 	name: 'Linktree',
	// 	component: () => import('../views/Linktree.vue')
	// }
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
