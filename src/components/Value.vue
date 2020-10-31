<template>
	<transition name="fade" mode="out-in" appear>
		<img v-if="value" :src="pool8Ball" />
		<img v-else :src="pool8Ball" />
	</transition>
</template>

<script>
import { mapState } from 'vuex';

import pool8Ball from '@/assets/img/png/pool-8-ball.png';

export default {
	name: 'Value',
	data() {
		return {
			pool8Ball,
		};
	},
	computed: {
		...mapState(['value']),
	},
	watch: {
		value(val = false) {
			const link = document.querySelector("link[rel*='icon']");

			link.href = pool8Ball;

			if (val) {
				link.href = pool8Ball;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	width: 30px;
	height: 30px;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
