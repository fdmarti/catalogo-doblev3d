<template>
	<nav class="navbar">
		<div class="logo">
			<a href="/">
				<img src="/images/logo.webp" alt="Doble v 3d logo" />
			</a>
		</div>
		<div class="searcher">
			<i class="bx bx-search-alt-2 search-icon bx-sm"></i>
			<input type="text" class="search-input" placeholder="Buscar artículo" />
		</div>
		<div class="menu">
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">Sobre nosotros</RouterLink>
			<RouterLink to="/contact">Contacto</RouterLink>
			<ShoppingCartComponent />
		</div>
	</nav>
</template>

<script setup lang="ts">
	import './NavbarComponent.css';
	import ShoppingCartComponent from '../ShoppingCartComponent/ShoppingCartComponent.vue';

	setInterval(() => {
		const searchIcon = document.querySelector('.search-icon');
		searchIcon?.classList.toggle('bx-tada');
	}, 4000);
</script>
