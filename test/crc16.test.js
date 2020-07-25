const chai = require('chai');
const { crc16 } = require('../index');
chai.should();
const check = Uint16Array.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);// 0123456789

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
});
