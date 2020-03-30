'use strict';

const Vue = require('vue');

new Vue({
    el: '#app',
    render: (callback: Function): void => callback(require('src/components/app/app.vue'))
});
