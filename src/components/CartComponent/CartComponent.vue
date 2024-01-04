<template>
	<div class="cart">
		<div class="cart-content">
			<section class="title-cart">
				<i class="bx bx-x bx-md" @click="toggleCart"></i>
			</section>
			<section class="cart-total">
				<p>
					<span>Subtotal :</span>
					<span v-if="!isLoading">$ {{ TotalPrice }}</span>
					<SmallSpinnerComponent v-else/>
				</p>
				<ButtonComponent text="Ir al carrito" />
			</section>
			<hr />
			<div class="list-products-selected">
				<KeepAlive>
					<ProductCartCardComponent
						v-for="product in cart"
						:key="product.id"
						:product="product"
					/>
				</KeepAlive>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import './CartComponent.css';
	import { useShopStore } from '../../store/shopping';
	import { ButtonComponent, SmallSpinnerComponent } from '../../shared/components';
	import ProductCartCardComponent from '../ProductCartCardComponent/ProductCartCardComponent.vue';
	import { storeToRefs } from 'pinia';

	const emit = defineEmits(['closeCart']);

	const toggleCart = () => {
		emit('closeCart');
	};

	const shopStore = useShopStore();
	const { cart, TotalPrice, isLoading } = storeToRefs(shopStore);
</script>
