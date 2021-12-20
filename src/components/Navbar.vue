<template>
	<nav class="navbar navbar-expand-lg navbar-dark">
		<div class="container">
			<router-link class="navbar-brand" to="/">@dimasandhk</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav ml-auto">
					<router-link
						class="nav-link"
						data-toggle="collapse"
						data-target=".navbar-collapse.show"
						to="/"
						>Home</router-link
					>
					<router-link
						class="nav-link"
						data-toggle="collapse"
						data-target=".navbar-collapse.show"
						to="/project"
						>Project</router-link
					>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.navbar {
	.nav-link {
		padding-right: 30px;
	}
	.navbar-brand {
		font-weight: 600;
		background-color: $bg !important;
	}
	padding-top: 12px;
	padding-bottom: 12px;
	border-bottom: $border 2px solid;
}
</style>

<style lang="scss">
.router-link-active {
	color: #fff !important;
}
</style>
