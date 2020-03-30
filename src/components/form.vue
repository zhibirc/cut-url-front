<template>
    <div id="form">
        <input placeholder="Enter URL for cut" v-bind:title="title" v-model="url">
        <button id="#app-form-reset"></button>
        <button id="app-form-copy"></button>
        <button id="app-form-cut"></button>
    </div>
</template>

<script lang="ts">
    interface Form {
        readonly name: string,
        data: Object
    }

    const form: Form = {
        name: 'form',
        data: {
            title: ''
        }
    };

    module.exports = form;
</script>

<style scoped>

</style>
