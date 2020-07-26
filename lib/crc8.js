'use strict';
const crc8Algorithms = {
   'CRC-8': require('../algorithms/crc8/crc-8'),
   CDMA2000: require('../algorithms/crc8/cdma2000'),
   DARC: require('../algorithms/crc8/darc'),
   'DVB-S2': require('../algorithms/crc8/dvb-s2'),
   EBU: require('../algorithms/crc8/ebu'),
   'I-CODE': require('../algorithms/crc8/i-code'),
   ITU: require('../algorithms/crc8/itu'),
   MAXIM: require('../algorithms/crc8/maxim'),
   ROHC: require('../algorithms/crc8/rohc'),
   WCDMA: require('../algorithms/crc8/wcdma')
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
 * @returns {Number} CRC8 checksum
 */
function crc8 (algorithm, data) {
   const availables = Object.keys(crc8Algorithms);
   if (!availables.includes(algorithm))
      throw new AlgorithmException(algorithm);

   if (!Buffer.isBuffer(data)) data = Buffer.from(data);

   const {
      init,
      xorOut,
      table
   } = crc8Algorithms[algorithm];

   let crc = init;

   for (const b of data)
      crc = table[crc ^ b];

   return (crc ^ xorOut) & 0xFFFF;
}

module.exports = crc8;
