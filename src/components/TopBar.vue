<template>
    <div v-if="is_expanded" class="sidebar-backdrop"></div>
	<aside>
	TESTING TITLE
	</aside>
</template>

<script setup>
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: row;
	background-color:rgb(37, 189, 138);
	color:aquamarine;
	height: calc(2rem + 32px);
	overflow: hidden;
	min-width: 100vw;
	padding: 1rem;
    left: 0;
    top: 0;
    position: fixed;
	z-index: 997;
	.flex {
		flex: 1 1 0%;
	}

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
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
}
</style>
