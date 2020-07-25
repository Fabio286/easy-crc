const crc16Algorithms = {
   BUYPASS: require('../algorithms/crc16/buypass'),
   'CCITT-FALSE': require('../algorithms/crc16/ccitt-false'),
   'AUG-CCITT': require('../algorithms/crc16/aug-ccit'),
   ARC: require('../algorithms/crc16/arc'),
   CDMA2000: require('../algorithms/crc16/cdma2000'),
   'DDS-110': require('../algorithms/crc16/dds-110'),
   'DECT-R': require('../algorithms/crc16/dect-r'),
   'DECT-X': require('../algorithms/crc16/dect-x'),
   DNP: require('../algorithms/crc16/dnp')
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
 * @param {Uint16Array} data An array of bytes
 * @returns
 */
function crc16 (algorithm, data) {
   const availables = Object.keys(crc16Algorithms);
   if (!availables.includes(algorithm))
      throw new AlgorithmException(algorithm);

   const {
      init,
      invertedInit,
      xorOut,
      refOut,
      refIn,
      byteArray
   } = crc16Algorithms[algorithm];

   let crc = refIn ? invertedInit : init;

   if (refOut) {
      for (const b of data)
         crc = byteArray[(b ^ crc) & 0xFF] ^ (crc >> 8 & 0xFF);
   }
   else {
      for (const b of data)
         crc = byteArray[((crc >> 8) ^ b) & 0xFF] ^ (crc << 8);
   }

   return (crc ^ xorOut) & 0xFFFF;
}

module.exports = crc16;
