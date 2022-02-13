// File for Testing

const BlockClass = require('./src/block.js');
const SHA256 = require('crypto-js/sha256');

let block  = new BlockClass.Block({'test': 123})
// console.log(block.hash)
// block.hash = SHA256(JSON.stringify(block)).toString()
// console.log(SHA256(JSON.stringify(block)).toString())
// console.log(block.hash)
// block.hash
// console.log(SHA256(JSON.stringify(block)).toString())
// console.log(block.hash)

block.validate().then(res => console.log(res)).catch(err => console.log(err.message))

block.getBData().then(res => console.log(res)).catch(err => console.log(err.message))