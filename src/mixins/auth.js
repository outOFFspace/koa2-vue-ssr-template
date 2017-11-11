export default {
    computed: {
        isGuest() {
            return !this.$store.state.user
        },
        user() {
            return this.$store.state.user
        }
    }
}
