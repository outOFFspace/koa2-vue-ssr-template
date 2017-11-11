<template>
    <div id="app">
        <head-item></head-item>
        <router-view></router-view>
        <foot-item></foot-item>
    </div>
</template>

<script>
    import HeadItem from './layout/Header.vue'
    import FootItem from './layout/Footer.vue'

    export default {
        name: 'app',
        components: {
            FootItem,
            HeadItem
        }
    }
</script>
