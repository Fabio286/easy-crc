import { Crc32Algorithms } from "../common/interfaces";
import { AlgorithmException } from "../classes/AlgorithmException";

import { bzip2 } from "../algorithms/crc32/bzip2";
import { crc_32 } from "../algorithms/crc32/crc-32";
import { crc_32c } from "../algorithms/crc32/crc-32c";
import { crc_32d } from "../algorithms/crc32/crc-32d";
import { crc_32q } from "../algorithms/crc32/crc-32q";
import { jamcrc } from "../algorithms/crc32/jamcrc";
import { mpeg_2 } from "../algorithms/crc32/mpeg-2";
import { posix } from "../algorithms/crc32/posix";
import { xfer } from "../algorithms/crc32/xfer";

const crc32Algorithms: Crc32Algorithms = {
   'CRC-32': crc_32,
   'CRC-32C': crc_32c,
   'CRC-32D': crc_32d,
   'CRC-32Q': crc_32q,
   BZIP2: bzip2,
   JAMCRC: jamcrc,
   'MPEG-2': mpeg_2,
   POSIX: posix,
   XFER: xfer
};

/**
 * @param {String} algorithm Name of the algorithm
 * @param {String|Buffer} data A string or an array of bytes
 * @param {Number=} seed A number
 * @returns {Number} CRC32 checksum
 */
function crc32 (algorithm: keyof Crc32Algorithms, data: string | Buffer, seed?: number) {
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

   let crc = seed ? (seed ^ xorOut) : init;

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

export { crc32 };
