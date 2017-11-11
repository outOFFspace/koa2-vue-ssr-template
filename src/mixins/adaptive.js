export default {
    created() {
        if (process.env.VUE_ENV === 'client') {
            this.defineDevice(document.body.clientWidth)
            window.addEventListener('resize', () => {
                this.defineDevice(document.body.clientWidth)
            })
        }
    },
    computed: {
        device() {
            return this.$store.state.device
        }
    },
    methods: {
        defineDevice(width) {
            let device = 'desktop'
            if (width <= 961) {
                device = 'tablet'
            } else if(width <= 481) {
                device = 'mobile'
            }
            this.$store.commit('updateAdaptation', device)
        }
    }
}
