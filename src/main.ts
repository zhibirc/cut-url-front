'use strict';

const Vue  = require('vue');
const form = require('src/components/form.vue');

new Vue({
    el: '#app',
    render: (callback: Function): void => callback(form)
});
