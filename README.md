# EASY-CRC

![npm](https://img.shields.io/npm/v/easy-crc) ![npm](https://img.shields.io/npm/dt/easy-crc) [![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Ffabio286%2Feasy-crc%2Fbadge&style=flat)](https://actions-badge.atrox.dev/fabio286/easy-crc/goto) ![GitHub](https://img.shields.io/github/license/fabio286/easy-crc)

A pure JavaScript and zero dependencies **cyclic redundancy check** (CRC) node module.  
It supports crc8, crc16 and crc32.

## Installation

```bash
npm install --save easy-crc
```

## Usage

There are three functions available respectively named `crc8()`, `crc16()` and `crc32()`. These functions take three arguments.  
The first argument is a string with the name of the desired algorithm (below the list), and the second is the data on which you want to calculate crc. Data can be a string or a buffer.  
The third parameter is the **CRC seed** and is optional.

```js
const { crc8, crc16, crc32 } = require('easy-crc');

// CRC8
let data = '12345';
let checksum = crc8('CRC-8', data);

console.log(checksum.toString(16));// "cb"

// CRC16
data = Buffer.from([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39]);
checksum = crc16('CCITT-FALSE', data);

console.log(checksum.toString(16));// "7d61"

// CRC32
data = 'Hello!';
checksum = crc32('CRC-32', data);

console.log(checksum.toString(16));// "9d2acc56"
```

## Available algorithms

The follow algorithm names **can be passed as first argument** of respective `crc8()`, `crc16()` and `crc32()` methods.

### CRC8

- CRC-8
- CDMA2000
- DARC
- DVB-S2
- EBU
- I-CODE
- ITU
- MAXIM
- ROHC
- WCDMA

### CRC16

- BUYPASS
- CCITT-FALSE
- ~~AUG-CCITT~~ not working at moment.
- ARC
- CDMA2000
- DDS-110
- DECT-R
- DECT-X
- DNP
- EN-13757
- GENIBUS
- MAXIM
- KERMIT
- MCRF4XX
- MODBUS
- RIELLO
- T10-DIF
- TELEDISK
- TMS37157
- USB
- X-25
- XMODEM
- CRC-A

### CRC32

- CRC-32
- CRC-32C
- CRC-32D
- CRC-32Q
- BZIP2
- JAMCRC
- MPEG-2
- POSIX
- XFER

## Running tests

```bash
npm test
```
