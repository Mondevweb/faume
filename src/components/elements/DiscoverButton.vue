<template>
    <span class="faume_discover-button" :class="buttonColorClass">DECOUVRIR</span>
</template>

<script>
export default {
    name: 'DiscoverButton',

    props: {
        dark: {
            type: Boolean,
            default: false
        },
    },

    computed: {
        buttonColorClass() {
            return this.dark ? 'faume_discover-button_black' : 'faume_discover-button_white';
        }
    }
}
</script>

<style lang="scss" scoped>
.faume_discover-button {
    padding: 15px 50px;
    cursor: pointer;
}

.faume_discover-button_black {
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: #e9ecef;
    }
}

.faume_discover-button_white {
    color: white;
    border: 1px solid white;

    &:hover {
        background-color: #6c757d;
    }
}
</style>