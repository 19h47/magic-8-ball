<template>
	<div>
		<a :href="facebook" target="_blank" style="margin-left: 7.5px">
			<svg v-svg symbol="facebook" role="presentation"></svg>
		</a>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['answer']),
		facebook() {
			return `https://www.facebook.com/sharer/sharer.php?u=${window.URL}&quote=${this.answer}`;
		},
	},
};
</script>
