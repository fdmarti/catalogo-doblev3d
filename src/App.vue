<script setup lang="ts">
	import NavbarComponent from './components/NavbarComponent/NavbarComponent.vue';
</script>

<template>
	<header>
		<NavbarComponent />
	</header>
	<main>
		<router-view v-slot="{ Component }">
			<transition name="fade">
				<KeepAlive>
					<component :is="Component" />
				</KeepAlive>
			</transition>
		</router-view>
	</main>
</template>
