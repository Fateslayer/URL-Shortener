<template>
	<div class="d-flex justify-content-center align-items-center h-100 bg-light">
		<div class="container">
			<LinkShortener/>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import LinkShortener from '@/components/LinkShortener.vue';

export default {
	name: 'home',
	components: {
		LinkShortener,
	},
};
</script>