<template>
	<div class="card">
		<img
			:src="loadingImage ? producto.imagen : imageDefault"
			:alt="`Imagen del producto ${producto.descripcion}`"
			loading="lazy"
		/>
		<section class="card-content">
			<h3>{{ producto.descripcion }}</h3>
			<p>{{ producto.categoria }}</p>
			<span class="price">AR$ {{ producto.preciounitario }}</span>
			<p class="imp-pais">Incluye impuesto País y percepción AFIP</p>

			<ButtonComponent :state="producto.estado" />
		</section>
	</div>
</template>

<script setup lang="ts">
	import './CardComponent.css';
	import { ref, onMounted } from 'vue';
	import imageDefault from '/images/default-img.webp';
	import { ButtonComponent } from '..';
	import { Producto } from '../../../interface/producto';

	interface Props {
		producto: Producto;
	}

	const { producto } = defineProps<Props>();

	const loadingImage = ref<Boolean>(false);

	onMounted(() => {
		setTimeout(() => {
			loadingImage.value = !loadingImage.value;
		}, 500);
	});
</script>
