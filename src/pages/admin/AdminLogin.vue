<template>
	<q-page class="loginAdmin column q-px-xl">
		<div class="items" style="max-width: 500px">
			<div class="logo">
				<img src="~/assets/SVG/logo.svg" alt="Logo Maria Joana" />
			</div>
			<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
				<q-input
					filled
					v-model="name"
					label="mariajoana@"
					hint="Nome de usuário"
					lazy-rules
					:rules="[ val => val && val.length > 0 || ' Digite seu nome de usuario']"
				/>

				<q-input
					filled
					type="password"
					v-model="password"
					label=""
                    hint="Senha"
					lazy-rules
					:rules="[
            val => val !== null && val !== '' || 'Digite sua senha']"
				/>
				
				<div class="buttons">
					<q-btn label="Enviar" type="submit" color="primary" />
					<q-btn label="Resetar" type="reset" color="primary" flat class="q-ml-sm" />
				</div>
			</q-form>
		</div>
	</q-page>
</template>



<script>
export default {
	data() {
		return {
			name: "",
			password: ""
		};
	},
	methods: {
		onSubmit() {

		},
		onReset() {}
	}
};
</script>

<style lang="scss" scoped>
.loginAdmin {
	background-color: #f3efe6;

    	.items {
		background-color: #F4EEE2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: center;
        margin-top: 100px;

		.logo {
			margin-bottom: 16px;
		}

        .buttons {
            display:flex;
			justify-content:space-between;
        }
	}
}

</style>