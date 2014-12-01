'use strict';
var expect = require('chai').expect;
var main = require('../../public/js/main');
var sinon = require('sinon');
var $ = require('jquery');

describe('test for ajax with sinon', function() {
  beforeEach(function(){
    sinon.spy($, 'ajax');
  });
  afterEach(function(){
    $.ajax.restore();
  });

  it('should make an ajax call', function(){
    main();
  });
});
