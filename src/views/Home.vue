<template>
	<div class="home container">
		<div class="intro">
			<h1>Dimas Andhika</h1>
			<div class="row">
				<div class="col-12 col-md-10 col-lg-8">
					<p class="desc">{{ Desc }}</p>
				</div>
			</div>
		</div>
		<div class="contact">
			<h1 class="text-center">Get In Touch</h1>
			<div class="row justify-content-center">
				<div class="col-12 col-md-6 col-lg-4 mt-3" v-for="data of ContactData" :key="data.name">
					<a class="btn btn-dark btn-block btn-lg shadow-none" target="_blank" :href="data.link">
						<i :class="data.className"></i> {{ data.name }}
					</a>
				</div>
				<Iframe />
			</div>
		</div>
	</div>
</template>

<script>
import Contact from "../assets/data/contact.json";
import DescJson from "../assets/data/desc.json";
import Iframe from "../components/YoutubeIframe.vue";

export default {
	name: "Home",
	components: { Iframe },
	data: () => ({
		ContactData: Contact,
		Desc: DescJson.desc
	})
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.home {
	padding-top: 40px;
	padding-bottom: 50px;
}

.btn {
	@include styledButton();
}

@keyframes gradient {
	from {
		background-position: 0;
	}
	to {
		background-position: 500%;
	}
}

.intro {
	h1 {
		// background-image: linear-gradient(120deg, #ff7a00, #ffc900, #f9d371, #ea5c2b, #f14a16, #ff7a00);
		background-image: linear-gradient(120deg, #7d7d7d, #d3d3d3, #bdbdbd, #9e9e9e, #696969, #7d7d7d);
		// background-image: linear-gradient(120deg, #696969, #d3d3d3, #7d7d7d, #9e9e9e, #bdbdbd, #7d7d7d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 500%;
		animation: gradient 10s linear infinite;
	}
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
		padding-bottom: 50px;
		h1 {
			font-size: 36px;
		}
		.desc {
			font-size: 16px;
		}
	}
}
</style>
