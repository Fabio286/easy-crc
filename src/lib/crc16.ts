import { Crc16Algorithms } from "../common/interfaces";
import { AlgorithmException } from "../classes/AlgorithmException";

import { arc } from "../algorithms/crc16/arc";
import { aug_ccit } from "../algorithms/crc16/aug-ccit";
import { buypass } from "../algorithms/crc16/buypass";
import { ccitt_false } from "../algorithms/crc16/ccitt-false";
import { cdma2000 } from "../algorithms/crc16/cdma2000";
import { crc_a } from "../algorithms/crc16/crc-a";
import { dds_110 } from "../algorithms/crc16/dds-110";
import { dect_r } from "../algorithms/crc16/dect-r";
import { dect_x } from "../algorithms/crc16/dect-x";
import { dnp } from "../algorithms/crc16/dnp";
import { en_13757 } from "../algorithms/crc16/en-13757";
import { genibus } from "../algorithms/crc16/genibus";
import { kermit } from "../algorithms/crc16/kermit";
import { maxim } from "../algorithms/crc16/maxim";
import { mcrf4xx } from "../algorithms/crc16/mcrf4xx";
import { modbus } from "../algorithms/crc16/modbus";
import { riello } from "../algorithms/crc16/riello";
import { t10_dif } from "../algorithms/crc16/t10-dif";
import { teledisk } from "../algorithms/crc16/teledisk";
import { tms37157 } from "../algorithms/crc16/tms37157";
import { usb } from "../algorithms/crc16/usb";
import { x_25 } from "../algorithms/crc16/x-25";
import { xmodem } from "../algorithms/crc16/xmodem";

const crc16Algorithms: Crc16Algorithms = {
   BUYPASS: buypass,
   'CCITT-FALSE': ccitt_false,
   'AUG-CCITT': aug_ccit,
   ARC: arc,
   CDMA2000: cdma2000,
   'DDS-110': dds_110,
   'DECT-R': dect_r,
   'DECT-X': dect_x,
   DNP: dnp,
   'EN-13757': en_13757,
   GENIBUS: genibus,
   MAXIM: maxim,
   KERMIT: kermit,
   MCRF4XX: mcrf4xx,
   MODBUS: modbus,
   RIELLO: riello,
   'T10-DIF': t10_dif,
   TELEDISK: teledisk,
   TMS37157: tms37157,
   USB: usb,
   'X-25': x_25,
   XMODEM: xmodem,
   'CRC-A': crc_a
};

/**
 * @param {String} algorithm Name of the algorithm
 * @param {String|Buffer} data A string or an array of bytes
 * @param {Number=} seed A number
 * @returns {Number} CRC16 checksum
 */
function crc16 (algorithm: keyof Crc16Algorithms, data: string | Buffer, seed?: number) {
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

   let crc = seed ? seed ^ xorOut : (refIn ? invertedInit || 0 : init);
   
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

export { crc16 };
