// Return values gotten from https://crccalc.com/

import chai from 'chai';
import { crc32 } from '../index'
chai.should()
const check = Buffer.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);// 0123456789

describe('CRC32', function () {
   describe('CRC-32', function () {
      it('should return 0xA684C7C6', function (done) {
         const crcCheck = crc32('CRC-32', check);
         crcCheck.should.equal(0xA684C7C6);
         done();
      });
   });
   describe('CRC-32C', function () {
      it('should return 0x280C069E', function (done) {
         const crcCheck = crc32('CRC-32C', check);
         crcCheck.should.equal(0x280C069E);
         done();
      });
   });
   describe('CRC-32D', function () {
      it('should return 0x95ED974E', function (done) {
         const crcCheck = crc32('CRC-32D', check);
         crcCheck.should.equal(0x95ED974E);
         done();
      });
   });
   describe('CRC-32Q', function () {
      it('should return 0xB1FF798E', function (done) {
         const crcCheck = crc32('CRC-32Q', check);
         crcCheck.should.equal(0xB1FF798E);
         done();
      });
   });
   describe('BZIP2', function () {
      it('should return 0x96B0E4E0', function (done) {
         const crcCheck = crc32('BZIP2', check);
         crcCheck.should.equal(0x96B0E4E0);
         done();
      });
   });
   describe('JAMCRC', function () {
      it('should return 0x597B3839', function (done) {
         const crcCheck = crc32('JAMCRC', check);
         crcCheck.should.equal(0x597B3839);
         done();
      });
   });
   describe('MPEG-2', function () {
      it('should return 0x694F1B1F', function (done) {
         const crcCheck = crc32('MPEG-2', check);
         crcCheck.should.equal(0x694F1B1F);
         done();
      });
   });
   describe('POSIX', function () {
      it('should return 0x07594AD8', function (done) {
         const crcCheck = crc32('POSIX', check);
         crcCheck.should.equal(0x07594AD8);
         done();
      });
   });
   describe('XFER', function () {
      it('should return 0x031DB075', function (done) {
         const crcCheck = crc32('XFER', check);
         crcCheck.should.equal(0x031DB075);
         done();
      });
   });
});
