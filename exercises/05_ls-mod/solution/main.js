import { dirname } from 'node:path';
import { listingExtension } from './filter.js';

const filePath = process.argv[1];
const myDir = dirname(filePath);

try {
    await listingExtension(myDir, 'txt');
} catch (err) {
    console.error(err);
}

//node C:\Users\sukon\Desktop\CodeDojo\course-node\course-node\exercises\05_ls-mod\solution\main.js