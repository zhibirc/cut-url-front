<template>
    <div id="form">
        <input placeholder="Enter URL for cut" v-bind:title="title" v-model="url">
        <button id="#app-form-reset"></button>
        <button id="app-form-copy"></button>
        <button id="app-form-cut"></button>
    </div>
</template>

<script src="./form.ts" lang="ts"></script>

<style src="./form.scss" lang="scss" scoped></style>
