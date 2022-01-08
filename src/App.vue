<template>
	<Navbar v-show="showNavbar" />
	<router-view />
	<Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
	components: { Navbar, Footer },
	data: () => ({
		showNavbar: true
	}),
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
