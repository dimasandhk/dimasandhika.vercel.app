<template>
	<div class="credentials container">
		<h1>Credentials</h1>
		<div class="row justify-content-center mt-4">
			<Loading v-if="!credentials.length" />
			<CredentialCard v-for="data of credentials" :data="data" :key="data.title" v-else />
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
		credentials: []
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
