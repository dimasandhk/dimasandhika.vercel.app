<template>
	<div class="github container">
		<div class="project">
			<h1>Github Project</h1>
			<div class="btn-group" role="group">
				<button type="button" class="btn btn-dark shadow-none" :disabled="true">Prev</button>
				<button type="button" class="btn btn-dark shadow-none">Next</button>
			</div>
			<h3 v-if="repos.error" class="mt-3">{{ repos.error }}</h3>
			<div class="row justify-content-center" v-else>
				<Loading v-if="!repos.length || repos.error" />
				<ProjectCard v-for="r of repos" :key="r.id" :r="r" />
			</div>
		</div>
	</div>
</template>

<script>
import github from "../api/githubProfile";
import progress from "nprogress";
import ProjectCard from "../components/ProjectCard.vue";
import Loading from "../components/Loading.vue";

export default {
	components: { Loading, ProjectCard },
	data: () => ({
		repos: [],
		totalPage: 0
	}),
	async mounted() {
		if (!this.$route.query.page) this.$router.push(`${this.$route.path}?page=1`);
		sessionStorage.setItem("page", this.$route.query.page);

		progress.start();
		const repos = await github.getReposByPage(this.$route.query.page);
		this.repos = repos;
		progress.done();
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.btn {
	@include styledButton(#393940);
}

.github {
	padding-top: 40px;
	padding-bottom: 50px;
}
</style>
