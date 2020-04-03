'use strict';

const Vue = require('vue');
const style = require('./main.scss');

const app = new Vue({
    el: '#app',
    data: {
        version: ''
    },
    render: (callback: Function): void => callback(require('./components/app/app.vue'))
});
