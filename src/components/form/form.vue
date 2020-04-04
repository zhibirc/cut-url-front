<template>
    <div id="form">
        <input
            placeholder="Enter URL for cut"
            :value="value"
            v-on="listeners"
            v-bind:title="title"
            v-model="url"
        >
        <button id="#app-form-reset" @click="resetInputValue"></button>
        <button id="app-form-copy" @click="copyInputValue"></button>
        <button id="app-form-create" @click="createPumpkin"></button>
    </div>
</template>

<script src="./form.ts" lang="ts"></script>

<style src="./form.scss" lang="scss" scoped></style>
