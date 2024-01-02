<template>
	<div class="productos-list" :class="{ isLoading: loading }">
		<SpinnerComponent v-if="loading" />
		<CardComponent
			v-else
			v-for="producto in productosList"
			:producto="producto"
		/>
	</div>
</template>

<script setup lang="ts">
	import './ProductosList.css';
	import { CardComponent, SpinnerComponent } from '../../shared/components';

	import { storeToRefs } from 'pinia';
	import { useProductosStore } from '../../store/productos';

	const store = useProductosStore();
	const { loading, productosList } = storeToRefs(store);

	store.getProductos();
</script>
