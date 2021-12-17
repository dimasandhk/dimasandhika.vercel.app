<template>
	<div class="home container">
		<div class="intro">
			<h1>Dimas Andhika</h1>
			<div class="row">
				<div class="col-12 col-md-10 col-lg-8">
					<p class="desc">
						Hi! I am Dimas Andhika, I am a 15 year old student who is interested and has a hobby in
						programming. All my repos on github are just an implementations of what I've learned so
						far.
					</p>
				</div>
			</div>
		</div>
		<div class="contact">
			<h1>Get In Touch</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home"
};
</script>

<style lang="scss" scoped>
.home {
	padding-top: 40px;
}

.intro {
	.desc {
		font-size: 20px;
	}
}

@media only screen and (max-width: 768px) {
	.home {
		padding-top: 30px;
	}
	.intro {
		h1 {
			font-size: 36px;
		}
		.desc {
			font-size: 16px;
		}
	}
}
</style>
