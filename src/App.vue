<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MyHeader from '@/components/header/header.vue'
import HeaderBg from '@/components/header/headerBg.vue'
import MyFooter from '@/components/footer/myFooter.vue'

</script>

<template>
    <my-header/>
    <header-bg />
    <router-view/>
    <my-footer />
</template>

<style lang='scss'>
* {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    outline: 0;
    list-style: none;
    text-decoration: none;
}
html,
body {
    width: 100%;
    height: 100%;
    user-select: none;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //text-align: center;
    color: #2c3e50;
}
</style>
