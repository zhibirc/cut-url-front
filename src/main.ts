'use strict';

const Vue = require('vue');

new Vue({
    el: '#app',
    render: (callback: Function): void => callback(require('./components/app/app.vue'))
});
