<template>
	<div class="col-12 col-md-12 col-lg-6 mt-3">
		<iframe
			height="315"
			:src="video1"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
	<div class="col-12 col-md-12 col-lg-6 mt-3">
		<iframe
			height="315"
			:src="video2"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</template>

<script>
export default {
	props: {
		video1: String,
		video2: String
	}
};
</script>

<style lang="scss" scoped></style>
