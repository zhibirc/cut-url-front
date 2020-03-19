<template>
    div#app
        input(
            type='text'
            placeholder='Enter URL for cut'
            v-model='url'
        )

        button#app-form-reset
        button#app-form-copy
        button#app-form-cut
</template>

<script lang="ts">
    module.exports = {
        name: "main"
    };
</script>

<style>

</style>
