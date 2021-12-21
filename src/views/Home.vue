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
					<a class="btn btn-dark btn-block btn-lg">
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
