<template>
    <section>
        <section class="faume_main_text">
            <span class="faume_main_text_title">Lorem ipsum dolor sit amet</span>

            <span>Duis in ultrices nibh. Nulla suscipit lobortis ante quis vehicula. Nam sagittis nisl turpis. Sed sed aliquam leo. Duis id urna dignissim, tempor magna a, laoreet felis. Pellentesque non odio id est hendrerit mollis. Nunc lectus orci, vehicula euismod tortor sit amet, eleifend iaculis lectus. Integer dictum auctor libero, in accumsan urna faucibus venenatis. Mauris elit neque, venenatis eu lacus eu, bibendum tristique augue. Maecenas commodo magna felis.</span>

            <DiscoverButton :dark="true" />
        </section>

        <section class="faume_main_collection">
            <div class="faume_main_collection_img" :style="collectionStyle('robe')">
                COLLECTION FEMME
            </div>
            <div class="faume_main_collection_img" :style="collectionStyle('homme')">
                COLLECTION HOMME
            </div>
        </section>

        <div class="faume_main_selection">
            <div class="faume_main_selection_title">NOTRE SELECTION</div>
            <div class="faume_main_selection_products">
                <div v-for="product in selection" :key="product.id" class="faume_main_selection_product">
                    <div class="faume_main_selection_product_img" :style="selectionStyle(product.image)"></div>
                    <div class="faume_main_selection_product_description">
                        <span class="faume_main_selection_product_description_title">{{ product.title }}</span>
                        <span>{{ product.price }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="faume_main_selection_carousel_container">
            <CarouselComponent :selection="selection" />
        </div>

        <section class="faume_main_shop">
            <div class="faume_main_shop_img" :style="collectionStyle('store')"></div>
            <div class="faume_main_shop_img faume_main_shop_discover"><DiscoverButton :dark="true" /></div>
        </section>

    </section>
</template>

<script>
import DiscoverButton from './elements/DiscoverButton.vue';
import CarouselComponent from './elements/CarouselComponent.vue';

export default {
    name: "MainComponent",

    components: { DiscoverButton, CarouselComponent },

    data() {
        return {
            /*selection: [
                {image: 'product1', description: 'T-shirt Homme', price: '70,00 €'},
                {image: 'product2', description: 'Vest cuir', price: '170,00 €'},
                {image: 'product3', description: 'Trench Homme', price: '250,00 €'},
                {image: 'product4', description: 'Sac cuir', price: '360,00 €'}
            ],*/
        }
    },

    created() {
        this.$store.dispatch('getSelection');
    },

    computed: {
        selection() {
            return this.$store.state.selection;
        }
    },

    methods: {
        collectionStyle(image) {
            return {
                'background-image': 'url(' + require(`@/assets/images/${image}.jpeg`) + ')',
                'background-position-x': 'center',
                'background-size': 'cover'
            }
        },

        selectionStyle(image) {
            return {
                'background-image': 'url(' + image + ')',
                'background-position-x': 'center',
                'background-size': 'cover'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

@mixin two_squares {
    width: 50%;
    aspect-ratio: 1/1;
}

.faume_main_text {
    background-color: white;
    padding: $horizontal-gap 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    text-align: center;

    @media(max-width: $breakpoint-lg) {
        padding: $horizontal-gap 50px;
    }

    .faume_main_text_title {
        font-size: 24px;
        font-weight: $title-weight;
        text-transform: uppercase;
    }
}

.faume_main_collection {
    display: flex;
    flex-direction: row;
    gap: 2px;

    .faume_main_collection_img {
        @include two-squares;
        color: white;
        font-size: 16px;
        font-weight: $title-weight;
        padding: 15px;
        display: flex;
        justify-content: start;
        align-items: end;
    }
}

.faume_main_selection {
    margin: $horizontal-gap 12px;

    .faume_main_selection_title {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: $title-weight;
    }

    .faume_main_selection_products {
        display: flex;
        flex-direction: row;
        gap: 5px;

        @media(max-width: $breakpoint-xs) {
            display: none;
        }

        .faume_main_selection_product {
            flex: 1;

            .faume_main_selection_product_img {
                aspect-ratio: 4/5;
            }

            .faume_main_selection_product_description {
                margin-top: 5px;
                display: flex;
                flex-direction: column;

                .faume_main_selection_product_description_title {
                    font-weight: $title-weight;
                }
            }
        }
    }
}

.faume_main_selection_carousel_container {
    display: flex;
    justify-content: center;
    margin: $horizontal-gap 12px;

    @media(min-width: $breakpoint-xs) {
        display: none;
    }
}

.faume_main_shop {
    display: flex;
    flex-direction: row;

    .faume_main_shop_img {
        @include two-squares;
    }

    .faume_main_shop_discover {
        background-color: #ced4da;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
}
</style>