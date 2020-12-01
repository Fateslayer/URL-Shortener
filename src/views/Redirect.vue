<template>
	<div class="d-flex justify-content-center align-items-center h-100 bg-light">
		<h1 class="display-3" v-if="redirecting">Redirecting</h1>
		<h1 class="display-3" v-else>Invalid Link</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			redirecting: true,
		};
	},
	methods: {
		loadLink() {
			const code = this.$route.params.code;
			this.$http
				.get(code)
				.then(response => {
					window.location.replace(response.body.link);
				})
				.catch(error => {
					this.redirecting = false;
				});
		},
	},
	created() {
		this.loadLink();
	},
};
</script>