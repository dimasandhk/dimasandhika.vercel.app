<template>
	<hr />
	<footer class="text-center">Dimas Andhika Diputra - {{ year }}</footer>
</template>

<script>
export default {
	data: () => ({
		year: new Date().getFullYear()
	})
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
hr {
	background-color: lighten($color: $border, $amount: 15%) !important;
}
footer {
	padding-bottom: 15px;
	color: lighten($color: $border, $amount: 15%);
}
</style>
