<template>
    <DefaultLayout>
        <router-view/>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout";

export default {
  name: 'App',
  components: {
      DefaultLayout
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6, p, input, button, select, textarea, a {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    font-family: inherit;
    line-height: inherit;
}
a {
    text-decoration: none;
}
ul {
    list-style-type: none;
}
button, input, textarea, select {
    background-color: inherit;
    border: 0;
    outline: 0;
}
body {
    font-family: 'Open Sans', sans-serif;
    position: relative;
    font-size: 13px;
    line-height: 1.8;
}
</style>
