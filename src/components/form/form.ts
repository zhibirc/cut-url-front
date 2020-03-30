'use strict';

interface Form {
    readonly name: string,
    data: Object
}

const form: Form = {
    name: 'form',
    data: {
        title: ''
    }
};

module.exports = form;
