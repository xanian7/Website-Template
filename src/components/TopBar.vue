<template>
    <div v-if="is_expanded" class="sidebar-backdrop"></div>
	<div class="top-bar-wrap">
		<h1 class="title">
			Xander's Test Site
		</h1>

	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top-bar-wrap {
	display: flex;
	flex-direction: row;
	background-color:rgb(71, 71, 71);
	color:rgb(168, 168, 168);
	height: calc(3rem + 35px);
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
	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
}
</style>
