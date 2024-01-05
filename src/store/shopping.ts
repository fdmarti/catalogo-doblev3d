import { defineStore } from 'pinia';
import { Producto } from '../interface/producto';

export const useShopStore = defineStore('shop', {
	state: () => ({
		cart: [] as Producto[],
		totalPrice: 0 as number,
		amount: 0 as number,
		isLoading: false as boolean,
	}),

	actions: {
		addToCart(producto: Producto): void {
			const { id } = producto;

			if (this.cart.length === 0) {
				this.addProductToCart(producto);
				return;
			}

			const isProductInCart = this.cart.find((prod) => prod.id === id);
			if (isProductInCart) return;

			this.addProductToCart(producto);
		},

		addProductToCart(producto: Producto): void {
			const { descripcion, imagen, preciounitario, id } = producto;
			const productInCart = {
				id,
				descripcion,
				imagen,
				preciounitario,
				amount: 1,
			};

			this.cart.push(productInCart);
			this.incrementAmount();
			this.updateTotalPrice();
		},

		incrementAmount(): void {
			this.amount++;
		},

		decrementAmount(): void {
			if (this.amount < 0) return;
			this.amount++;
		},

		updateProductAmount(product: Producto, newAmount: number): void {
			this.cart.forEach((prod) => {
				if (prod.id === product.id) prod.amount = newAmount;
			});

			this.updateTotalPrice();
		},

		updateTotalPrice(): void {
			this.isLoading = true;
			let total = 0;

			this.cart.forEach((prod) => {
				total = total + prod.amount * prod.preciounitario;
			});

			this.totalPrice = total;
			setTimeout(() => {
				this.isLoading = false;
			}, 500);
		},

		deleteProductFromCart(product: Producto): void {
			const { id } = product;
			const indexProduct = this.cart.findIndex((prod) => prod.id === id);

			if (indexProduct != -1) {
				this.cart = this.cart
					.slice(0, indexProduct)
					.concat(this.cart.slice(indexProduct + 1));

				this.updateTotalPrice();
				this.decrementAmount();
			}
		},
	},

	getters: {
		TotalPrice(state) {
			return state.totalPrice;
		},
	},
});
