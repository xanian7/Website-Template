<template>
	<div v-if="is_expanded" class="backdrop"></div>
	<div class="menu-wrap" :class="`${is_expanded ? 'is-expanded' : ''}`">
		<header>
			<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="50" height="50" />
		</header>
		<v-divider class="border-opacity-50"></v-divider>
		<div >
			<v-btn 
          	icon="mdi-account"
          	variant="text"
		  	block
		  	rounded="0"
		  	size="x-large"
        	>
			</v-btn>
		</div>
		<v-divider class="border-opacity-50"></v-divider>
		<div >
			<v-btn 
          	icon="mdi-home"
          	variant="text"
		  	block
		  	rounded="0"
		  	size="x-large"
        	>
			</v-btn>
		</div>
		<v-divider class="border-opacity-50"></v-divider>
		<div >
			<v-btn 
          	icon="mdi-export-variant"
          	variant="text"
		  	block
		  	rounded="0"
		  	size="x-large"
        	>
			</v-btn>
		</div>
		<v-divider class="border-opacity-50"></v-divider>
		<div >
			<v-btn 
          	icon="mdi-logout"
          	variant="text"
		  	block
		  	rounded="0"
		  	size="x-large"
        	>
			</v-btn>
		</div>
		<v-divider class="border-opacity-50"></v-divider>
		<div class="menu-toggle-wrap">
			<div dense class="button-position">
				<v-btn icon
				rounded="x-large" 
				block
				size="x-large"
        		variant="text" 
				@click.stop="ToggleMenu"
				>
					<v-icon :icon="`${is_expanded ? 'mdi-chevron-left' : 'mdi-chevron-right'}`">
					</v-icon>
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>

.backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        cursor: pointer;
		z-index: 998;
    }
	.button-position {
		bottom: 0;
		position: fixed;
		margin-bottom: 1rem;	
	}
	.logo {
  		display: block;
  		margin: 0 auto 1rem;
		  margin-top: 1rem;
	}
.menu-wrap {
	display: flex;
	flex-direction: column;
	background-color:rgb(71, 71, 71);
	color:rgb(168, 168, 168);
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 0;
	transition: 0.25s ease-in-out;
    left: 0;
    top: 0;
    position: fixed;
	z-index: 998;
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		left:0;
        z-index: 999;
	}
	&.is-expanded {
		width: 300px;
		z-index: 999;
	}
}
</style>
