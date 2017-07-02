'use strict';

let august = require('../../august.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return august.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return august.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


