'use strict';
const crc16Algorithms = {
   BUYPASS: require('../algorithms/crc16/buypass'),
   'CCITT-FALSE': require('../algorithms/crc16/ccitt-false'),
   'AUG-CCITT': require('../algorithms/crc16/aug-ccit'),
   ARC: require('../algorithms/crc16/arc'),
   CDMA2000: require('../algorithms/crc16/cdma2000'),
   'DDS-110': require('../algorithms/crc16/dds-110'),
   'DECT-R': require('../algorithms/crc16/dect-r'),
   'DECT-X': require('../algorithms/crc16/dect-x'),
   DNP: require('../algorithms/crc16/dnp'),
   'EN-13757': require('../algorithms/crc16/en-13757'),
   GENIBUS: require('../algorithms/crc16/genibus'),
   MAXIM: require('../algorithms/crc16/maxim'),
   KERMIT: require('../algorithms/crc16/kermit'),
   MCRF4XX: require('../algorithms/crc16/mcrf4xx'),
   MODBUS: require('../algorithms/crc16/modbus'),
   RIELLO: require('../algorithms/crc16/riello'),
   'T10-DIF': require('../algorithms/crc16/t10-dif'),
   TELEDISK: require('../algorithms/crc16/teledisk'),
   TMS37157: require('../algorithms/crc16/tms37157'),
   USB: require('../algorithms/crc16/usb'),
   'X-25': require('../algorithms/crc16/x-25'),
   XMODEM: require('../algorithms/crc16/xmodem'),
   'CRC-A': require('../algorithms/crc16/crc-a')
};

function AlgorithmException (value) {
   this.value = value;
   this.message = 'Unknown algorithm';
   this.toString = () => {
      return `${this.message} "${this.value}"`;
   };
}

/**
 * @param {String} algorithm Name of the algorithm
 * @param {Buffer} data An array of bytes
 * @returns {Number} CRC16 checksum
 */
function crc16 (algorithm, data) {
   const availables = Object.keys(crc16Algorithms);
   if (!availables.includes(algorithm))
      throw new AlgorithmException(algorithm);

   if (!Buffer.isBuffer(data)) data = Buffer.from(data);

   const {
      init,
      invertedInit,
      xorOut,
      refOut,
      refIn,
      table
   } = crc16Algorithms[algorithm];

   let crc = refIn ? invertedInit : init;

   if (refOut) {
      for (const b of data)
         crc = table[(b ^ crc) & 0xFF] ^ (crc >> 8 & 0xFF);
   }
   else {
      for (const b of data)
         crc = table[((crc >> 8) ^ b) & 0xFF] ^ (crc << 8);
   }

   return (crc ^ xorOut) & 0xFFFF;
}

module.exports = crc16;
