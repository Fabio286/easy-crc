export interface Algorithm {
   init: number,
   invertedInit?: number | null,
   xorOut: number,
   refOut: boolean,
   refIn: boolean,
   table: Uint8Array | Uint16Array | Uint32Array
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

export interface Crc32Algorithms {
   'CRC-32': Algorithm,
   'CRC-32C': Algorithm,
   'CRC-32D': Algorithm,
   'CRC-32Q': Algorithm,
   BZIP2: Algorithm,
   JAMCRC: Algorithm,
   'MPEG-2': Algorithm,
   POSIX: Algorithm,
   XFER: Algorithm,
}