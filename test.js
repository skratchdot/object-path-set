'use strict';
var expect = require('chai').expect;
var setPath = require('./index.js');
var now = new Date();
var obj;
var getDefaultObject = function () {
	return {
		nested: {
			thing: {
				foo: 'bar'
			},
			is: {
				cool: true
			}
		},
		dataUndefined: undefined,
		dataDate: now,
		dataNumber: 42,
		dataString: 'foo',
		dataNull: null,
		dataBoolean: true
	};
};

describe('object-path-set', function () {
	beforeEach(function () {
		obj = getDefaultObject();
	});
	it('should be able to set and overwrite types', function () {
		var newValue = 'newValue';

		obj = setPath(obj, 'dataUndefined', newValue);
		expect(obj.dataUndefined).to.be.a.string;
		expect(obj.dataUndefined).to.equal(newValue);

		obj = setPath(obj, 'dataDate', newValue);
		expect(obj.dataDate).to.be.a.string;
		expect(obj.dataDate).to.equal(newValue);

		obj = setPath(obj, 'nested', newValue);
		expect(obj.nested).to.be.a.string;
		expect(obj.nested).to.equal(newValue);

		obj = setPath(obj, 'nested.foo', newValue);
		expect(obj.nested).to.be.an.object;
		expect(obj.nested.foo).to.be.a.string;
		expect(obj.nested.foo).to.equal(newValue);
	});
	it('should covert things to objects', function () {
		expect(setPath(1234, 'a', 42)).to.deep.equal({a: 42});
		expect(setPath(null, 'a', 42)).to.deep.equal({a: 42});
		expect(setPath(true, 'a', 42)).to.deep.equal({a: 42});
		expect(setPath({a: 123}, 'a.b', 42)).to.deep.equal({a: {b: 42}});
		expect(setPath(null, 'a.b.c.d', null)).to.deep.equal({a:{b:{c:{d:null}}}});
	});
	it('should be able to use custom delimiters', function () {
		expect(setPath({}, 'a|b|c|d', 42)).to.deep.equal({'a|b|c|d': 42});
		expect(setPath({}, 'a|b|c|d', 42, '|')).to.deep.equal({a:{b:{c:{d:42}}}});
		expect(setPath({}, 'a.b.c.d', 42, '|')).to.deep.equal({'a.b.c.d': 42});
	});
	it('should set the correct values', function () {
		expect(setPath({}, 'a.b', 42)).to.deep.equal({a:{b: 42}});
		expect(setPath({}, 'a.b', undefined)).to.deep.equal({a:{b: undefined}});
		expect(setPath({}, 'a.b', true)).to.deep.equal({a:{b: true}});
		expect(setPath({}, 'a.b', 'wow')).to.deep.equal({a:{b: 'wow'}});
	});
	it('should be able to be called multiple times', function () {
		obj = {};
		obj = setPath(obj, 'a', 42);
		obj = setPath(obj, 'b', true);
		obj = setPath(obj, 'c.d', {});
		obj = setPath(obj, 'c.d.e', {});
		obj = setPath(obj, 'c.d.f', 'foo');
		expect(obj).to.deep.equal({a: 42, b: true, c:{d:{e:{}, f:'foo'}}});
	});
	it('should return the default object when key is not a string', function () {
		var defaultValue = Math.random();
		expect(setPath(obj, {}, defaultValue)).to.deep.equal(obj);
		expect(setPath(obj, [], defaultValue)).to.deep.equal(obj);
		expect(setPath(obj, null, defaultValue)).to.deep.equal(obj);
		expect(setPath(obj, 11, defaultValue)).to.deep.equal(obj);
		expect(setPath(obj, undefined, defaultValue)).to.deep.equal(obj);
	});
});
