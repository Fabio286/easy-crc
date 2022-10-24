// Return values gotten from https://crccalc.com/

import { doesNotMatch } from 'assert';
import chai from 'chai';
import { crc32 } from '../index'
chai.should()
const check = Buffer.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);// 0123456789

describe('CRC32', function () {
   describe('CRC-32', function () {
      const algorithm = 'CRC-32';
      const expected = 0xA684C7C6;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc32(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc32(algorithm, check.slice(5), crc32(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('CRC-32C', function () {
      const algorithm = 'CRC-32C';
      const expected = 0x280C069E;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc32(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc32(algorithm, check.slice(5), crc32(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('CRC-32D', function () {
      const algorithm = 'CRC-32D';
      const expected = 0x95ED974E;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc32(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc32(algorithm, check.slice(5), crc32(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('CRC-32Q', function () {
      const algorithm = 'CRC-32Q';
      const expected = 0xB1FF798E;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc32(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc32(algorithm, check.slice(5), crc32(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('BZIP2', function () {
      const algorithm = 'BZIP2';
      const expected = 0x96B0E4E0;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc32(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc32(algorithm, check.slice(5), crc32(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('JAMCRC', function () {
      const algorithm = 'JAMCRC';
      const expected = 0x597B3839;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc32(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc32(algorithm, check.slice(5), crc32(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('MPEG-2', function () {
      const algorithm = 'MPEG-2';
      const expected = 0x694F1B1F;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc32(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc32(algorithm, check.slice(5), crc32(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('POSIX', function () {
      const algorithm = 'POSIX';
      const expected = 0x07594AD8;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc32(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc32(algorithm, check.slice(5), crc32(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
   describe('XFER', function () {
      const algorithm = 'XFER';
      const expected = 0x031DB075;

      it(`should return ${expected}`, function (done) {
         const crcCheck = crc32(algorithm, check);
         crcCheck.should.equal(expected);
         done();
      });
      it(`should return ${expected} when seeded`, function (done) {
         const crcCheck = crc32(algorithm, check.slice(5), crc32(algorithm, check.slice(0, 5)));
         crcCheck.should.equal(expected);
         done();
      });
   });
});
