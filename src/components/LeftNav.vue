<template>
    <div class="sidebar">
        <div class="sidebar-backdrop"></div>
        <div v-if="!show"
                 class="shrink-sidebar">
                <slot>
                    <button @click="toggleSidebarPanel">-</button>   
                </slot>
            </div>
        <transition name="slide">
            <div v-if="show"
                 class="sidebar-panel">
                <slot>
                    <button @click="toggleSidebarPanel">-</button>    
                </slot>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data: () => ({
            show: true
        }),
        methods: {
            toggleSidebarPanel() {
                this.show = !this.show
            },
        }
    }
</script>
<style>
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.5s ease;
        
    }

    .slide-enter-from,
    .slide-leave-to {
        transform: translateX(-75%);
    }

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .shrink-sidebar {
        overflow-y: auto;
        background-color: #1fa588;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 75px;
    }
    .sidebar-panel {
        overflow-y: auto;
        background-color: #1fa588;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
    }
</style>