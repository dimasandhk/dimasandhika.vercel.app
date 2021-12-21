<template>
	<div class="col-12 col-md-12 col-lg-6">
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
</template>

<script>
export default {
	name: "ProjectCard",
	props: {
		r: {
			type: Object,
			required: true
		}
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
</style>
