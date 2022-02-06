<template>
	<div class="github container">
		<div class="project">
			<h1>Github Project</h1>
			<h5 class="mb-3" v-if="maxPage != 0 && !repos.error && !isLoading">
				Page: {{ $route.query.page }}
			</h5>
			<div class="btn-group" role="group" v-if="maxPage != 0 && !repos.error && !isLoading">
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
				<Loading v-if="!repos.length || repos.error || isLoading" />
				<ProjectCard v-for="r of repos" :key="r.id" :r="r" v-show="!isLoading" />
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
		maxPage: 0,
		isLoading: true
	}),
	async mounted() {
		if (!this.$route.query.page) this.$router.push(`${this.$route.path}?page=1`);
		this.isLoading = true;

		progress.start();
		const repos = await github.getReposByPage(this.$route.query.page);
		const { page: maxPage } = await github.getProfile();

		this.maxPage = maxPage;
		this.repos = repos;
		progress.done();

		this.isLoading = false;
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
				this.isLoading = true;
				const repos = await github.getReposByPage(query.page);
				const { page: maxPage } = await github.getProfile();

				this.maxPage = maxPage;
				this.repos = repos;

				progress.done();
				this.isLoading = false;
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

@media only screen and (max-width: 768px) {
	.project {
		h1 {
			font-size: 34px;
		}
	}
}
</style>
