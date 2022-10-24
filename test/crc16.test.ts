// Return values gotten from https://crccalc.com/

import chai from 'chai';
import { crc16 } from '../index'
chai.should();
const check = Buffer.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);// 0123456789

describe('CRC16', function () {
   describe('CCITT-FALSE', function () {
      const algorithm = 'CCITT-FALSE';
      const expected = 0x7D61;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('ARC', function () {
      const algorithm = 'ARC';
      const expected = 0x443D;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   // describe('AUG-CCITT', function () {
   //    it('should return 0xE5CC', function (done) {
   //       const crcCheck = crc16('AUG-CCITT', check);
   //       crcCheck.should.equal(0xE5CC);
   //       done();
   //    });
   // });
   describe('CDMA2000', function () {
      const algorithm = 'CDMA2000';
      const expected = 0xD89D;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('BUYPASS', function () {
      const algorithm = 'BUYPASS';
      const expected = 0xFD14;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('DDS-110', function () {
      const algorithm = 'DDS-110';
      const expected = 0xDB54;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('DECT-R', function () {
      const algorithm = 'DECT-R';
      const expected = 0x422B;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('DECT-X', function () {
      const algorithm = 'DECT-X';
      const expected = 0x422A;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('DNP', function () {
      const algorithm = 'DNP';
      const expected = 0x6772;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('EN-13757', function () {
      const algorithm = 'EN-13757';
      const expected = 0xFC73;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('GENIBUS', function () {
      const algorithm = 'GENIBUS';
      const expected = 0x829E;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('MAXIM', function () {
      const algorithm = 'MAXIM';
      const expected = 0xBBC2;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('KERMIT', function () {
      const algorithm = 'KERMIT';
      const expected = 0x5F6E;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('MCRF4XX', function () {
      const algorithm = 'MCRF4XX';
      const expected = 0xC3E9;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('MODBUS', function () {
      const algorithm = 'MODBUS';
      const expected = 0x434D;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('RIELLO', function () {
      const algorithm = 'RIELLO';
      const expected = 0x9068;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('T10-DIF', function () {
      const algorithm = 'T10-DIF';
      const expected = 0xDE40;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('TELEDISK', function () {
      const algorithm = 'TELEDISK';
      const expected = 0x1BBF;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('TMS37157', function () {
      const algorithm = 'TMS37157';
      const expected = 0xE2A2;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('USB', function () {
      const algorithm = 'USB';
      const expected = 0xBCB2;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('X-25', function () {
      it('should return 0x3C16', function (done) {
         const crcCheck = crc16('X-25', check);
         crcCheck.should.equal(0x3C16);
         done();
      });
      const algorithm = 'X-25';
      const expected = 0x3C16;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('XMODEM', function () {
      const algorithm = 'XMODEM';
      const expected = 0x9C58;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('CRC-A', function () {
      const algorithm = 'CRC-A';
      const expected = 0x1194;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc16(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc16(algorithm, check.slice(5), crc16(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
});
