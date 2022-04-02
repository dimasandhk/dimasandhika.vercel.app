<template>
	<div class="credentials container">
		<h1 data-aos="fade-right">Credentials</h1>
		<div class="row justify-content-center mt-4">
			<Loading v-if="!credentials.length" />
			<CredentialCard
				v-for="data of credentials"
				:data="data"
				:key="data.title"
				v-else
				data-aos="fade-up"
			/>
			<div class="col-12 col-md-12 col-lg-7 mt-3" v-if="credentials.length" data-aos="fade-up">
				<a :href="driveHref" class="btn btn-dark btn-block btn-lg shadow-none" target="_blank">
					Others...
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import showwcase from "../api/credentials";
import CredentialCard from "../components/CredentialCard.vue";
import Loading from "../components/Loading.vue";

export default {
	components: { CredentialCard, Loading },
	data: () => ({
		credentials: [],
		driveHref:
			"https://drive.google.com/drive/folders/1Ykr5sGT79Fif2w2WhUYZhd-kDfAr0kUs?usp=sharing"
	}),
	async created() {
		const credentials = await showwcase.getCredentials();
		this.credentials = [...credentials];
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.credentials {
	.btn {
		@include styledButton();
	}
	padding-top: 40px;
	padding-bottom: 50px;
}

@media only screen and (max-width: 768px) {
	.credentials {
		h1 {
			font-size: 36px;
		}
	}
}
</style>
