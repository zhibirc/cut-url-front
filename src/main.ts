'use strict';

const Vue = require('vue');
const style = require('./main.scss');

new Vue({
    el: '#app',
    render: (callback: Function): void => callback(require('./components/app/app.vue'))
});
