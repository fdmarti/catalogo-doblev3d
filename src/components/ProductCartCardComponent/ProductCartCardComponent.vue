<template>
	<section class="product-cart">
		<img
			:src="product.imagen"
			:alt="`Imagen del producto ${product.descripcion}`"
			class="skeleton"
		/>
		<section class="product-cart-content">
			<select
				class="amount"
				v-model="formData.amountItem"
				v-if="formData.amountItem < 10"
			>
				<option v-for="amount in amountOrder" :value="amount">
					{{ amount }}
				</option>
			</select>
			<input
				type="text"
				class="input-amount"
				placeholder="Cant"
				@change="updateAmountPriceInput"
				v-else
			/>
			<div class="price-content">
				<SmallSpinnerComponent v-if="isLoading" />
				<p class="price" v-else>
					<b>$ {{ formData.price }}</b>
				</p>
			</div>
		</section>
	</section>
</template>

<script setup lang="ts">
	import './ProductCartCardComponent.css';
	import { reactive, watch, ref } from 'vue';
	import type { Producto } from '../../interface/producto';
	import { useShopStore } from '../../store/shopping';
	import { SmallSpinnerComponent } from '../../shared/components';
	const shopStore = useShopStore();

	const amountOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10+'];

	interface Props {
		product: Producto;
	}

	const { product } = defineProps<Props>();

	const isLoading = ref<boolean>(false);
	const formData = reactive({
		amountItem: 1 as number,
		price: product.preciounitario as number,
	});

	watch(
		() => formData.amountItem,
		(amountItem) => {
			if (amountItem === 0) {
				updatePrice(1);
				formData.amountItem = 1
				return;
			}

			if (!isNaN(amountItem)) {
				updatePrice(amountItem);
				return;
			}
		},
	);

	const updatePrice = (newAmount: number): void => {
		isLoading.value = true;
		shopStore.updateProductAmount(product, newAmount);
		formData.price = newAmount * product.preciounitario;

		setTimeout(() => {
			isLoading.value = false;
		}, 500);
	};

	const updateAmountPriceInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		formData.amountItem = Number(target.value);
	};
</script>
