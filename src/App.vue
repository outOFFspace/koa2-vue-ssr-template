<template>
    <div id="app">
        <head-item></head-item>
        <div class="site-content content-wrapper page-content">
            <div class="page type-page hentry">
                <div class="page-content-body">
                    <router-view></router-view>
                </div>
            </div>
        </div>
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
