<template>
    <div class="main">
        test text 
    </div>
</template>
<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")


</script>
<style lang="scss" scoped>
.main{
    position: fixed;
    size: 100%;
    text-align: left;
    background-color: aliceblue;
    height: 100%;
    width: 100%;
    color: black;
    left: 64px;
    bottom: 0;
    top: 0;
    z-index: 0;
}
</style>
