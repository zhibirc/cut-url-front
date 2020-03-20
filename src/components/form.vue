<template>
    <input placeholder="Enter URL for cut" v-model="url">
    <button id="#app-form-reset"></button>
    <button id="app-form-copy"></button>
    <button id="app-form-cut"></button>
</template>

<script lang="ts">
    interface Form {
        readonly name: string,
        data: object
    }

    const form: Form = {
        name: 'form',
        data: {}
    };

    module.exports = form;
</script>

<style scoped>

</style>
