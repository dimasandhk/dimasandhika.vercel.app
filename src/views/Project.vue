<template>
	<div class="github container">
		<div class="project">
			<h1>Github Project</h1>
			<h3 v-if="repos.error">{{ repos.error }}</h3>
			<div class="row justify-content-center" v-else>
				<div class="col-12 col-md-12 col-lg-6" v-for="r of repos" :key="r.id">
					<div class="project-card rounded">
						<h5>{{ r.name }} ({{ r.language || "No Lang" }})</h5>
						<p>{{ r.description.length > 59 ? r.description : r.description.slice(0, 59) }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import github from "../api/githubProfile";
import progress from "nprogress";

export default {
	data: () => ({
		repos: [],
		totalPage: 0
	}),
	async created() {
		if (!this.$route.query.page) this.$router.push(`${this.$route.path}?page=1`);

		progress.start();
		const repos = await github.getReposByPage(this.$route.query.page);
		this.repos = repos;
		progress.done();
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.project {
	.project-card {
		background-color: $contrast;
		border: 1px solid $border;
		padding: 15px;
		margin-top: 20px;
	}
	padding-top: 40px;
}

.github {
	padding-bottom: 50px;
}
</style>
