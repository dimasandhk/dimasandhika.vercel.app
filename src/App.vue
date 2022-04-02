<template>
	<Navbar v-show="showNavbar" />
	<router-view />
	<Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
	components: { Navbar, Footer },
	data: () => ({
		showNavbar: true
	}),
	created() {
		AOS.init({
			once: true,
			duration: 1300
		});
	},
	watch: {
		$route: {
			handler(route) {
				if (route.path == "/links") {
					this.showNavbar = false;
				} else {
					this.showNavbar = true;
				}
			}
		}
	}
};
</script>
