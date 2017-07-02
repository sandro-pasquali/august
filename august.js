'use strict';

let august = require('wikijs').default().page('august');

module.exports = {
	data : () => august.then(page => page.content()),
	images : () => august.then(page => page.images())
};