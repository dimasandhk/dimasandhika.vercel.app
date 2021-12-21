<template>
	<div class="col-12 col-md-12 col-lg-12 mt-4">
		<div class="spinner-grow text-dark" :class="{ 'ml-3': i > 1 }" v-for="i of 3" :key="i">
			<span class="sr-only">Loading...</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Loading"
};
</script>
