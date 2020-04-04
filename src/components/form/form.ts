'use strict';

interface Form {
    readonly name: string,
    data: Object,
    methods: Object
}

const form: Form = {
    name: 'form',
    data: {
        title: ''
    },
    methods: {
        resetInputValue () {
            console.log('resetInputValue');
        },
        copyInputValue () {
            console.log('copyInputValue');
        },
        createPumpkin () {
            console.log('createPumpkin');
        }
    }
};

module.exports = form;
