<template>
	<div>
		<div class="text-center mb-4">
			<h1 class="display-4">URL Shortener</h1>
		</div>
		<form class="row" @submit.prevent="shortenLink">
			<div class="col-12 col-md-9 col-lg-10">
				<div class="input-group">
					<input type="url" class="form-control" placeholder="https://www.google.com" aria-label="URL" aria-describedby="paste-button" required v-model="input">
					<div class="input-group-append">
						<button class="btn btn-outline-secondary material-icons" type="button" id="paste-button" data-toggle="tooltip" data-placement="top" title="Paste Link" @click="pasteFromClipboard">
							reply
						</button>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-3 col-lg-2 mt-4 mt-md-0">
				<button class="btn btn-dark btn-block" type="submit" ref="submitButton">Shorten Link</button>
			</div>
		</form>
		<transition-group name="fade" mode="out-in">
			<div class="alert alert-info mt-4 text-center" v-if="loading" :key="0">
				<h4 class="alert-heading">Creating Short Link</h4>
			</div>
			<div class="alert alert-success mt-4 text-center" role="alert" v-if="shortLink" :key="1">
				<h4 class="alert-heading">Here Is Your Shortened Link!</h4>
				<hr>
				<a :href="shortLink" target="_blank" class="alert-link">{{ shortLink }}</a>
			</div>
		</transition-group>
	</div>
</template>

<script>
window.onload = function() {
	$('[data-toggle="tooltip"]').tooltip();
};

export default {
	name: 'LinkShortener',
	data() {
		return {
			input: '',
			shortLink: '',
			loading: false,
		};
	},
	methods: {
		pasteFromClipboard(event) {
			event.target.blur();
			navigator.clipboard.readText().then(text => {
				this.input = text;
			});
		},
		shortenLink(event) {
			this.shortLink = '';
			this.loading = true;
			this.$refs.submitButton.disabled = true;
			this.$http
				.post('', {
					link: this.input,
				})
				.then(response => {
					if (response.body) {
						this.loading = false;
						this.shortLink =
							window.location.href + response.body.code;
						this.$refs.submitButton.disabled = false;
					}
				});
		},
	},
};
</script>

<style>
.form-control:focus {
	border-color: #666;
	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px #999;
}

.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 0.5s;
}

.fade-leave-active {
	transition: opacity 0.5s;
	opacity: 0;
	position: absolute;
}

.fade-move {
	transition: transform 0.5s;
}
</style>