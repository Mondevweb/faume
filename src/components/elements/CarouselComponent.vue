<template>
    <div id="selectionCarousel" class="carousel slide faume_main_selection_carousel" data-bs-ride="false">
        <div class="carousel-inner">
            <div v-for="(product, index) in selection" :key="product.id" class="carousel-item" :class="{active: index === 0}">
                <img :src="product.image" class="d-block w-100" :alt="product.title">
                <div class="carousel-caption d-md-block faume_main_selection_carousel_text">
                    <h4 class="faume_main_selection_carousel_description">{{ product.title }}</h4>
                    <span>{{ product.price }}</span>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#selectionCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#selectionCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CarouselComponent',

    props: {
        selection: Array,
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.faume_main_selection_carousel {
    max-width: 300px;

    &_text {
        background-color: grey;
        opacity: 0.7;
        padding: 10px
    }

    &_description {
        font-size: 14px;
        font-weight: $title-weight;
    }
}
</style>