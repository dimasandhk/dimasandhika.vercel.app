<template>
	<div class="home container">
		<div class="intro">
			<h1 data-aos="fade-right">Dimas Andhika</h1>
			<div class="row">
				<div class="col-12 col-md-10 col-lg-8">
					<p class="desc" data-aos="fade-right">{{ autoDesc() }}</p>
				</div>
			</div>
		</div>
		<div class="contact">
			<h1 class="text-center" data-aos="fade-up">Get In Touch</h1>
			<div class="row justify-content-center">
				<div
					class="col-12 col-md-6 col-lg-4 mt-3"
					v-for="(data, i) of ContactData"
					:key="data.name"
				>
					<a
						class="btn btn-dark btn-block btn-lg shadow-none"
						:data-aos="i == 1 ? 'zoom-in' : i == 0 ? 'fade-right' : 'fade-left'"
						target="_blank"
						:href="data.link"
					>
						<i :class="data.className"></i> {{ data.name }}
					</a>
				</div>
				<Iframe v-if="videoIds.length" :video1="videoIds[0]" :video2="videoIds[1]" />
				<div class="col-12 col-md-12 col-lg-6 mt-3" v-else v-for="i of 2" :key="i">
					<div class="rounded wait-response p-5">
						<div class="spinner-grow text-dark ml-3" v-for="i of 3" :key="i">
							<span class="sr-only">Loading...</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Contact from "../assets/data/contact.json"; // JSON

import Iframe from "../components/YoutubeIframe.vue"; // Components

import youtube from "../api/recentUpload"; // APIS

import progress from "nprogress"; // Library

export default {
	name: "Home",
	components: { Iframe },
	data: () => ({
		ContactData: Contact,
		videoIds: []
	}),
	async created() {
		progress.start();

		const latestVideos = await youtube.getRecentUpload();
		latestVideos.forEach((snippet) => {
			this.videoIds.push(`https://www.youtube.com/embed/${snippet.id.videoId}`);
		});

		progress.done();
	},
	methods: {
		autoDesc() {
			const year = [2006, new Date().getFullYear()];
			const desc = `Hi! I am Dimas Andhika, I am a ${
				year[1] - year[0]
			} year old high school student who is interested and has a hobby in programming. Highly motivated to continue education and work in the field of software development. Check my project on Github to see what I've learned so far!`;
			return desc;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.home {
	padding-top: 40px;
	padding-bottom: 50px;
}

.contact {
	.wait-response {
		height: 315px;
		width: 100%;
		background-color: #121212;
		animation: gradient 10s linear infinite;
		border: 1px solid #303030;
	}
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
		// background-image: linear-gradient(120deg, #7d7d7d, #d3d3d3, #bdbdbd, #9e9e9e, #696969, #7d7d7d);
		background-image: linear-gradient(120deg, #1a8cb8, #1aa4b8, #1a9cb8, #1a94b8, #1a84b8, #1a8cb8);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 500%;
		animation: gradient 5s linear infinite;
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
	.contact {
		h1 {
			font-size: 36px;
		}
	}
}
</style>
