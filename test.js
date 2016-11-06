'use strict';

var TestRSA = function(){
	return this;
}

TestRSA.prototype.PerformTest = function PerformTest(){
var RSA = require('node-rsa');
var dat = {"b":"30819F300D06092A864886F70D010101050003818D0030818902818100801F5A6375DC2E59FE8406809FF28F2D6B45218CB9C7C63DEFB05E113C91DA0495A559A501B606C66F2F86C1C059B685D9C2ECAEEC209E566D3C52CB434C568C86AECD7645DDB6654CDA6CA9E81DBD917E91AEE08E420366550B70624C5E6BC8C51B65A60327EB6D803400EBF537F7B9503D291BB8DE129569B2C681A046AF0F0203010001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","r":0}

var buff = new Buffer(dat.b, 'hex');

var publicKey = new RSA(buff.slice(22), 'pkcs1-public-der', {
                            encryptionScheme: 'pkcs1'
                        });

return publicKey;
}

module.exports = TestRSA;