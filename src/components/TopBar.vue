<template>
    <div v-if="is_expanded" class="sidebar-backdrop"></div>
	<div class="top-bar-wrap">
		<div class="title">
			TITLE
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top-bar-wrap {
	display: flex;
	flex-direction: row;
	background-color:rgb(9, 112, 78);
	color:aquamarine;
	height: calc(2rem + 32px);
	overflow: hidden;
	min-width: 100vw;
	padding: 1rem;
    left: 0;
    top: 0;
    position: fixed;
	z-index: 997;
}
.title { 
  	margin: 0 auto; 
}
</style>
