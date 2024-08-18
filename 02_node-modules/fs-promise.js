import { readdir } from 'node:fs/promises';

readdir('../modules')
    .then(files => {
        console.log('FILES', files);
    })
    .catch(error => {
        if (error !== null && error.code === 'ENOENT') {
            console.log(`DIR "${error.path}" not found`);
        }
    });