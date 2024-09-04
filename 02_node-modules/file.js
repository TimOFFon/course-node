import { readFile } from 'fs/promises';

const file = await readFile('./fs-async.js');

console.log(file.toString());
console.log('DONE');