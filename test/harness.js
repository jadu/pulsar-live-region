'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

global.expect = chai.expect;

chai.use(sinonChai);

// Expose tools in the global scope
global.sinon = sinon;