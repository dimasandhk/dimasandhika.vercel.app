<template>
	<div class="container linktree text-center">
		<h1>Dimas Andhika</h1>
		<p>Everywhere I am on the Internet, in one neatly organised list!</p>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.linktree {
	h1 {
		background-image: linear-gradient(120deg, #ff7a00, #ffc900, #f9d371, #ea5c2b, #f14a16, #ff7a00);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 500%;
		animation: gradient 10s linear infinite;
	}
	padding-top: 40px;
	padding-bottom: 50px;
}

@keyframes gradient {
	from {
		background-position: 0;
	}
	to {
		background-position: 500%;
	}
}
</style>
