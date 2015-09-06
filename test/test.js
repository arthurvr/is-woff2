'use strict';
var path = require('path');
var test = require('ava');
var readChunk = require('read-chunk');
var isWoff2 = require('../');

test('should detect woff2 files', function (t) {
	var woff2 = readChunk.sync(path.join(__dirname, 'fixture/fixture.woff2'), 0, 8);
	t.true(isWoff2(woff2));

	var woff = readChunk.sync(path.join(__dirname, 'fixture/fixture.woff'), 0, 8);
	t.false(isWoff2(woff));

	var png = readChunk.sync(path.join(__dirname, 'fixture/fixture.png'), 0, 8);
	t.false(isWoff2(png));

	t.end();
});
