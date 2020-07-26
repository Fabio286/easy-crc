// Return values gotten from https://crccalc.com/

const chai = require('chai');
const { crc16 } = require('../index');
chai.should();
const check = Buffer.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);// 0123456789

describe('CRC16', function () {
   describe('CCITT-FALSE', function () {
      it('should return 0x7D61', function (done) {
         const crcCheck = crc16('CCITT-FALSE', check);
         crcCheck.should.equal(0x7D61);
         done();
      });
   });
   describe('ARC', function () {
      it('should return 0x443D', function (done) {
         const crcCheck = crc16('ARC', check);
         crcCheck.should.equal(0x443D);
         done();
      });
   });
   describe('AUG-CCITT', function () {
      it('should return 0xE5CC', function (done) {
         const crcCheck = crc16('AUG-CCITT', check);
         crcCheck.should.equal(0xE5CC);
         done();
      });
   });
   describe('CDMA2000', function () {
      it('should return 0xD89D', function (done) {
         const crcCheck = crc16('CDMA2000', check);
         crcCheck.should.equal(0xD89D);
         done();
      });
   });
   describe('BUYPASS', function () {
      it('should return 0xFD14', function (done) {
         const crcCheck = crc16('BUYPASS', check);
         crcCheck.should.equal(0xFD14);
         done();
      });
   });
   describe('DDS-110', function () {
      it('should return 0xDB54', function (done) {
         const crcCheck = crc16('DDS-110', check);
         crcCheck.should.equal(0xDB54);
         done();
      });
   });
   describe('DECT-R', function () {
      it('should return 0x422B', function (done) {
         const crcCheck = crc16('DECT-R', check);
         crcCheck.should.equal(0x422B);
         done();
      });
   });
   describe('DECT-X', function () {
      it('should return 0x422A', function (done) {
         const crcCheck = crc16('DECT-X', check);
         crcCheck.should.equal(0x422A);
         done();
      });
   });
   describe('DNP', function () {
      it('should return 0x6772', function (done) {
         const crcCheck = crc16('DNP', check);
         crcCheck.should.equal(0x6772);
         done();
      });
   });
   describe('EN-13757', function () {
      it('should return 0xFC73', function (done) {
         const crcCheck = crc16('EN-13757', check);
         crcCheck.should.equal(0xFC73);
         done();
      });
   });
   describe('GENIBUS', function () {
      it('should return 0x829E', function (done) {
         const crcCheck = crc16('GENIBUS', check);
         crcCheck.should.equal(0x829E);
         done();
      });
   });
   describe('MAXIM', function () {
      it('should return 0xBBC2', function (done) {
         const crcCheck = crc16('MAXIM', check);
         crcCheck.should.equal(0xBBC2);
         done();
      });
   });
   describe('KERMIT', function () {
      it('should return 0x5F6E', function (done) {
         const crcCheck = crc16('KERMIT', check);
         crcCheck.should.equal(0x5F6E);
         done();
      });
   });
   describe('MCRF4XX', function () {
      it('should return 0xC3E9', function (done) {
         const crcCheck = crc16('MCRF4XX', check);
         crcCheck.should.equal(0xC3E9);
         done();
      });
   });
   describe('MODBUS', function () {
      it('should return 0x434D', function (done) {
         const crcCheck = crc16('MODBUS', check);
         crcCheck.should.equal(0x434D);
         done();
      });
   });
   describe('RIELLO', function () {
      it('should return 0x9068', function (done) {
         const crcCheck = crc16('RIELLO', check);
         crcCheck.should.equal(0x9068);
         done();
      });
   });
   describe('T10-DIF', function () {
      it('should return 0xDE40', function (done) {
         const crcCheck = crc16('T10-DIF', check);
         crcCheck.should.equal(0xDE40);
         done();
      });
   });
   describe('TELEDISK', function () {
      it('should return 0x1BBF', function (done) {
         const crcCheck = crc16('TELEDISK', check);
         crcCheck.should.equal(0x1BBF);
         done();
      });
   });
   describe('TMS37157', function () {
      it('should return 0xE2A2', function (done) {
         const crcCheck = crc16('TMS37157', check);
         crcCheck.should.equal(0xE2A2);
         done();
      });
   });
   describe('USB', function () {
      it('should return 0xBCB2', function (done) {
         const crcCheck = crc16('USB', check);
         crcCheck.should.equal(0xBCB2);
         done();
      });
   });
   describe('X-25', function () {
      it('should return 0x3C16', function (done) {
         const crcCheck = crc16('X-25', check);
         crcCheck.should.equal(0x3C16);
         done();
      });
   });
   describe('XMODEM', function () {
      it('should return 0x9C58', function (done) {
         const crcCheck = crc16('XMODEM', check);
         crcCheck.should.equal(0x9C58);
         done();
      });
   });
   describe('CRC-A', function () {
      it('should return 0x1194', function (done) {
         const crcCheck = crc16('CRC-A', check);
         crcCheck.should.equal(0x1194);
         done();
      });
   });
});
