import { readdir } from 'node:fs/promises';

try {
    const files = await readdir('../modules');

    console.log('FILES', files);

    console.log('DONE');
} catch (error) {
    if (error !== null && error.code === 'ENOENT') {
        console.log(`DIR "${error.path}" not found`);
    }
}