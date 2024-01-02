<template>
	<div class="shopping-cart">
		<i class="bx bxs-cart-add bx-md"></i>
		<span class="amount-of-orders">{{ amount }}</span>
	</div>
</template>

<script setup lang="ts">
	import './ShoppingCartComponent.css';
	import { useShopStore } from '../../store/shopping';
	import { storeToRefs } from 'pinia';

	const store = useShopStore();
	const { amount } = storeToRefs(store);
</script>
