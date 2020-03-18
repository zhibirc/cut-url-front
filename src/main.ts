'use strict';

const Vue = require('vue');
const App = require('app');

new Vue({
    el: '#app',
    render: (callback: Function): void => callback(App)
});
