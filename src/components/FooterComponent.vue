<template>
    <section class="faume_footer">
        <div class="faume_footer_nav">
            <span>Faq</span>
            <span>Mentions légales</span>
            <span>CGV</span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
.faume_footer {
    width: 100%;
    height: 200px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .faume_footer_nav {
        display: flex;
        gap: 60px;
    }
}
</style>