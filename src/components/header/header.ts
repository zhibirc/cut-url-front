'use strict';

interface Header {
    readonly name: string,
    data: Object
}

const header: Header = {
    name: 'header',
    data: {
        title: ''
    }
};

module.exports = header;
