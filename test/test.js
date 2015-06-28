var expect = require('chai').expect;
var chrome = require('sinon-chrome');

describe('sinon-chrome', function() {
  "use strict";

  it('has runtime', function () {
    expect(chrome).to.have.property('runtime');
  });
});
