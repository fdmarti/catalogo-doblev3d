<template>
	<button class="btn" :class="{ disabled: !state }" :disabled="!state">
		{{ text }}
	</button>
</template>

<script setup lang="ts">
	import './ButtonComponent.css';
	import { toRefs } from 'vue';
	interface Props {
		text?: string;
		state?: boolean;
	}
	const props = withDefaults(defineProps<Props>(), {
		text: 'Default text',
		state: true,
	});

	const { text, state } = toRefs(props);
</script>
