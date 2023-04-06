<template>
	<div v-if="is_expanded" class="backdrop"></div>
	<div class="menu-wrap" :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div>
			<mdicon name="account" :size="30"></mdicon>
		</div>
		<div class="menu-toggle-wrap">
			<div class="button-position">
				<v-btn icon class="button-flip" @click.stop="ToggleMenu">
					<v-icon>
						<mdicon :name="`${is_expanded ? 'chevron-double-left' : 'chevron-double-right'}`"></mdicon>
					</v-icon>
				</v-btn>
			</div>
		</div>
		<div class="flex"></div>
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
		margin-bottom: 2rem;
	}
.menu-wrap {
	display: flex;
	flex-direction: column;
	background-color:rgb(37, 189, 138);
	color:aquamarine;
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
    left: 0;
    top: 0;
    position: fixed;
	z-index: 998;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 2rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 1s ease-out;
        z-index: 999;
	}
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	&.is-expanded {
		width: 300px;
		z-index: 999;
	}
}
</style>
