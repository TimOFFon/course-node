import { readdir } from 'node:fs';

readdir('../modules', (error, files) => {
    if (error !== null && error.code === 'ENOENT') {
        console.log(`DIR "${error.path}" not found`);
    }

    console.log('FILES', files);
});

console.log('DONE');