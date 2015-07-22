'use strict';
var path = require('path');
var assert = require('assert');
var readChunk = require('read-chunk');
var isWoff2 = require('../');

it('should detect woff2 files', function () {
	var woff2 = readChunk.sync(path.join(__dirname, 'fixture/fixture.woff2'), 0, 8);
	assert(isWoff2(woff2));

	var woff = readChunk.sync(path.join(__dirname, 'fixture/fixture.woff'), 0, 8);
	assert(!isWoff2(woff));

	var png = readChunk.sync(path.join(__dirname, 'fixture/fixture.png'), 0, 8);
	assert(!isWoff2(png));
});
