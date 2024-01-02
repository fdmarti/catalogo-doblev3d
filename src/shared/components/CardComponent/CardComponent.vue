<template>
	<div class="card">
		<img
			:src="producto.imagen"
			:alt="`Imagen del producto ${producto.descripcion}`"
			loading="lazy"
			class="skeleton"
		/>
		<div class="skeleton"></div>
		<section class="card-content">
			<h3>{{ producto.descripcion }}</h3>
			<p>{{ producto.categoria }}</p>
			<span class="price">AR$ {{ producto.preciounitario }}</span>
			<p class="imp-pais">Incluye impuesto País y percepción AFIP</p>

			<ButtonComponent :state="producto.estado" @click="incrementAmount" text="Agregar al carrito"/>
		</section>
	</div>
</template>

<script setup lang="ts">
	import './CardComponent.css';
	import { ref, onMounted } from 'vue';
	import { useShopStore } from '../../../store/shopping';
	import { ButtonComponent } from '..';
	
	import type { Producto } from '../../../interface/producto';
	
	interface Props {
		producto: Producto;
	}

	const { producto } = defineProps<Props>();

	const loadingImage = ref<Boolean>(false);

	const storeShop = useShopStore();
	const { incrementAmount } = storeShop;

	onMounted(() => {
		setTimeout(() => {
			loadingImage.value = !loadingImage.value;
		}, 500);
	});
</script>
