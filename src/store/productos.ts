import { defineStore } from 'pinia';
import { Producto } from '../interface/producto';

const GLOBAL_URL = import.meta.env.VITE_BASE_API;

export const useProductosStore = defineStore('productos', {
	state: () => ({
		productos: [] as Producto[],
		loading: false as boolean,
	}),

	actions: {
		async getProductos() {
			this.loading = true;
			const result = await fetch(`${GLOBAL_URL}/productos`);
			this.productos = await result.json();
			this.loading = false;
		},
	},

	getters: {
		productosList: (state) => state.productos,
	},
});
