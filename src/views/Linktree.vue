<template>
	<div class="container linktree text-center">
		<h1>Dimas Andhika</h1>
		<p>Everything about me & Everywhere I am on the Internet, in one neatly organised list!</p>
		<div class="row justify-content-center">
						<div class="col-12 col-md-6 col-lg-4 mt-3">
				<a href="" class="btn btn-dark btn-block btn-lg shadow-none"><i class="bi bi-github"></i> Github</a>
			</div>		<div class="col-12 col-md-6 col-lg-4 mt-3">
				<a href="" class="btn btn-dark btn-block btn-lg shadow-none"><i class="bi bi-github"></i> Github</a>
			</div>		<div class="col-12 col-md-6 col-lg-4 mt-3">
				<a href="" class="btn btn-dark btn-block btn-lg shadow-none"><i class="bi bi-github"></i> Github</a>
			</div>		<div class="col-12 col-md-6 col-lg-4 mt-3">
				<a href="" class="btn btn-dark btn-block btn-lg shadow-none"><i class="bi bi-github"></i> Github</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.linktree {
	h1 {
		background-image: linear-gradient(120deg, #ff7a00, #ffc900, #f9d371, #ea5c2b, #f14a16, #ff7a00);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 500%;
		animation: gradient 10s linear infinite;
	}
	a {
		color: white !important;
		@include styledButton();
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
