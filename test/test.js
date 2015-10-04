import path from 'path';
import test from 'ava';
import readChunk from 'read-chunk';
import isWoff2 from '../';

test('should detect woff2 files', t => {
	const woff2 = readChunk.sync(path.join(__dirname, 'fixture/fixture.woff2'), 0, 8);
	t.true(isWoff2(woff2));

	const woff = readChunk.sync(path.join(__dirname, 'fixture/fixture.woff'), 0, 8);
	t.false(isWoff2(woff));

	const png = readChunk.sync(path.join(__dirname, 'fixture/fixture.png'), 0, 8);
	t.false(isWoff2(png));

	t.end();
});
