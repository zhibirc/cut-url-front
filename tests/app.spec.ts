'use strict';

const assert = require('chai').assert;

describe('Check exports correctness', () => {
    it('"main" module', () => {
        const main = require('../src/main');

        assert.typeOf(main, '');
    });
});
