export default {
    data: () => ({
        show_modal: false,
        payload: undefined,
    }),

    created() {
        // 💡 For modal components only
        if (this.modal_name) {
            this.$nuxt.$on(`modal-open:${this.modal_name}`, (payload) => {
                this.show_modal = true;
                this.payload = payload;
            });
            this.$nuxt.$on(`modal-payload:${this.modal_name}`, (payload) => {
                this.payload = payload;
            });
        }
            
        this.$nuxt.$on(`modal-close`, () => {
            this.show_modal = false;
        });
    },

    methods: {
        openModal(modal_name, payload) {
            this.$nuxt.$emit(`modal-open:${modal_name}`);
            if (payload) this.$nuxt.$emit(`modal-payload:${modal_name}`, payload);
            this.show_modal = true;
        },
        closeModal() {
            this.$nuxt.$emit(`modal-close`);
        }
    },
}