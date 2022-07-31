<template>
    <section class="faume_header">
        <div class="faume_header_nav" :class="{'is-sticky': isSticky}" id="nav">
            <div class="faume_header_nav_left">
                <span>HOMME</span>
                <span>FEMME</span>
                <span>CONCEPT</span>
                <router-link :to="{name: 'faq'}">FAQ</router-link>
            </div>
            <div class="faume_header_nav_center">
                <img src="../assets/images/logo.svg" alt="Kooples" />
            </div>
            <div class="faume_header_nav_right">
                <img src="../assets/images/icon-cart.svg" alt="Cart" data-bs-toggle="cartDialog" data-bs-target="#cartDialog" @click="openDialog" />
            </div>
        </div>

        <div class="faume_header_femme">
            <span class="faume_header_femme_title">FEMME</span>
            <DiscoverButton />
        </div>
    </section>
</template>

<script>
import DiscoverButton from './elements/DiscoverButton.vue';

export default {
    name: "HeaderComponent",

    components: { DiscoverButton },

    data() {
        return {
            isSticky: false,
            cartModal: null
        };
    },

    mounted() {
        window.addEventListener("scroll", () => {
            this.isSticky = window.scrollY > 5;
        });
    },

    methods: {
        openDialog() {
            this.$emit('showCartDialog');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.faume_header {
    height: 100vh;
    width: 100%;
    background: no-repeat url("../assets/images/femme.jpeg");
    background-position-x: center;
    background-size: cover;
    position: relative;

    .faume_header_nav {
        padding: 5px 15px;
        width: 100%;
        position: fixed;
        top: 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
        z-index: 99;

        .faume_header_nav_left {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: start;
            gap: 20px;
            font-weight: $title-weight;
        }

        .faume_header_nav_center {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            img {
                height: 35px;
                filter: $svg-filter-white;
            }
        }

        .faume_header_nav_right {
            flex: 1;
            text-align: right;

            img {
                cursor: pointer;
                height: 20px;
                filter: $svg-filter-white;
            }
        }
    }

    .faume_header_femme {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .faume_header_femme_title {
            font-size: 80px;
            font-weight: $title-weight;
        }
    }
}

.is-sticky {
    background-color: white;
    color: black !important;

    img {
        filter: $svg-filter-black !important;
    }
}

a {
    &:hover {
        color: unset;
    }
}
</style>
