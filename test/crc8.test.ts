// Return values got from https://crccalc.com/

import chai from 'chai';
import { crc8 } from '../index'
chai.should();
const check = Buffer.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);// 0123456789

describe('CRC8', function () {
   describe('CRC-8', function () {
      it('should return 0x45', function (done) {
         const crcCheck = crc8('CRC-8', check);
         crcCheck.should.equal(0x45);
         done();
      });
   });
   describe('CDMA2000', function () {
      it('should return 0xAB', function (done) {
         const crcCheck = crc8('CDMA2000', check);
         crcCheck.should.equal(0xAB);
         done();
      });
   });
   describe('DARC', function () {
      it('should return 0x83', function (done) {
         const crcCheck = crc8('DARC', check);
         crcCheck.should.equal(0x83);
         done();
      });
   });
   describe('DVB-S2', function () {
      it('should return 0x26', function (done) {
         const crcCheck = crc8('DVB-S2', check);
         crcCheck.should.equal(0x26);
         done();
      });
   });
   describe('EBU', function () {
      it('should return 0xC0', function (done) {
         const crcCheck = crc8('EBU', check);
         crcCheck.should.equal(0xC0);
         done();
      });
   });
   describe('I-CODE', function () {
      it('should return 0x6C', function (done) {
         const crcCheck = crc8('I-CODE', check);
         crcCheck.should.equal(0x6C);
         done();
      });
   });
   describe('ITU', function () {
      it('should return 0x10', function (done) {
         const crcCheck = crc8('ITU', check);
         crcCheck.should.equal(0x10);
         done();
      });
   });
   describe('MAXIM', function () {
      it('should return 0x75', function (done) {
         const crcCheck = crc8('MAXIM', check);
         crcCheck.should.equal(0x75);
         done();
      });
   });
   describe('ROHC', function () {
      it('should return 0xE3', function (done) {
         const crcCheck = crc8('ROHC', check);
         crcCheck.should.equal(0xE3);
         done();
      });
   });
   describe('WCDMA', function () {
      it('should return 0xE3', function (done) {
         const crcCheck = crc8('WCDMA', check);
         crcCheck.should.equal(0xE3);
         done();
      });
   });
   describe('Seed', function () {
      it('should return 0x45', function (done) {
         const crcCheck = crc8('CRC-8', check.slice(5), crc8('CRC-8', check.slice(0, 5)));
         crcCheck.should.equal(0x45);
         done();
      });
   });
});
