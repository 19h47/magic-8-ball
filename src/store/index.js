import Vuex from 'vuex';
import Vue from 'vue';

import answers from '@/inc/answers';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		version: '1.0.0',
		index: 0,
		value: answers[0].value,
		answer: answers[0].content,
	},
	actions: {
		updateAction(context) {
			context.commit('updateMutation');
		},
	},
	mutations: {
		updateMutation(state) {
			const random = Math.floor(Math.random() * answers.length);

			state.answer = answers[random].content;
			state.value = answers[random].value;
			state.index = random;
		},
	},
	getters: {
		index: state => state.index,
		value: state => state.value,
		answer: state => state.answer,
	},
});
