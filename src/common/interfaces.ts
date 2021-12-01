export interface Algorithm {
   init: number,
   xorOut: number,
   refOut: boolean,
   refIn: boolean,
   table: Uint8Array
}

export interface Crc8Algorithms {
   'CRC-8': Algorithm,
   CDMA2000: Algorithm,
   DARC: Algorithm,
   'DVB-S2': Algorithm,
   EBU: Algorithm,
   'I-CODE': Algorithm,
   ITU: Algorithm,
   MAXIM: Algorithm,
   ROHC: Algorithm,
   WCDMA: Algorithm
}

export interface Crc16Algorithms {
   BUYPASS: Algorithm,
   'CCITT-FALSE': Algorithm,
   'AUG-CCITT': Algorithm,
   ARC: Algorithm,
   CDMA2000: Algorithm,
   'DDS-110': Algorithm,
   'DECT-R': Algorithm,
   'DECT-X': Algorithm,
   DNP: Algorithm,
   'EN-13757': Algorithm,
   GENIBUS: Algorithm,
   MAXIM: Algorithm,
   KERMIT: Algorithm,
   MCRF4XX: Algorithm,
   MODBUS: Algorithm,
   RIELLO: Algorithm,
   'T10-DIF': Algorithm,
   TELEDISK: Algorithm,
   TMS37157: Algorithm,
   USB: Algorithm,
   'X-25': Algorithm,
   XMODEM: Algorithm,
   'CRC-A': Algorithm
}