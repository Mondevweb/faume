<template>
    <div>
        <header>
            <HeaderComponent />
        </header>

        <router-view name="body"></router-view>

        <footer>
            <FooterComponent />
        </footer>

    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

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
}
</script>