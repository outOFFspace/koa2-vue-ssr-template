<!-- template for the modal component -->
<template>
    <transition name="modal">
        <div class="modal-mask">
            <div @click="$emit('close')" class="modal-back"></div>
            <div class="modal-wrapper">
                <div :class="['modal-container', {'full-width': fullWidth}]" :style="styles">
                    <div class="modal-header">
                        <a @click="$emit('close')" class="close" data-dismiss="modal" aria-hidden="true">×</a>
                        <slot name="header"></slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'BaseModal',
        props: {
            fullWidth: {
                type: Boolean,
                default: false
            },
            styles: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .modal-back,.modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: table;
        transition: opacity .3s ease
    }

    .modal-mask .modal-body {
        padding: 15px
    }

    .modal-back {
        background-color: rgba(0,0,0,.5)
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle
    }

    .modal-container {
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0,0,0,.33);
        transition: all .3s ease;
        position: relative;
        z-index: 9999
    }

    .modal-container.full-width {
        max-width: 1080px
    }

    .modal-container.full-width .modal-header {
        border: 0;
        min-height: 42px
    }

    .modal-container.full-width .modal-body {
        padding: 0
    }

    .modal-enter {
        opacity: 0
    }

    .modal-leave-active {
        opacity: 0
    }

    .modal-enter .modal-container,.modal-leave-active .modal-container {
        -ms-transform: scale(1.1);
        transform: scale(1.1)
    }

    .modal-header {
        padding: 5px 15px;
        border-bottom: 1px solid #e0e3e4;
        position: relative;
        z-index: 1
    }

    .modal-header .close {
        margin-top: 2px
    }

    .modal-header h3 {
        margin: 0;
        font-size: 18px;
        line-height: 30px
    }

    .modal-header .close {
        position: absolute;
        font-size: 28px;
        line-height: 30px;
        text-decoration: none;
        cursor: pointer;
        border-bottom-color: transparent
    }

    .fade-enter-active,.fade-leave-active {
        transition: opacity 1s ease-in
    }

    .fadeMessage:not(.fade-enter-active) {
        transition: opacity 2s ease-out;
        opacity: 0
    }
    .modal-header .close {
        opacity: .5;
        right: 10px;
        top: 10px;
        color: #a0a0a0;
        text-shadow: 0 1px 0 #fff
    }
</style>
