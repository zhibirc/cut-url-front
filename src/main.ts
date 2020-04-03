'use strict';

const Vue = require('vue');
const style = require('./main.scss');

Vue.config.silent   = !DEVELOP;
Vue.config.devtools = DEVELOP;
Vue.config.performance = DEVELOP;
//Vue.config.productionTip = DEVELOP;

Vue.config.warnHandler = function ( message, vm, trace ) {
    console.warn(message);
};

Vue.config.errorHandler = function ( error, vm, info ) {
    console.info(info);
};

const app = new Vue({
    el: '#app',
    data: {
        version: ''
    },
    render: (callback: Function): void => callback(require('./components/app/app.vue'))
});
