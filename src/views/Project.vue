<template>
	<div class="github container">
		<div class="project">
			<h1>Github Project</h1>
			<h3 class="mb-3" v-if="maxPage != 0 && !repos.error">Page: {{ $route.query.page }}</h3>
			<div class="btn-group" role="group" v-if="maxPage != 0 && !repos.error">
				<button
					type="button"
					class="btn btn-dark shadow-none"
					:disabled="noPrevious"
					@click="changePage('prev')"
				>
					Prev
				</button>
				<button
					type="button"
					class="btn btn-dark shadow-none"
					:disabled="noNext"
					@click="changePage('next')"
				>
					Next
				</button>
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
		totalPage: 0,
		maxPage: 0
	}),
	async mounted() {
		if (!this.$route.query.page) this.$router.push(`${this.$route.path}?page=1`);

		progress.start();
		const repos = await github.getReposByPage(this.$route.query.page);
		const { page: maxPage } = await github.getProfile();

		this.maxPage = maxPage;
		this.repos = repos;
		progress.done();
	},
	computed: {
		noPrevious() {
			if (parseInt(this.$route.query.page) == 1) return true;
			return false;
		},
		noNext() {
			if (parseInt(this.$route.query.page) == this.maxPage) return true;
			return false;
		}
	},
	methods: {
		changePage(command) {
			const { page } = this.$route.query;
			let numPage = parseInt(page);
			command == "prev" ? numPage-- : numPage++;
			this.$router.push(`${this.$route.path}?page=${numPage}`);
		}
	},
	watch: {
		$route: {
			async handler({ query }) {
				progress.start();
				const repos = await github.getReposByPage(query.page);
				const { page: maxPage } = await github.getProfile();

				this.maxPage = maxPage;
				this.repos = repos;
				progress.done();
			}
		}
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
