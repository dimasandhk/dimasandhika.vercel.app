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
			<h1 class="text-center">Get In Touch</h1>
			<div class="row justify-content-center">
				<div class="col-12 col-md-6 col-lg-4 mt-3" v-for="data of ContactData" :key="data.name">
					<button class="btn btn-dark btn-block btn-lg">
						<i :class="data.className"></i> {{ data.name }}
					</button>
				</div>
				<div class="col-12 col-md-12 col-lg-6 mt-3">
					<iframe
						height="315"
						src="https://www.youtube.com/embed/69bxzTW6s3c"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div class="col-12 col-md-12 col-lg-6 mt-3">
					<iframe
						height="315"
						src="https://www.youtube.com/embed/7IqpuMFYyCo"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Contact from "../assets/data/contact.json";
export default {
	name: "Home",
	data: () => ({
		ContactData: Contact
	})
};
</script>

<style lang="scss" scoped>
.home {
	padding-top: 40px;
	padding-bottom: 50px;
}

.intro {
	padding-bottom: 80px;
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
