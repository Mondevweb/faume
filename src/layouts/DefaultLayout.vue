<template>
    <div>
        <header>
            <HeaderComponent @showCartDialog="openModal" />
        </header>

        <router-view name="body"></router-view>

        <footer>
            <FooterComponent />
        </footer>

        <div id="cartDialog" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body faume_modal_text">
                        <p>Il n'y a aucun produit dans le panier.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { Modal } from 'bootstrap';

export default {
    name: 'DefaultLayout',

    components: {
        HeaderComponent,
        FooterComponent,
    },

    data() {
        return {
            cartModal: null
        }
    },

    mounted() {
        this.cartModal = new Modal(document.getElementById('cartDialog'))
    },

    methods: {
        openModal() {
            this.cartModal.show();
        }
    }
}
</script>

<style lang="scss" scoped>
.faume_modal_text {
    font-size: 20px;
    text-align: center;
    margin-top: 30px;
}
</style>