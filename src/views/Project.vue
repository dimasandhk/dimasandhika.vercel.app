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
				<div class="col-12 col-md-12 col-lg-12 mt-4" v-if="!repos.length || repos.error">
					<div class="spinner-grow text-dark" :class="{ 'ml-3': i > 1 }" v-for="i of 3" :key="i">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
				<div class="col-12 col-md-12 col-lg-6" v-for="r of repos" :key="r.id">
					<div class="project-card rounded">
						<h5>{{ r.name }} ({{ r.language || "No Lang" }})</h5>
						<p class="text-muted">{{ longDesc(r.description) }}</p>
						<hr />
						<h6 class="text-muted">
							<span class="badge badge-dark">Created:</span> {{ dateParse(r.created_at) }}
						</h6>
						<h6 class="text-muted">
							<span class="badge badge-dark">Updated:</span> {{ dateParse(r.updated_at) }}
						</h6>
						<a :href="r.html_url" target="_blank" class="btn btn-dark btn-block mt-3 shadow-none"
							>Visit</a
						>
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
	async mounted() {
		if (!this.$route.query.page) this.$router.push(`${this.$route.path}?page=1`);
		sessionStorage.setItem("page", this.$route.query.page);

		progress.start();
		const repos = await github.getReposByPage(this.$route.query.page);
		this.repos = repos;
		progress.done();
	},
	methods: {
		longDesc(desc) {
			if (desc.length <= 55) return desc;
			return `${desc.slice(0, 55)}...`;
		},
		dateParse(str) {
			return `${str.split("T")[0]}, ${str.split("T")[1].split("Z")[0]}`;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.btn {
	@include styledButton(#393940);
}
.project {
	.project-card {
		hr {
			background-color: $lighterBorder;
		}

		background-color: $contrast;
		border: 1px solid $lighterBorder;
		padding: 15px;
		margin-top: 20px;
	}
	padding-top: 40px;
}

.github {
	padding-bottom: 50px;
}
</style>
