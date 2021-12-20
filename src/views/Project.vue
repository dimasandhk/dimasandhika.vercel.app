<template>
	<div class="github container">
		<div class="project">
			<h1>Github Project</h1>
			<h3 v-if="repos.error">{{ repos.error }}</h3>
			<div class="row justify-content-center" v-else></div>
		</div>
	</div>
</template>

<script>
import github from "../api/githubProfile";
export default {
	data: () => ({
		repos: [],
		totalPage: 0
	}),
	async created() {
		if (!this.$route.query.page) this.$router.push(`${this.$route.path}?page=1`);
		const repos = await github.getReposByPage(this.$route.query.page);
		this.repos = repos;
	}
};
</script>

<style lang="scss" scoped>
.project {
	padding-top: 40px;
}
.top-lang {
	width: 100%;
	height: 100%;
}
</style>
