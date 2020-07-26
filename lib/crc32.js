'use strict';
const crc32Algorithms = {
   'CRC-32': require('../algorithms/crc32/crc-32'),
   'CRC-32C': require('../algorithms/crc32/crc-32c'),
   'CRC-32D': require('../algorithms/crc32/crc-32d'),
   'CRC-32Q': require('../algorithms/crc32/crc-32q'),
   BZIP2: require('../algorithms/crc32/bzip2'),
   JAMCRC: require('../algorithms/crc32/jamcrc'),
   'MPEG-2': require('../algorithms/crc32/mpeg-2'),
   POSIX: require('../algorithms/crc32/posix'),
   XFER: require('../algorithms/crc32/xfer')
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
 * @param {Buffer} data Data buffer
 * @returns {Number} CRC32 checksum
 */
function crc32 (algorithm, data) {
   const availables = Object.keys(crc32Algorithms);
   if (!availables.includes(algorithm))
      throw new AlgorithmException(algorithm);

   if (!Buffer.isBuffer(data)) data = Buffer.from(data);

   const {
      init,
      xorOut,
      refOut,
      table
   } = crc32Algorithms[algorithm];

   let crc = init;

   if (refOut) {
      for (const b of data)
         crc = table[(b ^ crc) & 0xFF] ^ (crc >> 8 & 0xFFFFFF);
   }
   else {
      for (const b of data)
         crc = table[((crc >> 24) ^ b) & 0xFF] ^ (crc << 8);
   }

   return (crc ^ xorOut) >>> 0;
}

module.exports = crc32;
