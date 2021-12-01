const { crc8, crc16, crc32 } = require('easy-crc');

// CRC8
let data = '12345';
let checksum = crc8('CRC-8', data);

console.log(checksum.toString(16));

// CRC16
data = Buffer.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);
checksum = crc16('CCITT-FALSE', data);

console.log(checksum.toString(16));

// CRC32
data = 'Hello!';
checksum = crc32('CRC-32', data);

console.log(checksum.toString(16));
