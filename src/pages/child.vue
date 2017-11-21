<template>
    <span class="element-select" @click="open = !open">
        <span class="el-selected">
            <span class="selected-wrap green">{{ selected }}</span>
        </span>
        <span class="options" style="width: 170px;" v-show="open">
            <span class="item" v-for="option in options" v-bind:key="option.index" @click="select(option)">{{ option
                }}</span>
        </span>
    </span>
</template>

<script>
    export default {
        name: 'inclineSelect',
        props: {
            selected: {
                type: String,
                default: ''
            },
            options: {
                type: Array,
                default() {
                    return []
                },
            },
            onChange: {
                type: Function,
                default(val) {
                    this.$emit('input', val)
                }
            }
        },
        watch: {
            mutableValue(val, old) {
                if (val !== old) {
                    this.onChange(val)
                }
            }
        },
        data() {
            return {
                open: false,
                mutableValue: null,
                mutableOptions: []
            }
        },
        methods: {
            select(option) {
                this.mutableValue = typeof option === 'object' ? option.label : option
            }
        }
    }
</script>
