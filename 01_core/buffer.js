const buffer = Buffer.from('Node.js');

console.log(buffer);
console.log(buffer.toString('base64'));

console.log(Buffer.from([0x4e, 0x6f, 0x64, 0x65]).toString());