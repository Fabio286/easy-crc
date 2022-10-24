import { Crc8Algorithms } from "../common/interfaces";
import { AlgorithmException } from "../classes/AlgorithmException";

import { crc_8 } from "../algorithms/crc8/crc-8";
import { cdma2000 } from "../algorithms/crc8/cdma2000";
import { darc } from "../algorithms/crc8/darc";
import { dvb_s2 } from "../algorithms/crc8/dvb-s2";
import { ebu } from "../algorithms/crc8/ebu";
import { i_code } from "../algorithms/crc8/i-code";
import { itu } from "../algorithms/crc8/itu";
import { maxim } from "../algorithms/crc8/maxim";
import { rohc } from "../algorithms/crc8/rohc";
import { wcdma } from "../algorithms/crc8/wcdma";

const crc8Algorithms: Crc8Algorithms = {
   'CRC-8': crc_8,
   CDMA2000: cdma2000,
   DARC: darc,
   'DVB-S2': dvb_s2,
   EBU: ebu,
   'I-CODE': i_code,
   ITU: itu,
   MAXIM: maxim,
   ROHC: rohc,
   WCDMA: wcdma
};

/**
 * @param {String} algorithm Name of the algorithm
 * @param {String|Buffer} data A string or an array of bytes
 * @param {Number=} seed A number
 * @returns {Number} CRC8 checksum
 */
function crc8 (algorithm: keyof Crc8Algorithms, data: string | Buffer, seed?: number) {
   const availables = Object.keys(crc8Algorithms);
   if (!availables.includes(algorithm))
      throw new AlgorithmException(algorithm);

   if (!Buffer.isBuffer(data)) data = Buffer.from(data);

   const {
      init,
      xorOut,
      table
   } = crc8Algorithms[algorithm];

   let crc = seed ? seed ^ xorOut : init;

   for (const b of data)
      crc = table[crc ^ b];

   return (crc ^ xorOut) & 0xFFFF;
}

export { crc8 };
