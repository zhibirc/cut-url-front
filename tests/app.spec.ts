'use strict';

const assert = require('chai').assert;

describe('Initial support', () => {
    it("should be able to execute a test", () => {
        assert.equal(true, true);
    });
});

describe('Check exports correctness', () => {
    it('"main" module', () => {
        const main = require('../src/main');

        assert.typeOf(main, '');
    });
});
