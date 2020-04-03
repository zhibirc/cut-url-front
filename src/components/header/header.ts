'use strict';

interface Header {
    readonly name: string,
    data: Object
}

const header: Form = {
    name: 'header',
    data: {
        title: ''
    }
};

module.exports = header;
