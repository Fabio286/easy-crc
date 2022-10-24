// Return values got from https://crccalc.com/

import chai from 'chai';
import { crc8 } from '../index'
chai.should();
const check = Buffer.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);// 0123456789

describe('CRC8', function () {
   describe('CRC-8', function () {
      const algorithm = 'CRC-8';
      const expected = 0x45;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('CDMA2000', function () {
      const algorithm = 'CDMA2000';
      const expected = 0xAB;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });      
   });
   describe('DARC', function () {
      const algorithm = 'DARC';
      const expected = 0x83;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('DVB-S2', function () {
      const algorithm = 'DVB-S2';
      const expected = 0x26;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('EBU', function () {
      const algorithm = 'EBU';
      const expected = 0xC0;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('I-CODE', function () {
      const algorithm = 'I-CODE';
      const expected = 0x6C;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('ITU', function () {
      const algorithm = 'ITU';
      const expected = 0x10;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('MAXIM', function () {
      const algorithm = 'MAXIM';
      const expected = 0x75;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('ROHC', function () {
      const algorithm = 'ROHC';
      const expected = 0xE3;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('WCDMA', function () {
      const algorithm = 'WCDMA';
      const expected = 0xE3;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc8(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc8(algorithm, check.slice(5), crc8(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
});
