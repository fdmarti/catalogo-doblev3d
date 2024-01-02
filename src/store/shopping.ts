import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', {
	state: () => ({
		amount: 0 as number,
	}),

	actions: {
		incrementAmount() {
			this.amount++
		},
	},
});
