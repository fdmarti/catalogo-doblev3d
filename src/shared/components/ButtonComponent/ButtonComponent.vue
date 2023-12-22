<template>
	<button class="btn" :class="{ disabled: !state }" :disabled="!state">{{ text }}</button>
</template>

<script setup lang="ts">
	import './ButtonComponent.css';
	interface Props {
		text: string;
		state: boolean;
	}
	const { text, state } = withDefaults(defineProps<Props>(), {
		text: 'Agregar al carrito',
		state: false,
	});
</script>
