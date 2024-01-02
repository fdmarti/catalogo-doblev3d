<template>
	<div class="contact">
		<h1>Contacto</h1>

		<h3>Enviar mensaje</h3>
		<form @submit.prevent="sendMessage" class="form-contact">
			<section class="form-group">
				<input
					type="text"
					autocomplete="given-name"
					placeholder="Nombre completo"
				/>
				<input
					type="email"
					autocomplete="email"
					placeholder="Correo electrónico"
				/>
			</section>
			<section class="form-group">
				<input type="text" placeholder="Asunto" />
			</section>
			<section class="form-group">
				<textarea placeholder="Tu mensaje aqui..." rows="10"></textarea>
			</section>
			<section class="submit-btn">
				<ButtonComponent text="Enviar mensaje" />
			</section>
		</form>
	</div>
</template>

<script setup lang="ts">
	import { ButtonComponent } from '../../shared/components';
	import './Contact.css';

	const sendMessage = () => {};
</script>
