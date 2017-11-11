<script>
    import Vue from 'vue'

    export default {
        name: 'langSwitcher',
        template: '<span class="item">\n' +
        '        <span class="multilang" v-if="!$root.isMobile">{{langs[defLang]}} | <a v-on:click="switchLang" href="javascript://">{{langs[otherLang]}}</a></span>\n' +
        '        <span class="m_multilang" v-else><a class="on" href="javascript:void(0);">{{langs[defLang]}}</a><a href="javascript://" v-on:click="switchLang">{{langs[otherLang]}}</a></span>\n' +
        '    </span>',
        data() {
            return {
                langs: {
                    uk: 'укр', ru: 'рус'
                },
                defLang: Vue.config.lang,
                otherLang: Vue.config.lang === 'ru' ? 'uk' : 'ru'
            }
        },
        methods: {
            switchLang() {
                const lang = this.otherLang
                this.otherLang = this.defLang
                this.$i18n.locale = lang
                this.defLang = this.$i18n.locale
                this.$route.params.lang = this.$i18n.locale
                // every route should have lang param for the right language switching
                this.$router.push({name: this.$route.name, params: {lang}})
            }
        }
    }
</script>
